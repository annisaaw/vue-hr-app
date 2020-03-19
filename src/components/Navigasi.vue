<template>
	<nav class="container max-w-5xl mx-auto flex items-center justify-between flex-wrap p-6 font-light text-sm border-white border-b-2 mx-2">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<span class="font-semibold text-xl tracking-tight">HR Portal</span>
		</div>
		<div class="block lg:hidden">
			<button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<!-- <div v-for="item in navPage"> -->
		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white">
			<a href="#" class="btn btn-active btn-link mx-1">
				<span>Dashboard</span>
			</a>
			<a href="#" class="btn btn-active btn-link mx-1">
				<span>Employees</span>
			</a>
			<a href="#" class="btn btn-active btn-link mx-1">
				<span>Attendance</span>
			</a>
			<a href="#" class="btn btn-active btn-link mx-1">
				<span>Applicants</span>
			</a>
			<a href="#" class="btn btn-active btn-link mx-1">
				<span>Leave Request</span>
				<span class="p-1 bg-yellow-500 text-black rounded-sm ml-1 text-xs">2</span>
			</a>
			<a href="#" class="btn btn-active btn-link mx-1">
				<span>Broadcast</span>
			</a>
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