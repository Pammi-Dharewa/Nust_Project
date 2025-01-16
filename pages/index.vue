<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-center">
      <h1 class="text-5xl font-bold mb-6">Welcome to the Homepage</h1>
      <p class="text-xl mb-4">Your one-stop destination for the best listings</p>
      <router-link to="/listings" class="btn-primary">View Listings</router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.$router.push('/login');
    } else {
      console.log('HomePage mounted');
    }
  }
}
</script>

<style scoped>
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
</style>
