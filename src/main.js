import Vue from 'vue'
import ElementUI from 'element-ui'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './api'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/style.scss'

Vue.use(VueCarousel)
Vue.use(ElementUI)


Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
