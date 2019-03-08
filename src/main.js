import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import {
    api,
    axios
} from './api'
Vue.prototype.$api = api
Vue.prototype.$axios = axios

import util from './util/index'
Vue.use(util)

import cookies from 'vue-cookies'
Vue.use(cookies)

import meta from 'vue-meta'
Vue.use(meta)

/**
 * 全局批量注册组件自定义
 * 如果组件仅在部分页面里使用，不建议放在此处注册
 */
// import exampleComponent1 from './components/exampleComponent1.vue'
// import exampleComponent2 from './components/exampleComponent2.vue'
// import exampleComponent3 from './components/exampleComponent3.vue'
// const components = {
//     exampleComponent1,
//     exampleComponent2,
//     exampleComponent3
// }
// Object.keys(components).forEach(key => {
//     Vue.component(key, components[key])
// })

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
