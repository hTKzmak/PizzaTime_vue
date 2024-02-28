import { defineStore } from 'pinia'
import { reactive } from 'vue';


let foodList = reactive([])

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(json => {
        foodList.push(...json.recipes.map(elem => elem));
    });
console.log(foodList)



export const useCounterStore = defineStore('foodStore', {
    state: () => ({
        data: foodList,
        favorite: []
    })
})