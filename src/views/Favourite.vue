<script setup>
import { useCounterStore } from '@/stores/FoodStore';

const foodStore = useCounterStore();

let favorite = foodStore.favorite;

</script>

<template>
  <div class="title">
    <h1>Favorite ({{favorite.length}})</h1>

    <div class="difficulty">
      <p>Difficulty</p>
      <select name="" id="">
        <option value="ПН">Easy</option>
        <option value="ВТ">Medium</option>
        <option value="ВТ">Hard</option>
      </select>
    </div>
  </div>
</template>

<style>
.difficulty {
  text-align: start;
  width: 162px;
  margin: 0 auto;
}

select {
  width: 162px;
  height: 46px;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: #fff;
}
</style>
