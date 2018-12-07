import Vue from 'vue'
import Vuex from 'vuex'

import example from './modules/example.js'
import global from './modules/global.js'
import token from './modules/token.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        example,
        global,
        token
    },
    strict: process.env.NODE_ENV !== 'production'
})