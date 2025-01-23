<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Register</h1>
  
        <form @submit.prevent="handleSubmit">
          <!-- Name Input -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Enter your name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
  
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
            Register
          </button>
        </form>
  
        <!-- Footer -->
        <p class="mt-4 text-sm text-gray-600 text-center">
          Already have an account? <router-link to="login">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "", // Added name field
        email: "",
        password: "",
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission (e.g., call an API or validate input)
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        alert("Registration successful!");
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles if necessary */
  </style>
  