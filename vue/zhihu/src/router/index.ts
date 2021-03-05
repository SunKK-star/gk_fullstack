import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'

const routerHistory = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../view/Login.vue')
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
