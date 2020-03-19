import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './pages/Dashboard.vue')
      }
    //   {
    //     path: '/login',
    //     name: 'login',
    //     meta: {
    //       middleware: [
    //         auth
    //       ]
    //     },
    //     component: () => import(/* webpackChunkName: "login" */ '../pages/Login.vue')
    //   }
    ]
  })
  
  export default router;