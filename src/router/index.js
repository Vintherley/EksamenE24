import { createRouter, createWebHistory } from 'vue-router'

import FrontPaige from '@/views/FrontPaige.vue'
import AboutOs from '@/views/AboutOs.vue'
import WebShop from '@/views/WebShop.vue'
import Basket from '@/views/Basket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPaige
    },
    {
      path: '/aboutos',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutOs
    },
    {
      path: '/Webshop',
      name: 'Webshop',
      component: WebShop
    },
    {
      path: '/Basket',
      name: 'Basket',
      component: Basket
    },
  ]
})

export default router
