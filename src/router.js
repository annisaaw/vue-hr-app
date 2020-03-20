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
        component: () => import('./pages/Dashboard.vue')
      },
      {
        path: '/employees',
        name: 'employees',
        component: () => import('./pages/Employees.vue'),
        children: [
          { path: 'add', component: () => import('./pages/EmployeeAdd'), name: 'EmployeeAdd' }
        ]
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('./pages/Attendance.vue')
      },
      {
        path: '/applicants',
        name: 'applicants',
        component: () => import('./pages/Applicants.vue')
      },
      {
        path: '/leave-requests',
        name: 'leave-requests',
        component: () => import('./pages/Leave.vue')
      },
      {
        path: '/broadcast-message',
        name: 'broadcast-message',
        component: () => import('./pages/Broadcast.vue')
      }
    //   {
    //     path: '/login',
    //     name: 'login',
    //     meta: {
    //       middleware: [
    //         auth
    //       ]
    //     },
    //     component: () => import('../pages/Login.vue')
    //   }
    ]
  })
  
  export default router;