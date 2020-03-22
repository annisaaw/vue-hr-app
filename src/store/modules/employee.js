import axios from 'axios'

const state = {
    employee: [],
    employeeStatus: [],
    job: [],
}

const actions = {
    async fetchEmployee({ commit }) {
        let res = await axios.get('http://localhost:3000/employee');
        commit('EMPLOYEE', res.data)
    },
    async fetchStatus({ commit }) {
        let res = await axios.get('http://localhost:3000/employee_status');
        commit('STATUS', res.data)
    },
    async fetchJob({ commit }) {
        let res = await axios.get('http://localhost:3000/job')
        commit('JOB', res.data )
    },
    addEmployee({commit}, payload) {
        axios.post('http://localhost:3000/employee', payload)
        commit('addEmployee')
    }
}

const mutations = {
    EMPLOYEE: (state, payload) => state.employee = payload,
    STATUS: (state, payload) => state.employeeStatus = payload,
    JOB: (state, payload) => state.job = payload,
    addEmployee: (state, payload) => state.employee.push(payload)
}

const getters = {
    listEmployee: state => state.employee,
    listEmployeeStatus: state => state.employeeStatus,
    listJob: state => state.job
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}