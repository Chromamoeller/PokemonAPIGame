<script setup>
const PLAYER = {
  name: "Spieler Name",
  level: 1,
  currentPokemon: [],
  pokemon: undefined,
  items: [],
  money: 0,
  badges: [],
  poekdex: [],
};
</script>
<template>
  <div class="w-full flex justify-center">
    <!-- <div
      class="w-2/4 border border-blue-400 rounded-b-2xl rounded-b-2xl bg-white flex justify-around"
    > -->
    <div class="rounded-xl shadow-md overflow-hidden bg-white">
      <table class="min-w-full text-sm text-left text-gray-700">
        <thead class="bg-gray-100 text-gray-800 font-semibold">
          <tr>
            <th class="px-4 py-2">Eigenschaft</th>
            <th class="px-4 py-2">Wert</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr>
            <td class="px-4 py-2">Name</td>
            <td class="px-4 py-2">{{ PLAYER.name }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Level</td>
            <td class="px-4 py-2">{{ PLAYER.level }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Geld</td>
            <td class="px-4 py-2">{{ PLAYER.money }} ₽</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Pokémon</td>
            <td class="px-4 py-2 text-gray-500 italic">
              {{ PLAYER.name }}
            </td>
          </tr>
          <tr>
            <td class="px-4 py-2">Items</td>
            <td class="px-4 py-2">{{ PLAYER.items }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Orden</td>
            <td class="px-4 py-2">{{ PLAYER.badges }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Pokédex-Einträge</td>
            <td class="px-4 py-2">{{ PLAYER.poekdex }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- </div> -->
  </div>
</template>
