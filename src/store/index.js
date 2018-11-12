import Vue from 'vue'
import Vuex from 'vuex'

import exampleModule from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        example: exampleModule
    },
    strict: process.env.NODE_ENV !== 'production'
})