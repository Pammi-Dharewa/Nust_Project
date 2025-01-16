<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Listings</h1>

    <!-- Go to Home Button -->
    <router-link to="/" class="btn-primary mb-4">Go to Home</router-link>

    <!-- Loading Indicator -->
    <div v-if="loading" class="text-center text-xl text-blue-600">
      Loading items...
      <div class="loader"></div>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="text-center text-xl text-red-600">
      {{ error }}
    </div>

    <!-- Sorting and Filtering Controls -->
    <div v-if="!loading && !error" class="flex justify-between items-center mb-4 bg-white p-4 rounded shadow">
      <div>
        <label class="font-semibold mr-2">Sort by:</label>
        <select v-model="sortKey" @change="sortItems" class="border border-gray-300 p-2 rounded">
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div>
        <label class="font-semibold mr-2">Filter by category:</label>
        <select v-model="filterCategory" @change="filterItems" class="border border-gray-300 p-2 rounded">
          <option value="">All</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
    </div>

    <!-- Item List -->
    <ul v-if="!loading && !error" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="item in paginatedItems" :key="item.id" class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
        <h2 class="text-2xl font-semibold mb-2">{{ item.name }}</h2>
        <p class="text-gray-700 mb-1">Price: ₹{{ item.price }}</p>
        <p class="text-gray-500">{{ item.description }}</p>
      </li>
    </ul>

    <!-- Pagination Buttons -->
    <div v-if="!loading && !error" class="flex justify-center mt-6">
      <button @click="updatePage(page - 1)" :disabled="page === 1" class="btn-secondary mx-2">Previous</button>
      <span class="text-xl mx-2">{{ page }} / {{ totalPages }}</span>
      <button @click="updatePage(page + 1)" :disabled="page === totalPages" class="btn-secondary mx-2">Next</button>
    </div>
  </div>
</template>

<script>
import { fetchMockItems } from '@/assets/mockApi.js';

export default {
  data() {
    return {
      items: [],
      page: 1,
      perPage: 10,
      sortKey: 'name',
      filterCategory: '',
      loading: false,
      error: null,
      fetched: false
    };
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { name: 'description', content: this.pageDescription },
        { property: 'og:title', content: this.pageTitle }
      ]
    };
  },
  computed: {
    pageTitle() {
      return this.fetched ? 'Listings Page | My Nuxt.js Application' : 'Loading Listings...';
    },
    pageDescription() {
      return this.fetched ? `Displaying ${this.items.length} items with dynamic filtering and sorting options.` : 'A fully functional Nuxt.js application';
    },
    paginatedItems() {
      const filteredItems = this.filterCategory
        ? this.items.filter(item => item.category === this.filterCategory)
        : this.items;
      const start = (this.page - 1) * this.perPage;
      const end = this.page * this.perPage;
      return filteredItems.slice(start, end);
    },
    totalPages() {
      const filteredItems = this.filterCategory
        ? this.items.filter(item => item.category === this.filterCategory)
        : this.items;
      return Math.ceil(filteredItems.length / this.perPage);
    },
    categories() {
      return [...new Set(this.items.map(item => item.category))];
    }
  },
  
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        this.items = await fetchMockItems();
        this.sortItems();
        this.fetched = true;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    sortItems() {
      this.items.sort((a, b) => {
        if (this.sortKey === 'price') {
          return a[this.sortKey] - b[this.sortKey];
        }
        return a[this.sortKey].localeCompare(b[this.sortKey]);
      });
    },
    filterItems() {
      this.page = 1; // Reset to the first page when filtering
    },
    updatePage(newPage) {
      this.page = newPage;
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
body {
  background-color: #f9fafb;
}
.btn-primary {
  background-color: #3490dc;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: #2779bd;
}
.btn-secondary {
  background-color: #ddd;
  color: #333;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.btn-secondary:hover {
  background-color: #ccc;
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3490dc; /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>
