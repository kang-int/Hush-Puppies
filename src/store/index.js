import { createStore } from 'vuex'

export default createStore({
  // 定义要共享的状态数据
  state() {
    return {
      totalPoint: 2000,
    }
  },
  getters: {
  },
  // 定义修改状态的方法
  mutations: {
    updatePoint(state, productPoint) {
      state.totalPoint -= productPoint
    }
  },
  actions: {
    consume({commit}, productPoint) {
      commit('updatePoint', productPoint)
    }
  },
  modules: {
  }
})
