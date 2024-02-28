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
  padding: 30px 294px 92px;
}
</style>
