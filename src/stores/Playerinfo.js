import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    name: "Ash",
    geld: 500,
    items: {
      pokeball: 5,
      trank: 2,
    },
    pokemon: [],
    selectedPokemon: null,
  }),

  actions: {},
});
