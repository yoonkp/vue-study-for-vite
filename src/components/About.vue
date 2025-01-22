<template>
  <section id="about" class="container">
    <h1>About</h1>
    <div class="row gx-5">
      <figure class="col-md-6">
        <img src="../assets/images/profile.jpg" alt="profile picture" />
        <figcaption>About Yoon kyung</figcaption>
      </figure>
      <p class="col-md-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc</p>
    </div>

    <article class="row mt-5">
      <h2>Skills</h2>
      <dl>
        <div v-for="i in data">
          <dt>{{ i.title }}</dt>
          <dd>
            <div class="progress" role="progressbar">
              <div class="progress-bar" :style="{ width: i.percent }">{{ i.percent }}</div>
            </div>
          </dd>
        </div>
      </dl>
    </article>
  </section>
</template>
<script setup>
import data from "../assets/skill";
</script>
<style lang="scss">
figure {
  img {
    width: 100%;
  }
}
</style>
