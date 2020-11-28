import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.mixin({ // 全局混入
  beforeUpdate () {
    console.log('数据发生变化了！！！！！！！！')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
