import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import flattenDeep from 'lodash/flattenDeep'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

Vue.use(Router)

const routes = []
const require_module = require.context('./modules', false, /.js$/)
require_module.keys().forEach(file_name => {
    routes.push(require_module(file_name).default)
})

const router = new Router({
    routes: flattenDeep(routes)
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.meta.requireLogin) {
        if (store.getters['token/isLogin']) {
            next()
            NProgress.done()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
            NProgress.done()
        }
    } else {
        next()
        NProgress.done()
    }
})

export default router
