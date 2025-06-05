<script setup>
import CardContainer from "./components/CardContainer.vue";
// import Header from "./components/Header.vue";
import PlayerInfo from "./components/PlayerInfo.vue";
</script>

<template>
  <div class="header">
    <!-- <Header /> -->
  </div>
  <PlayerInfo />
  <div class="h-[500px] flex justify-center items-center">
    <div class="w-full">
      <CardContainer />
    </div>
  </div>
</template>

<style scoped></style>
