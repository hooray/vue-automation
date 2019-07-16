import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

Vue.use(Router)

import Root from './modules/root'
import Example from './modules/example'

const router = new Router({
    routes: [
        ...Root,
        Example
    ]
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
