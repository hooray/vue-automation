import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
