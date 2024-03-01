<script setup>
import { useCounterStore } from '@/stores/FoodStore';
import { computed, ref, watch } from 'vue';

const foodStore = useCounterStore();
// let favorite = ref(foodStore.favorite);
let difficultValue = ref('All');


const favoriteFilter = computed(() => {
  if (difficultValue.value === "All") {
    return foodStore.favorite;
  } else {
    return foodStore.favorite.filter(
      (elem) => elem.difficulty === difficultValue.value
    );
  }
});

</script>
<template>
  <div class="title">
    <h1>Favorite ({{ favoriteFilter.length }})</h1>

    <div class="difficulty">
      <p>Difficulty</p>
      <select name="difficult" id="difficult" v-model="difficultValue">
        <option value="All">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
      </select>
    </div>

    <div class="favorite-list">
      <div v-for="info in favoriteFilter">
        <div class="favorite-item">
          <img :src=info.image alt="#">
          <div class="favorite-item-info">
            <h3>{{ info.name }}</h3>
            <p>Difficult: {{ info.difficulty }}</p>
            <p>Cuisine: {{ info.cuisine }}</p>
            <div class="item-buttons">
              <button :class="[!info.watched ? 'watchBtn unwatchedBtn' : 'watchBtn watchedBtn']"
                @click="foodStore.watchChanger(info.id)">{{ !info.watched ? 'Unwatched' : 'Watched' }}</button>
              <button class="removeBtn" @click="foodStore.deleteItem(info.id)">Remove</button>
            </div>
          </div>
        </div>
      </div>
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

.favorite-list {
  margin-top: 50px;
  display: grid;
  justify-content: center;
  row-gap: 50px;
}

.favorite-item {
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 474px;
  gap: 20px;
}

.favorite-item>img {
  height: auto;
}

.favorite-item>img {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.favorite-item-info {
  text-align: left;
}

.favorite-item-info>h3 {
  width: 200px;
}

.watchBtn,
.removeBtn {
  width: 135px;
  padding: 14px 35px;
  font-weight: 700;
  border-radius: 30px;
  border: none;
  cursor: pointer;
}

.watchedBtn {
  background-color: #6FFF8F;
}

.unwatchedBtn {
  background-color: #85D3FF;
}

.removeBtn {
  background-color: #FF0404;
}

.item-buttons {
  display: grid;
  justify-content: start;
  gap: 10px;
}
</style>
