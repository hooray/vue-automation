import Vue from 'vue'
import Vuex from 'vuex'

import exampleModule from './modules/example'
import tokenModule from './modules/token'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        example: exampleModule,
        token: tokenModule
    },
    strict: process.env.NODE_ENV !== 'production'
})