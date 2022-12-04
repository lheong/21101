import Vue from 'vue'
import Vuex from 'vuex'
// import persist from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [persist()],
  state: {
    list: []
  },
  getters: {
  },
  mutations: {
    // 添加
    add(state, obj) {
      console.log(obj);
      state.list.push({ ...obj })
    },
    // 编辑
    revise(state, obj) {
      console.log(obj);
      state.list[obj.index].name = obj.name
      state.list[obj.index].date1 = obj.date1
      state.list[obj.index].resource = obj.resource
    }
  },
  actions: {
  },
  modules: {
  }
})
