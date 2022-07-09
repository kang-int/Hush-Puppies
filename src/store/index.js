import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      totalPoint: 2000,
    }
  },
  getters: {
  },
  mutations: {
    updatePoint(state, playload) {
      state.totalPoint -= playload.productPoint
    }
  },
  actions: {
  },
  modules: {
  }
})
