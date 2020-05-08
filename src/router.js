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
import LeaveRequest from './pages/leave_request/LeaveRequest'
import LeaveBase from './pages/leave_request/LeaveBase'
import LeaveAdd from './pages/leave_request/LeaveAdd'
import Attendance from './pages/attendance/Attendance'
import AttendanceBase from './pages/attendance/AttendanceBase'
<<<<<<< HEAD
import Event from './pages/event/Event'
import EventAdd from './pages/event/EventAdd'
import EventEdit from './pages/event/EventEdit'
=======
>>>>>>> 10c42c39ab75b693936e5b575dc3afe78f526246

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
        component: Attendance,
        children: [
          { path: '', component: AttendanceBase, name: 'attendance' }
        ]
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
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
      },
      {
<<<<<<< HEAD
        path: '/event',
        component: Event,
        children: [
          { path: 'add_event', component: EventAdd, name: 'add_event' },
          { path: ':id/edit_event', component: EventEdit, name: 'edit_event' }
        ]
=======
        path: '/lostpassword',
        name: 'lostpassword',
        component: () => import('./pages/LostPassword.vue')
>>>>>>> 10c42c39ab75b693936e5b575dc3afe78f526246
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