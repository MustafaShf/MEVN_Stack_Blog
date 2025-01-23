<template>
  <header class="text-gray-600 body-font shadow-md shadow-gray-400">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> -->
        <span class="ml-3 text-xl">GM Blog's</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <RouterLink to="/" class="mr-5 hover:text-gray-900">Home</RouterLink>
        <RouterLink to="/about" class="mr-5 hover:text-gray-900">About</RouterLink>
        <RouterLink to="/login" class="mr-5 hover:text-gray-900 bg-purple-500 text-white p-2 pl-3 pr-3 rounded-sm">Login</RouterLink>
      </nav>
      
    </div>
  </header>
</template>