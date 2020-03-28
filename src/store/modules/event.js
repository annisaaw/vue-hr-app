import axios from 'axios'

const state = {
	event: []
}

const actions = {
	async fetchEvent({ commit }) {
		let res = await axios.get('http://localhost:3000/event')
		commit('EVENT', res.data)
	},
    addEvent({commit}, payload) {
        axios.post('http://localhost:3000/event', payload)
        commit('ADD_EVENT')
    },
    editEvent({state}, payload) {
        axios.put('http://localhost:3000/event/' + payload.id , payload)
        console.log(state)
    },
    removeEvent({state}, payload) {
        axios.delete('http://localhost:3000/event/' + payload)
        console.log(state)
    }
}

const mutations = {
	EVENT: (state, payload) => state.event = payload,
    ADD_EVENT: (state, payload) => state.event.push(payload),
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