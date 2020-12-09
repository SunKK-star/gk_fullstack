// 状态管理器，也被称为仓库
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = { // 必须是同步代码
  add(state, num) {
    state.count += num
  },
  reduce(state, num) {
    state.count -= num
  }
}

const getters = {
  newCount (state) {
    return state.count**3
  }
}

const actions = { // context参数代表vuex对象
  addAction (context, n) { // 不会主动修改数据源中的数据
    // context.commit('add', 5)
    setTimeout(() => {
      context.commit('add', n)
    },3000)
    console.log('我先出现');
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

const state2 = {
  count1: 2
}
const moudleB = {
  state2
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moudleB
  }
})