import axios from 'axios'

const state = {
	attendance: [],
}

const actions = {
	async fetchAttendance({ commit }) {
		let res = await axios.get('http://localhost:3000/attendance');
		commit('ATTENDACE', res.data)
	},
	// async attendanceTime({state, dispatch}) {

	// }
}

const mutations = {
	ATTENDACE: (state, payload) => state.attendance = payload
}

const getters = {
	listAttendance: state => state.attendance
}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}