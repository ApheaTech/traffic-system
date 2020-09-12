import Vue from 'vue'
import './plugins/axios.js'
import App from './App.vue'
import router from './router/index.js'
import './plugins/element.js'
import global from '@/global.vue'

Vue.config.productionTip = false
Vue.prototype.Global = global

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
