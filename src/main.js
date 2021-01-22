import Vue from "vue";
import App from "./App.vue";
import axios from 'axios'
import router from "./router";
import store from "./store";
import axiosUser from './utils/axiosUser.js'
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSkycons from 'vue-skycon'
// // 适配flex
// import '@/common/flexible.js';

Vue.config.productionTip = false;
Vue.use(axiosUser)
Vue.use(dataV);
Vue.use(ElementUI);
Vue.use(VueSkycons);
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
