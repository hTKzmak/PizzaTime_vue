<script setup>
import { useCounterStore } from '@/stores/FoodStore';

const foodStore = useCounterStore();

let data = foodStore.data;

</script>

<template>
  <div class="title">
    <h1>All recipes</h1>

    <div class="search">
      <p>Search recpies</p>
      <input type="text" id="input-search" @keydown.enter="foodStore.searchFunc($event.target.value)">
    </div>
  </div>

  <div class="food-list">
    <div v-for="info in data">
      <div class="food-item">
        <img :src=info.image alt="#">
        <div class="food-item-info">
          <h3>{{ info.name }}</h3>
          <p>Difficult: {{ info.difficulty }}</p>
          <p>Cuisine: {{ info.cuisine }}</p>
          <button @click="foodStore.addToFavourite(info.id)">Add to favorite</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

.title{
  text-align: center;
}

.search{
  width: 425px;
  text-align: start;
  margin: 0 auto;
}

#input-search{
  width: 425px;
  height: 46px;
  border: 2px solid #000;
  border-radius: 10px;
}


.food-list {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
}

.food-item {
  border-radius: 15px;
}

.food-item-info {
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.food-item>img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.food-item-info>button {
  margin: 0 auto;
  display: flex;


  background-color: #FF4F04;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 30px;
  padding: 14px 28px;

  cursor: pointer;
}

.food-item-info>h3 {
  width: 200px;
}

img {
  width: 228.8px;
  height: 207.89px;
}
</style>