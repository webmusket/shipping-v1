import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
                const isAuthenticated = store.getters['auth/isAuthenticated'];

                if (!isAuthenticated) {
                    return next({
                        name: 'Login',
                    });
                }

                return next();
            },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue'),
    beforeEnter: (to, from, next) => {
                const isAuthenticated = store.getters['auth/isAuthenticated'];

                if (isAuthenticated) {
                    return next({
                        name: 'Home',
                    });
                }

                return next();
            },
  },
  // {
  //   path: '/details',
  //   name: 'Details',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue'),
  //   beforeEnter: (to, from, next) => {
  //               const isAuthenticated = store.getters['auth/isAuthenticated'];

  //               if (!isAuthenticated) {
  //                   return next({
  //                       name: 'Home',
  //                   });
  //               }

  //               return next();
  //           },
  // }
]

const router = new VueRouter({
  routes
})

export default router
