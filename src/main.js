// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//1、引入element-ui控件
import ElemrntUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import axios from "./axios"

//Vue.prototype.$axios = axios

Vue.config.productionTip = false

//2、必须使用use命令才能使这个控件起作用
Vue.use(ElemrntUI)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
