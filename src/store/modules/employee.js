import axios from 'axios'

const state = {
    employee: [],
    employeeStatus: []
}

const actions = {
    async fetchEmployee({ commit }) {
        let res = await axios.get('http://localhost:3000/employee');
        commit('EMPLOYEE', res.data)
    },
    async fetchStatus({ commit }) {
        let res = await axios.get('http://localhost:3000/employee_status');
        commit('STATUS', res.data)
    }
}

const mutations = {
    EMPLOYEE: (state, payload) => state.employee = payload,
    STATUS: (state, payload) => state.employeeStatus = payload
}

const getters = {
    listEmployee: state => state.employee,
    listEmployeeStatus: state => state.employeeStatus
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}