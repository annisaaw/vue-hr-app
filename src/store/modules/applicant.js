import axios from 'axios'

const state = {
	applicant: []
}

const actions = {
	async fetchApplicant({ commit }) {
		let res = await axios.get('http://localhost:3000/applicant')
		commit('APPLICANT', res.data)
	}
}

const mutations = {
	APPLICANT: (state, payload) => state.applicant = payload
}

const getters = {
	listApplicant: state => state.applicant
}

export default {
	namespaced: true,
	state, 
	actions, 
	mutations,
	getters
}