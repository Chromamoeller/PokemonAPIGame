<script setup>
import allPokemons from "../api/pokemon_with_colors.json";
function getRandomPokemonImage() {
  const selected = [];
  const usedIndices = new Set();

  while (selected.length < 1) {
    const randomIndex = Math.floor(Math.random() * allPokemons.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      selected.push(allPokemons[randomIndex]);
    }
  }
  return selected;
}
const pokemonURLs = getRandomPokemonImage();
console.log(pokemonURLs);
</script>
<template>
  <div
    class="relative flex flex-col w-72 h-96 rounded-2xl shadow-md overflow-hidden"
    :style="{ backgroundColor: pokemonURLs[0].farben[0] }"
  >
    <!-- Typ-Farb-Kreis oben rechts -->
    <!-- Wrapper für Positionierung -->
    <div class="absolute top-2 right-2 group">
      <!-- Kreis -->
      <div
        v-if="pokemonURLs[0].farben[1]"
        class="w-5 h-5 rounded-full border border-white"
        :style="{ backgroundColor: pokemonURLs[0].farben[1] }"
      ></div>

      <!-- Tooltip -->
      <div
        class="first-letter:uppercase absolute right-0 mt-1 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded shadow z-10"
      >
        {{ pokemonURLs[0].types[1] }}
      </div>
    </div>

    <!-- Kopfbereich mit Name & Bild -->
    <div class="flex flex-col items-center justify-start p-2 flex-grow">
      <p class="first-letter:uppercase text-xl font-semibold text-center">
        {{ pokemonURLs[0].name }}
      </p>
      <img :src="pokemonURLs[0].image" class="h-40 object-contain" />
    </div>

    <!-- Unterer Bereich mit Move & Buttons -->
    <div class="bg-gray-900 text-white p-3 text-center space-y-2">
      <p class="first-letter:uppercase text-lg">
        {{ pokemonURLs[0].firstMove }}
      </p>
      <div class="flex justify-center gap-2">
        <button class="bg-white text-black px-2 py-1 rounded text-sm">
          Info
        </button>
        <button class="bg-white text-black px-2 py-1 rounded text-sm">
          Catch
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
