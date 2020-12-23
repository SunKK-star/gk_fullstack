import Vue from 'vue'
import App from './App.vue'
import router from './route/scr/router/myVueRouter'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
