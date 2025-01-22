<script setup>
import Navbar from "./components/Navbar.vue";
import data from "./assets/portfolio";
</script>

<template>
  <Navbar />
  <router-view :data="data" />
  <!-- router-view는 라우터가 표시할 컴포넌트를 표시하는 영역입니다. -->
</template>

<style scoped lang="scss"></style>
