import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false




import axios from 'axios';

import router from './router'



Vue.use(axios)

import Vuex from 'vuex'

Vue.use(Vuex)



import store from '@/store';


axios.interceptors.response.use(
    response => response,
    (error) => {

        if (error.response.status === 401) {
            // Clear token and redirect
            store.commit('auth/setAccessToken', null);
            window.location.replace(`${window.location.origin}/login`);
        }

        return Promise.reject(error);
    },
);






new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
