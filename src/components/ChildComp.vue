<template>
  <div>
    <h2>Child Component</h2>
    <p :style="{ color: color, backgroundColor: bgColor }">{{ color }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  color: String,
  bgColor: String,
});
// defineProps: 부모 컴포넌트로부터 전달받은 props를 사용할 때 사용
</script>
<style></style>
