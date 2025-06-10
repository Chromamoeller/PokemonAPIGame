<script setup>
import { usePlayerStore } from "../stores/Playerinfo";

const store = usePlayerStore();
</script>

<template>
  <div
    class="absolute left-1/2 -translate-x-1/2 -translate-y-1 rounded-bl-2xl rounded-br-2xl bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 border-4 border-blue-500 shadow-xl text-black p-4 w-[300px] text-center font-semibold tracking-wide backdrop-blur-sm"
  >
    <h2>Spieler: {{ store.name }}</h2>
    <p>Geld: {{ store.geld }} ¥</p>
    <p>Pokébälle: {{ store.items.pokeball }}</p>
    <p>Ausgewähltes Pokémon: {{ store.selectedPokemon?.name || "Keins" }}</p>
  </div>
</template>
