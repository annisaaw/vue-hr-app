import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './pages/Dashboard.vue')
      },
      {
        path: '/employees',
        name: 'employees',
        component: () => import(/* webpackChunkName: "dashboard" */ './pages/Employees.vue')
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import(/* webpackChunkName: "dashboard" */ './pages/Attendance.vue')
      },
      {
        path: '/applicants',
        name: 'applicants',
        component: () => import(/* webpackChunkName: "dashboard" */ './pages/Applicants.vue')
      },
      {
        path: '/leave-requests',
        name: 'leave-requests',
        component: () => import(/* webpackChunkName: "dashboard" */ './pages/Leave.vue')
      },
      {
        path: '/broadcast-message',
        name: 'broadcast-message',
        component: () => import(/* webpackChunkName: "dashboard" */ './pages/Broadcast.vue')
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