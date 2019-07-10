import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

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
    if (to.meta.requireLogin) {
        if (store.getters['token/isLogin']) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})

export default router
