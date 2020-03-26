import axios from 'axios'

const state = {
		listRequest: [],
		listStatus: []
}

const actions = {
	async fetchLeaveStatus({ commit }) {
		let res = await axios.get('http://localhost:3000/leave_status')
		commit('SET_STATUS', res.data)
	},
	async fetchLeaveRequest({ commit }) {
		let res = await axios.get('http://localhost:3000/leave_request')
		commit('SET_REQUEST', res.data)
	},
	addLeaveRequest({ commit }, payload) {
		axios.post('http://localhost:3000/leave_request', payload)
		commit('ADD_LEAVE');
	}
}

const mutations = {
	SET_STATUS: (state, payload) => state.listStatus = payload,
	SET_REQUEST: (state, payload) => state.listRequest = payload,
	ADD_LEAVE: (state, payload) => state.listRequest.push(payload)
}

const getters = {
	listRequest: state => state.listRequest,
	listStatus: state => state.listStatus
}

export default {
	namespaced: true,
	state, 
	actions, 
	mutations,
	getters
}