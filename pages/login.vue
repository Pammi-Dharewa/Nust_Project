<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="handleLogin" class="bg-white shadow-md p-6 rounded">
      <h2 class="text-2xl font-bold mb-4">Login</h2>

      <div class="mb-4">
        <label>Email:</label>
        <input
          type="email"
          v-model="email"
          class="input"
          required
        />
      </div>

      <div class="mb-4">
        <label>Password:</label>
        <input
          type="password"
          v-model="password"
          class="input"
          required
        />
      </div>

      <button type="submit" class="btn-primary">Login</button>

      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async handleLogin() {
      if (!this.validateForm()) {
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/api/login', {
          email: this.email,
          password: this.password,
        });

        if (response.data.success) {
          localStorage.setItem('authToken', response.data.token);
          this.$router.push('/listings');
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle validation error from the server
          this.error = 'Invalid email or password. Please try again.';
        } else {
          // Handle server error or other unexpected errors
          this.error = 'There was an error while processing your request. Please try again.';
        }
      }
    },

    validateForm() {
      if (!this.email) {
        this.error = 'Email is required';
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.error = 'Please enter a valid email';
        return false;
      }
      if (!this.password) {
        this.error = 'Password is required';
        return false;
      }
      this.error = '';
      return true;
    }
  },
};
</script>

<style scoped>


.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
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

.text-red-500 {
  color: #f56565;
}
</style>
