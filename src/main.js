import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import api from './api'
Vue.prototype.$api = api

import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs

import util from './util/index'
Vue.use(util)

import Cookies from 'js-cookie'
Vue.prototype.$cookies = Cookies

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

// 全局组件自动注册
import '@/components/autoRegister'

// 自动加载 svg 图标
const req = require.context('./assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

import './mock'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
