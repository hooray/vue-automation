import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import { api, axios } from './api'
Vue.prototype.$api = api
Vue.prototype.$axios = axios

import util from './util/index'
Vue.use(util)

import cookies from 'vue-cookies'
Vue.use(cookies)

import meta from 'vue-meta'
Vue.use(meta)

// 全局组件自动注册
import '@/components/autoRegister'

// 自动加载 svg 图标
const req = require.context('./assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
