import axios from "axios"
import Vue from 'vue'

const api = axios.create({
    baseURL: "http://sandbox_api.estudy.chanke.xyz"
})
api.defaults.withCredentials = true;
api.defaults.headers.post["Content-Type"] = "application/json"
//拦截器设置
api.interceptors.response.use(response => {
    return response.data.data
}, error =>{
    if(this.loggerin){
        //错误提示弹窗 min.js 给vue注册了$notification事件 可直接调用
        const response = error.response.data.errorMessage;
        Vue.$notification.error({
            message: "API ERROR",
            description: response,
        })
    }
    return Promise.error(error)
})
export  {api};