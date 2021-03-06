import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello.vue'
import Hgfd from '../components/Hsdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: '',
        redirect: 'page'
      },
      {
        path: 'news',
        component: Hello
      },
      {
        path: 'page',
        component: Hgfd
      }
    ],
    
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    beforeEnter: (to, from, next) =>{
      console.log(from);
      next()
    }
  },
  {
    path: '/login/:id',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
