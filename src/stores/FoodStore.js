import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

let BASE_URL = 'https://dummyjson.com/recipes'

let foodList = reactive([])

fetch(BASE_URL)
    .then(res => res.json())

    .then(json => {
        json.recipes.map(elem => {
            let res = {
                id: elem.id,
                name: elem.name,
                image: elem.image,
                difficulty: elem.difficulty,
                cuisine: elem.cuisine,
                watched: false
            }
            foodList.push(res)
        })
    })



export const useCounterStore = defineStore('foodStore', {
    state: () => ({
        data: foodList,
        favorite: reactive([]),
    }),
    actions: {
        addToFavourite(id) {
            if (!this.favorite.find(elem => elem.id == id)) {
                this.favorite.push(this.data.find(elem => elem.id == id))
            }
            console.log(this.favorite)
        },

        deleteItem(id) {
            const index = this.favorite.findIndex(elem => elem.id === id);
            if (index !== -1) {
                this.favorite.splice(index, 1);
            }
            console.log(this.favorite)
        },

        watchChanger(id) {
            const index = this.favorite.find(elem => elem.id === id);
            index.watched = !index.watched
        },

        async searchFunc(value) {
            const response = await fetch(BASE_URL + '/search?q=' + value);
            const json = await response.json();

            foodList.splice(0, foodList.length);

            json.recipes.forEach(elem => {
                let res = {
                    id: elem.id,
                    name: elem.name,
                    image: elem.image,
                    difficulty: elem.difficulty,
                    cuisine: elem.cuisine,
                    watched: false
                }
                foodList.push(res);
            });
        }
    }
})