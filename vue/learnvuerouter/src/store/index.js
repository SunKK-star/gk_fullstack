import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    stu: [
      {name: 'gkfd', age: 18, gender: 'sex'},
      {name: 'gds', age: 20, gender: 'ds'},
      {name: 'gds', age: 17, gender: 'sedsx'},
      {name: 'fg', age: 17, gender: 'ds'},
    ]
  },
  mutations: {
   
  },
  getters: {
    totless(state) {
      return state.stu.filter((s) => {
        return s > 17
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
