<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'


</script>

<template>
  <Header />
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.container{
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 500px 92px;
}

@media screen and (max-width: 1800px) {
  .container{
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 400px 92px;
}
}
</style>
