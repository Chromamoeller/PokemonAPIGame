<script setup>
import CardContainer from "./components/CardContainer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="h-full flex justify-center items-center">
    <div class="w-full">
      <CardContainer />
    </div>
  </div>
</template>

<style scoped></style>
