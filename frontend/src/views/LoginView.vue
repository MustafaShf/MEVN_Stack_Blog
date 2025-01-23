<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Login</h1>
  
        <form @submit.prevent="handleSubmit">
          <!-- Email Input -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
  
          <!-- Password Input -->
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
  
        <!-- Footer -->
        <p class="mt-4 text-sm text-gray-600 text-center">
          Don't have an account? <router-link to="Register"  class="text-blue-500 hover:underline">Register</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
import RegisterView from './RegisterView.vue';

  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission (e.g., call an API or validate input)
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        alert("Login successful!");
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles if necessary */
  </style>
  