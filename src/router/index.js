import { createRouter, createWebHistory } from 'vue-router'
import AllRecipes from '../views/AllRecipes.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all-recipes',
      component: AllRecipes
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/Favourite.vue')
    }
  ]
})

export default router
