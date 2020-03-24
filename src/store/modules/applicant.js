import axios from 'axios'

const state = {
	applicant: [],
	applicant_status: []
}

const actions = {
	async fetchApplicant({ commit }) {
		let res = await axios.get('http://localhost:3000/applicant')
		commit('APPLICANT', res.data)
	},	
	async fetchAppStatus({ commit }) {
		let res = await axios.get('http://localhost:3000/applicant_status')
		commit('APP_STATUS', res.data)
	},
	async addApplicant({commit}, payload) {
		let res = await axios.post('http://localhost:3000/applicant', payload)
		commit('APP_ADDED', res.data)
	}
}

const mutations = {
	APPLICANT: (state, payload) => state.applicant = payload,
	APP_STATUS: (state, payload) => state.applicant_status = payload,
	APP_ADDED: (state, payload) => state.applicant.push(payload)
}

const getters = {
	listApplicant: state => state.applicant,
	listAppStatus: state => state.applicant_status
}

export default {
	namespaced: true,
	state, 
	actions, 
	mutations,
	getters
}