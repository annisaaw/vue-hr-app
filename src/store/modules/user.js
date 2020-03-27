import axios from 'axios'

const state = {
	user: []
}

const actions = {
	async fetchUser({ commit }) {
		let res = await axios.get('http://localhost:3000/users')
		commit('USER', res.data)
	}
}

const mutations = {
	USER: (state, payload) => state.user = payload
}

const getters = {
	listUser: state => state.user
}

export default {
	namespaced: true,
	state, 
	actions, 
	mutations,
	getters
}