import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // 兄弟
  beforeCreate () {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
