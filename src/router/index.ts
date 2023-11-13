import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/smart-city',
      name: 'smart-city',
      component: () => import('../views/smart-city.vue')
    },
    {
      path: '/fttx',
      name: 'fttx',
      component: () => import('../views/fttx.vue')
    },
    {
      path: '/buildings',
      name: 'buildings',
      component: () => import('../views/buildings.vue')
    },
    {
      path: '/sensors',
      name: 'sensors',
      component: () => import('../views/sensors.vue')
    }
  ]
})

export default router
