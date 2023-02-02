import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {
  },
  mutations: {
    add (state, obj) {
      state.list.push(...obj)
    }
  },
  actions: {
  },
  modules: {
  }
})
