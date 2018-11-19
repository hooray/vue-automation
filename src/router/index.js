import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Example from './example';

const router = new Router({
    routes: [
        ...Example
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin) {
        if (Vue.prototype.$checkLogin()) {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        next();
    }
})

export default router