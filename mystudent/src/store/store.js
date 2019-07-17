import Vue from 'vue'
import Vuex from 'vuex'
import User from "./moules/user"

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        User
    },
    plugins: [
        createPersistedState({
            key: "eStudy",
            paths: ["User"],
            subscriber(store){
                store.dispatch("User/checkedlogin");
                return function(handler){
                    return store.subscribe(handler)
                }
            }
        }),
    ]
})