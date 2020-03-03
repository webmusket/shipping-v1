import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false


  import axios from 'axios'; 
  Vue.use(axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
