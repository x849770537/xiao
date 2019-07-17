import {api} from "../../utils/api"
const state ={
    loggerin: false,
    info: {}
}
const getters ={
    
}
const mutations ={
    loggerdin(data, resule){
        data.loggerin = true;
        data.info = resule;
        api.defaults.headers.common["Token"]= data.info.token;
    },
    tokenUpdata(state, token){
        state.info.token= token;
    },
    logOut(state){
        state.loggerin = false;
        state.info = {};
        api.defaults.headers.common["Token"]= ''
    }
    
}
const actions ={
    login({commit}, form){
        api.post("/auth/login", form).then(resule=>{
            commit("loggerdin", resule)
        })
    },
    checkedlogin({commit, state, dispatch}){
        // console.log(state.info.token)
        api.defaults.headers.common["Token"]= state.info.token;
        api.post("/auth/refreshToken").then( (token)=>{
            commit("tokenUpdata", token)
        },).catch(()=>{
            // console.dir(err);
            dispatch("logOut");
        });
        
    },
    logOut({commit}){
        commit("logOut")
    }
    
}

export default{
    //独立命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}