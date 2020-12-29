import babelpolyfill from 'babel-polyfill'
// 低版本浏览器可以正常打开界面
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/common.css'
import './plugins/element.js'
import './plugins/vcharts.js'
import 'swiper/dist/css/swiper.css'
import '@/assets/icons/iconfont.css'
import mock from './mock'
// import 'font-awesome/css/font-awesome.min.css'
import vueResource from 'vue-resource'
import axios from "axios"
//指向后端接口
axios.defaults.baseURL = "http://localhost:8090"
Vue.prototype.$http = axios;

Vue.use(ElementUI) //使用elementUI
Vue.use(vueResource)
mock.bootstrap();
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

