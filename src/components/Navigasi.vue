<template>
	<nav class="container max-w-5xl mx-auto flex items-center justify-between flex-wrap pt-8 pb-4 font-light text-sm border-white border-b-2 mx-2">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<span class="font-semibold text-2xl tracking-tight">HR Portal</span>
		</div>
		<div class="block lg:hidden">
			<button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<!-- <div v-for="item in navPage"> -->
		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white text-md">
			<router-link to="/" class="btn btn-active btn-link mx-1" tag="a" active-class="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded" exact><a>Dashboard</a></router-link> 
			<router-link to="/employees" class="btn btn-active btn-link mx-1" tag="a" active-class="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded"><a>Employees</a></router-link> 
			<router-link to="/attendance" class="btn btn-active btn-link mx-1" tag="a" active-class="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded"><a>Attendance</a></router-link> 
			<router-link to="/applicants" class="btn btn-active btn-link mx-1" tag="a" active-class="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded"><a>Applicants</a></router-link> 
			<router-link to="/leave-requests" class="btn btn-active btn-link mx-1" tag="a" active-class="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded">
				<a>Leave Request<span class="p-1 bg-yellow-500 text-black rounded-sm ml-1 text-xs">2</span></a>
			</router-link> 
			<router-link to="/broadcast-message" class="btn btn-active btn-link mx-1" tag="a" active-class="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded"><a>Broadcast</a></router-link> 
		</div>
		<div class="flex items-center text-white">
			<font-awesome-icon class="mr-2" :icon="['far', 'bell']" />
			<span class="mx-2">Hi, Admin</span>
			<div>
				<span>Logout</span>
			</div>
		</div>
	</nav>
</template>

<script>

export default {

}
</script>

<style>
liner::after {
	width: 90%;
	border: black
}
	
</style>