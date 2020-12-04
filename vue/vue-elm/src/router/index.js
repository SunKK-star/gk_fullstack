import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/goods'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import('@/views/comment/comment')
  },
  {
    path: '/seller',
    name: 'Seller',
    component: () => import('@/views/seller/seller')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
