import Vue from 'vue'
import App from './App.vue'

 // 引入vuex 
import store from './store/store'


//引入ant.design蚂蚁金服组件
import Antd from 'ant-design-vue';
import Notification from 'ant-design-vue/lib/notification'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd);
Vue.$notification = Notification; //给vue注入notification函数

//引入 veevalidate 表单验证
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate);
Validator.localize('zh_CN', zh_CN);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
