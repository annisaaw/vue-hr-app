import Vue from 'vue';
import Router from 'vue-router'
import Employee from './pages/employee/Employees'
import EmployeeBase from './pages/employee/EmployeeBase'
import EmployeeAdd from './pages/employee/EmployeeAdd'
import EmployeeEdit from './pages/employee/EmployeeEdit'
import Applicants from './pages/applicant/Applicants'
import ApplicantBase from './pages/applicant/ApplicantBase'
import ApplicantAdd from './pages/applicant/ApplicantAdd'
import ApplicantEdit from './pages/applicant/ApplicantEdit'
import LeaveRequest from './pages/leave_request/LeaveRequest.vue'
import LeaveBase from './pages/leave_request/LeaveBase.vue'
import LeaveAdd from './pages/leave_request/LeaveAdd.vue'

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
        component: Employee,
        children: [ 
          { path: '', component: EmployeeBase, name: 'employees' },
          { path: 'add', component: EmployeeAdd, name: 'add'},
          { path: ':id/edit', component: EmployeeEdit, name: 'edit'}
        ]
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('./pages/Attendance.vue')
      },
      {
        path: '/applicants',
        component: Applicants,
        children: [
          { path: '', component: ApplicantBase, name: 'applicants' },
          { path: 'add', component: ApplicantAdd, name: 'add_applicant' },
          { path: ':id/edit', component: ApplicantEdit, name: 'edit_applicant' }
        ]
      },
      {
        path: '/leave-requests',
        component: LeaveRequest,
        children: [
          { path: '', component: LeaveBase, name: 'leave-request' },
          { path: 'add', component: LeaveAdd, name: 'add_leave_request' }
        ]
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