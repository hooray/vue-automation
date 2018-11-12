import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Example from './example';

export default new Router({
    routes: [
        ...Example
    ]
})