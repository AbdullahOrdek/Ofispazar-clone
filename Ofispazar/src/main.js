import Vue from 'vue'

import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueRouter);
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes 
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
