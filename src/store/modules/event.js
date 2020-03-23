import axios from 'axios'

const state = {
	event: []
}

const actions = {
	async fetchEvent({ commit }) {
		let res = await axios.get('http://localhost:3000/event')
		commit('EVENT', res.data)
	}
}

const mutations = {
	EVENT: (state, payload) => state.event = payload
}

const getters = {
	listEvent: state => state.event
}

export default {
	namespaced: true,
	state, 
	actions, 
	mutations,
	getters
}