<template>
	<app-back>
		<div class="container max-w-5xl mx-auto">
			<app-nav class="mb-5"></app-nav>
				<form action="" method="post" class="bg-gray-600">
					<div class="flex justify-between px-5 mx-auto">
						<h1 class="text-white text-2xl">Leave Request Form</h1>
						<div class="items-center my-3">
							<button class="btn btn-lg mr-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md" @click.prevent="saveRequest()">Save</button>
							<router-link :to="{name: 'leave-request'}" class="btn btn-lg px-4 py-3 bg-blue-700 hover:bg-blue-500 text-white rounded-md router-link-active">Cancel</router-link>
						</div>
					</div>
					<div class="flex justify-between px-5 mx-auto">
						<div class="w-1/3">
							<div class="mb-3">
								<p class="mb-2 text-white">ID</p>
								<input type="number" name="ID" placeholder="" required="required" v-model="emp_id" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
							</div>
							<!-- <div class="mb-3">
								<p class="mb-2 text-white">Email</p>
								<input type="text" name="name" placeholder="" required="required" v-model="email" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
							</div>
							<div class="mb-3">
								<p class="mb-2 text-white">Position & Division</p>
								<div class="inline-block relative">
									<select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" v-model="job_id">
										<option v-for="(item, idx) in allJob" :value="item.id" :key="idx">{{ item.position }} - {{ item.Division }}</option>
									</select>
									<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
									</div>
								</div>
							</div> -->
							<div class="mb-3">
								<p class="mb-2 text-gray-600">Leave Date: </p>
								<input type="date" name="leave_at" v-model="leave_at" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
							</div>
						</div>
						<div class="w-2/3">
							<div class="pl-12 ">
								<p class="mb-4 text-white ">Leave Reason</p>
								<textarea class="rounded-lg p-3 text-xl focus:border-none" name="leave_reason" cols="60" rows="6"></textarea>
							</div>
						</div>
					</div>
				</form>
		</div>
	</app-back>
</template>

<script>
import Nav from '../../components/Navigasi'
import Background from '../../components/Background'
import { mapActions, mapGetters } from 'vuex'

export default {
	components: {
    AppNav: Nav,
    AppBack: Background,
	},
	data() {
		return {
			saveSuccess: false,
			activeIndex: 0,
			id: '',
			name: '',
			email: '',
			gender: '',
			image: '',
			emp_id: '',
			leave_at: '03/12/2020',
			birthplace: '',
			job_id: 0,
			position: '',
			Division: '',
			status:''
		}
	},
	methods: {
		...mapActions({
			fetchEmployee: 'employee/fetchEmployee',
			fetchLeaveReq: 'leaveRequest/fetchLeaveRequest',
			fetchLeaveStat: 'leaveRequest/fetchLeaveStatus',
			fetchJob: 'employee/fetchJob',
			addLeaveRequest: 'leaveRequest/addLeaveRequest'
		}),
		saveRequest() {
			const last_id = this.listRequest[this.listRequest.length - 1].id;
			let emp = this.listEmployee.filter(a => a.id === parseInt(this.emp_id));
			let status_id = this.listStatus[Math.floor(Math.random() * this.listStatus.length)].id;
			let leave_req = {
				id: parseInt(last_id + 1),
				status_id: status_id,
				status: this.listStatus.filter(a => a.id === parseInt(status_id)).map(a => a.status)[0],
				employee_id: parseInt(this.emp_id),
				name: emp.map(a => a.name)[0],
				email: emp.map(a => a.email)[0],
				job_id: emp.map(a => a.job_id)[0],
				position: emp.map(a => a.position)[0],
				Division: emp.map(a => a.Division)[0],
				leave_at: this.leave_at
			}

			if (this.emp_id != '' && this.leave_at != '') {
				this.saveSuccess = true;
				console.log(leave_req)
				this.addLeaveRequest(leave_req)
				this.$router.push({name: 'leave-request'})
			} else {
				this.saveError = true;
				console.log('ERROR DATA')
			}

		}
	},
	computed: {
		...mapGetters({
			listEmployee: 'employee/listEmployee',
			listRequest: 'leaveRequest/listRequest',
			listStatus: 'leaveRequest/listStatus',
			allJob: 'employee/listJob',
		})
	},
	async created() {
		await this.fetchEmployee();
		await this.fetchLeaveReq();
		await this.fetchLeaveStat();
		await this.fetchJob();
	}
}
</script>