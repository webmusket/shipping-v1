import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false


import axios from 'axios';
import router from './router'
Vue.use(axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
