<script setup></script>
<template>
  <header
    class="bg-gradient-to-r from-green-200 via-green-100 to-green-300 shadow-lg w-full absolute top-0 left-0"
  >
    <div class="w-full mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo oder Spieltitel -->
      <div class="flex items-center space-x-2">
        <img src="/pokemonBilder/025-pikachu.png" class="h-10 w-10" />

        <span class="text-2xl font-extrabold text-green-800 tracking-wide"
          >Poke Quest</span
        >
      </div>

      <!-- Navigation -->
      <nav class="hidden md:flex space-x-6 text-green-900 font-medium">
        <a href="#" class="hover:text-blue-700 transition">Start</a>
        <a href="#" class="hover:text-blue-700 transition">Dein Garten</a>
        <a href="#" class="hover:text-blue-700 transition">Markt</a>
        <a href="#" class="hover:text-blue-700 transition">Profil</a>
      </nav>

      <!-- Call-to-Action Button -->
      <div class="hidden md:block">
        <a
          href="#"
          class="bg-pink-300 hover:bg-pink-400 text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
        >
          Jetzt spielen 🌸
        </a>
      </div>

      <!-- Mobile Menu Icon -->
      <div class="md:hidden">
        <button class="text-green-800 hover:text-green-600 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
