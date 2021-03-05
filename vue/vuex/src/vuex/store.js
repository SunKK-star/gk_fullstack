// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 方法
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {

  },
  getters: {
    powerCount: (state) => {
      return state.count*state.count
    }
  },
  modules: {

  }
})

export default store