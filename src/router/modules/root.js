export default {
    path: '/',
    component: () => import(/* webpackChunkName: 'root' */ '@/views/index.vue'),
    children: [{
        path: '/login',
        component: () => import(/* webpackChunkName: 'root' */ '@/views/login.vue')
    }]
}
