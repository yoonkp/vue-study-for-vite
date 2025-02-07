<template>
  <section id="detail" class="container">
    <h1>{{ props.data[$route.params.id].title }}</h1>
    {{ $route.params.id }}
    <article class="pb-5">
      <img :src="`${data[$route.params.id].imgUrl}`" :alt="`${data[$route.params.id].title}`" />
      <p>{{ data[$route.params.id].desc }}</p>
      <small class="mb-3 text-secondary">{{ data[$route.params.id].skills }}</small>
      <p>
        <a :href="`${data[$route.params.id].link}`" class="btn btn-primary mt-4" target="_blank">홈페이지</a>
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt deleniti laborum necessitatibus perferendis libero aspernatur ducimus, culpa aliquid ea rem maiores explicabo ab alias ad
        mollitia voluptatibus neque quod perspiciatis.
      </p>
      <button @click="$router.push('/portfolio')" class="btn btn-secondary">돌아가기</button>
      <!--
        $router.push('/portfolio')를 사용하여 라우터를 이동합니다.
        이때, 라우터를 이동할 때는 반드시 /로 시작해야 합니다.
        push: 이동할 URL을 지정합니다.
      -->
    </article>
  </section>
</template>
<script setup>
const props = defineProps({
  data: Array,
});
</script>
<style lang="scss" scoped>
#detail h1 {
  display: flex;
  gap: 1rem;
  align-items: center;
  .badge {
    font-size: small;
  }
}

article {
  img {
    width: 100%;
    aspect-ratio: 8/3;
    object-fit: cover;
    object-position: top;
    margin-bottom: 1em;
  }
}
</style>
