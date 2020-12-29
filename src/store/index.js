import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import {actions} from "./actions"
import {state,getters,mutations} from "./mutations"
import banner from "./modules/banner"
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        banner
    }
})