import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSection: 0
  },
  mutations: {
    changeSection (state, newVal) {
      state.currentSection = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
