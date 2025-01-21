<script setup>
import { ref } from "vue";

let count = ref(0); // 상태변수 초기값(state)
let title = "Hello Vue 3";
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <button>Count++</button>
  </div>
</template>

<style scoped></style>
