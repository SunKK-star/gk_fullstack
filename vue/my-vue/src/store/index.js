import Vue from 'vue'
import Vuex from './myVuex.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 8
  },
  getters: {
    getNum: (state) => {
      return state.num + 10
    }
  },
  mutations: {
    add(state, arg) {
      state.num += arg
    }
  },
  actions: {
    actionAdd({commit}) {
      commit('add')
    }
  },
  modules: {
  }
})
