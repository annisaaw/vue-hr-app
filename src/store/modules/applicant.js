import axios from 'axios'

const state = {
	applicant: [],
	applicant_status: [],
	job: []
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
	async fetchJob({ commit }) {
		let res = await axios.get('http://localhost:3000/available_job')
		commit('JOB', res.data)
	},
	async addApplicant({commit}, payload) {
		let res = await axios.post('http://localhost:3000/applicant', payload)
		commit('APP_ADDED', res.data)
	},
	editApplicant({state}, payload) {
        axios.put('http://localhost:3000/applicant/' + payload.id , payload)
        console.log(state)
	},
	removeApplicant({state}, payload) {
        axios.delete('http://localhost:3000/applicant/' + payload)
        console.log(state)
    }
}

const mutations = {
	APPLICANT: (state, payload) => state.applicant = payload,
	APP_STATUS: (state, payload) => state.applicant_status = payload,
	APP_ADDED: (state, payload) => state.applicant.push(payload),
	JOB: (state, payload) => state.job = payload,
}

const getters = {
	listApplicant: state => state.applicant,
	listAppStatus: state => state.applicant_status,
	listJob: state => state.job
}

export default {
	namespaced: true,
	state, 
	actions, 
	mutations,
	getters
}