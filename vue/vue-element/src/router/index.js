import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import about from '../views/about'
import home1 from '../views/home1'
import home2 from '../views/home2'
import detail from '@/views/detail'

Vue.use(Router)

// const routers = [
//   {
//     path: '/',
//     name: 'home',
//     component: home
//   }
// ]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          component: home1
        },
        {
          path: 'home1',
          component: home1
        },
        {
          path: 'home2',
          component: home2
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        next()
      }
    },
    {
      path: '/detail',
      props: true,
      name: 'detail',
      component: detail,
      // redirect: '/login'
      alias: '/hello'   // 重改路径名
    }
  ]
})

// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routers
// })

// export default router