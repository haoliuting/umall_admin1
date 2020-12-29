import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import {actions} from "./actions"
import {state,getters,mutations} from "./mutations"
import cate from "./modules/cate"
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        cate
    }
})