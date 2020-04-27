import axios from 'axios'

const state = {
	attendance: [],
	clockIn: '',
	clockOut: ''
}

const actions = {
	async fetchAttendance({ commit }) {
		let res = await axios.get('http://localhost:3000/attendance');
		commit('ATTENDACE', res.data)
	},
	async attendanceTime({state, dispatch, rootState}) {
		// await dispatch('employee/fetchEmployee')
		await dispatch('fetchAttendance')
		let items = [];
		let d = new Date();
		const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
		const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
		const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
		const dt = da+'-'+mo+'-'+ye;
		let last_id = state.attendance.length>0 ? (state.attendance[state.attendance.length-1].id) : 0;

		for(let i=0;i<rootState.employee.employee.length;i++){
			let temp = { "id": rootState.employee.employee[i].id, "clock_in": "", "clock_out": "" }
			items.push(temp);
		}

		let star = {
			"id": last_id + 1,
			"date": dt,
			"data": items
		}
		if (state.attendance.find( a => a.date === dt )) return;

		await axios.post('http://localhost:3000/attendance', star);
		dispatch('fetchAttendance')
	},
	clockIn({ state }, clockIn) {
		state.clockIn = clockIn
		// await axios.post('http://localhost:3000')
	},
	clockOut({ state }, clockOut){
		state.clockOut = clockOut
	}
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