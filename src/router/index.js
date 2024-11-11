import { createRouter, createWebHistory } from 'vue-router'

import FrontPaige from '@/views/FrontPaige.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPaige
    },
    {
      path: '/AboutOs',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutOs.vue')
    },
    {
      path: '/Webshop',
      name: 'Webshop',
      component: () => import('../views/WebShop.vue')
    },
  ]
})

export default router
