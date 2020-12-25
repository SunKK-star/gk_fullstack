import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue ({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

// new Vue ({
//   render: h => h(App)
// }).$mount('#app')