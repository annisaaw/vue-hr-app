<template>
	<nav id="header" class="bg-gray-900 min-w-full z-10 top-0 left-0 shadow">
		<div class=" container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0 max-w-5xl">
			<div class="w-1/2 pl-2 md:pl-0">
				<a class="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#"> 
					<font-awesome-icon :icon="['fa', 'user-secret']" /> &emsp; HR Application
				</a>
			</div>
			<div class="w-1/2 pr-0">
				<div class="flex relative inline-block float-right">
					<div class="relative text-sm text-gray-100">
						<button id="userButton" class="flex items-center focus:outline-none mr-3"  @click="show = !show">
							<img class="w-8 h-8 rounded-full mr-4" :src="isLoggedInAvatar"
							alt="Avatar of User"> <span class="hidden md:inline-block text-gray-100">Hi, {{isLoggedIn}}</span>
							<span class="px-1" ><font-awesome-icon :icon="['fa', 'angle-down']" /></span>
						</button>
						<div id="userMenu" class="bg-gray-900 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30" :class="{ invisible: !show }">
							<ul class="list-reset">
								<li><a href="#" class="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline" @click.prevent="logOut()">Logout</a></li>
							</ul>
						</div>
					</div>
					<div class="block lg:hidden pr-4">
						<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none">
							<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
						</button>
					</div>
				</div>
			</div>
			<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-900 z-20" id="nav-content">
				<ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
					<li class="mr-6 my-2 md:my-0">
						<router-link to="/" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400" tag="a" active-class="text-white border-pink-400" exact><font-awesome-icon :icon="['fa', 'home']" />&emsp;<span class="pb-1 md:pb-0 text-sm">Dashboard</span></router-link>
					</li>
					<li class="mr-6 my-2 md:my-0">
						<router-link to="/employees" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-white border-b-2 border-gray-900  hover:border-red-400" tag="a" active-class="text-white border-red-400" exact><font-awesome-icon :icon="['fa', 'briefcase']" />&emsp;<span class="pb-1 md:pb-0 text-sm">Employees</span></router-link>
					</li>
					<li class="mr-6 my-2 md:my-0">
						<router-link to="/attendance" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-purple-400" tag="a" active-class="text-white border-purple-400" exact><font-awesome-icon :icon="['far', 'clock']" />&emsp;<span class="pb-1 md:pb-0 text-sm">Attendance</span></router-link>
					</li>
					<li class="mr-6 my-2 md:my-0">
						<router-link to="/applicants" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-green-400" tag="a" active-class="text-white border-green-400" exact><font-awesome-icon :icon="['far', 'newspaper']" />&emsp;<span class="pb-1 md:pb-0 text-sm">Applicants</span></router-link>
					</li>
					<li class="mr-6 my-2 md:my-0"> 
						<router-link to="/leave-requests" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-red-400" tag="a" active-class="text-white border-red-400">
							<font-awesome-icon :icon="['fa', 'tags']" />&emsp;<span class="pb-1 md:pb-0 text-sm">Leave Request</span><span class="p-1 bg-yellow-500 text-black rounded-sm ml-1 text-xs">{{sumLeaveRequest()}}</span>
						</router-link> 
					</li>
					<li class="mr-6 my-2 md:my-0">
						<router-link to="/broadcast-message" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400" tag="a" active-class="text-white border-pink-400" exact><font-awesome-icon :icon="['far', 'envelope']" />&emsp;<span class="pb-1 md:pb-0 text-sm">Broadcast</span></router-link>
					</li>
				</ul>
				
				<div class="relative pull-right pl-4 pr-4 md:pr-0">
					<input type="search" placeholder="Search" class="w-full bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal">
					<div class="absolute search-icon" style="top: 0.375rem;left: 1.75rem;">
						<svg class="fill-current pointer-events-none text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	data(){
		return {
			show: false
		}
	},
	methods: {
		...mapActions({
			fetchLeaveRequest: 'leaveRequest/fetchLeaveRequest',
		}),
		sumLeaveRequest() {
			return this.leave_list.length
		},
		logOut(){
			this.$cookies.remove('user_login');
			this.$router.push({ name: 'login' });
		}
	},
	computed: {
		...mapGetters({
			leave_list: 'leaveRequest/listRequest',
			emp: 'employee/listEmployee'
		}),
		isLoggedIn(){
			let tar = this.$cookies.get('user_login');
			return tar ? this.emp.find(a=>a.id == tar).name.split(" ")[0] : '';
		},
		isLoggedInAvatar() {
			return this.emp.find(a => a.name === this.isLoggedIn) ? this.emp.find(a => a.name === this.isLoggedIn).image : 'http://i.pravatar.cc/300';
		}
	},
	async created() {
		this.fetchLeaveRequest()
	}
}
</script>

<style>
liner::after {
	width: 90%;
	border: black
}
	
</style>