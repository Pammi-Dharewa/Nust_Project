<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="page <= 1">Previous</button>
    <button @click="nextPage" :disabled="page >= totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      if (this.page > 1) {
        this.$emit('update:page', this.page - 1);
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.$emit('update:page', this.page + 1);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
