<script setup>
import { ref, onMounted, watch } from "vue";
import ChildComp from "./components/ChildComp.vue";

let count = ref(0); // 상태변수 초기값(state)
let title = "Hello Vue 3";
let color = ref("green");

onMounted(() => {
  console.log("mounted");
});

const increaseCount = () => {
  count.value++; // 상태변수 변경할때 .value 사용, Vue 2의 this.count++
};

watch(color, () => {});
</script>

<template>
  <div class="wrap">
    <h1>{{ title }}</h1>
    <button @click="increaseCount">Count++</button>
    <p>{{ count }}</p>
    <ChildComp :color="color" bgColor="gold" />
    <button @click="color = 'red'">change color</button>
  </div>
</template>

<style scoped></style>
