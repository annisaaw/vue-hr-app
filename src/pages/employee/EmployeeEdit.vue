<template> 
	<app-back> 
		<div class="bg-black-alt font-sans leading-normal tracking-normal">
			<app-nav class="mb-5"></app-nav>
				<h1 class="text-white text-4xl text-center">Edit Employee</h1>
				<form class="mx-auto px-4">
					<div class="flex justify-end">
						<div class="items-center my-3 flex justify-around">
							<button class="btn btn-lg mr-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md" @click.prevent="saveEdited()">Save</button>
							<router-link :to="{name: 'employees'}" class="btn btn-lg px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white rounded-md router-link-active">Cancel</router-link>
							<button class="btn btn-lg ml-4 px-6 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md" @click.prevent="deleteEmp()">Delete</button>
						</div>
					</div>
					<div class="flex bg-gray-200 rounded-lg">
						<!-- Profile  -->
						<div class="w-2/5">
							<div class="">
								<h1 class=" text-black bolder font-bold text-xl py-3 text-center">Profile</h1>
								<div class="min-w-full rounded-b px-10 pt-5 border-t border-solid">
									<div class="flex">
										<div class="w-full">
											<div class="w-full mb-3">
												<p class="text-gray-600">Name</p>
												<input type="text" name="name" placeholder="" required="required" v-model="name" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
											</div>
											<div class="w-full mb-3">
												<p class="text-gray-600">Email</p>
												<input type="email" name="email" placeholder="" required="required" v-model="email" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
											</div>
											<div class="w-full mb-3">
												<p class="text-gray-600">Phone Number</p>
												<input type="number" name="phone-number" placeholder="(021) - XXX" required="required" v-model="phone" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
											</div>
											<div class="w-full mb-3">
												<p class="text-gray-600">Gender</p>
												<label for="gender" class="mx-3">
													<input type="radio" name="gender" value="male" v-model="gender">
													<span class="ml-2">Male</span>
												</label>
												<label for="gender" class="mx-3">
													<input type="radio" name="gender" value="female" v-model="gender" checked>
													<span class="ml-2">Female</span>
												</label>
											</div>
											<div class="w-full mb-3">
												<p class="text-gray-600">Birth date</p>
												<input type="date" name="birthdate" v-model="birthdate" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
											</div>
											<div class="w-full mb-3">
												<p class="text-gray-600">Birth Place</p>
												<input type="text" name="birthplace" v-model="birthplace" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Bidan">
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>
						<!-- Profile End -->
							
						<!-- Occupation -->
						<div class="w-2/5">
							<div class="">
								<h1 class=" text-black bolder font-bold text-xl py-3 text-center">Occupation</h1>
								<div class="min-w-full rounded-b px-10 pt-5 border-t border-solid">
									<div>
										<div class="w-full mb-3 flex">
											<div class="mr-4">
												<p class="text-gray-600">Position</p>
												<div class="inline-block relative w-64">
													<select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" v-model="job_id">
														<option v-for="(item, idx) in allJob" :value="item.id" :key="idx">{{ item.position }} - {{ item.Division }}</option>
													</select>
													<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
														<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
													</div>
												</div>
											</div>
										</div>
										<div class="w-full mb-3">
											<p class="text-gray-600">Employee Status</p>
											<div class="inline-block relative w-64">
												<select class="block appearance-none w-64 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" v-model="status_id">
													<option v-for="(item, idx) in allStatus" :value="item.id" :key="idx">{{ item.status }}</option>
												</select>
												<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
													<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Occupation End -->

						<div class="w-1/5">
							<div class="w-full">
								<div class="ml-3 mt-4 ">
									<div class="bg-cover w-3/5 bg-center" style="height: 160px; width: 160px" :style="{ 'background-image': 'url(' + (this.image ? this.image : 'https://api.adorable.io/avatars/285/abott@adorable.png') + ')' }"></div>
									<input type="file" accept="image/*" ref="file" @change="handleFileUpload($event)" class="mt-4 w-40">
								</div>
							</div>
						</div>
					</div>
				</form>
				<!-- END FORM -->

		</div>
	</app-back>
</template>

<script>
import Background from '../../components/Background'
// import Nav from '../../components/Navigasi'
import { mapGetters, mapActions } from 'vuex'
export default {
	components: {
		AppBack: Background,
		// AppNav: Nav
	},
	data() {
		return {
			activeIndex: 0,
			menu: [
				{'name': 'Profile'},
				{'name': 'Occupation'}
			],
			id: this.$route.params.id,
			name: '',
			email: '',
			gender: '',
			image: '',
			birthdate: '02/12/1991',
			birthplace: '',
			phone: '',
			job_id: 0,
			status_id: 0,
			position: '',
			Division: '',
			status:''
		}
	},
	methods: {
		...mapActions({
			addEmployee: 'employee/addEmployee',
			fetchEmployee: 'employee/fetchEmployee',
			fetchStatus: 'employee/fetchStatus',
			fetchJob: 'employee/fetchJob',
			editEmployee: 'employee/editEmployee',
			removeEmployee: 'employee/removeEmployee'
		}),
		deleteEmp() {
			if(confirm('Are you sure? data will permanently deleted')){
				this.removeEmployee(this.id)
				this.$router.push({name: 'employees'})
			}
		},
		editValue() {
			if (!this.getValue) return
			this.name = this.getValue.name
			this.email = this.getValue.email
			this.gender = this.getValue.gender
			this.image = this.getValue.image
			this.birthdate = this.getValue.birthdate
			this.birthplace = this.getValue.birthplace
			this.phone = this.getValue.phone
			this.job_id = this.getValue.job_id
			this.status_id = this.getValue.status_id
		},
		saveEdited() {
			let jobs = this.allJob;
			let stat = this.allStatus;
			let new_employee = {
				id: this.id,
				name: this.name,
				email: this.email,
				gender: this.gender,
				image: this.image,
				birthdate: this.birthdate,
				birthplace: this.birthplace,
				phone: this.phone,
				job_id: parseInt(this.job_id),
				status_id: parseInt(this.status_id),
				position: '',
				Division: '',
				status: ''
			}
			if(this.name != '' && this.email != '' && this.birthdate != '' && this.job_id != '' && this.status_id != '') {
					this.saveSuccess = true;
					new_employee.position = jobs.filter(a => a.id === new_employee.job_id)[0].position
					new_employee.Division = jobs.filter(a => a.id === new_employee.job_id)[0].Division
					new_employee.status = stat.filter(a => a.id === new_employee.status_id)[0].status
					this.editEmployee(new_employee)
					this.$router.push({ name: 'employees'})
				} else {
					this.saveError = true;
					console.log('Data input error!')
				}
		},
		handleFileUpload(event) {
			let filesSelected = event.target.files;
			let fileToLoad = filesSelected[0];
			let fileReader = new FileReader();
			let sef = this;
			fileReader.onload = function(fileLoadedEvent) 
			{
					sef.image = fileLoadedEvent.target.result;
			};
			fileReader.readAsDataURL(fileToLoad);
		}
	},
	computed: {
		...mapGetters({
			allEmployee: 'employee/listEmployee',
			allJob: 'employee/listJob',
			allStatus: 'employee/listEmployeeStatus'
		}),
		getValue(){
			let emp = this.allEmployee;
			return emp.find(a => a.id === parseInt(this.id))
		}
	},
	async created() {
		await this.fetchEmployee();
		await this.fetchJob();
		await this.fetchStatus();
		await this.editValue();
    },
    beforeRouteEnter (to, from, next) {
        window.$cookies.get('user_login') ? next() : next({ name: 'login', query: { redirect: 'edit' } })
    }
}
</script>