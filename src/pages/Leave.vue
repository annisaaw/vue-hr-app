<template>
  <app-back>
    <div class="bg-black-alt font-sans leading-normal tracking-normal">
      <app-nav></app-nav>
      <div class="container w-full mx-auto pt-20 flex mt-6 flex m-5 justify-between items-center px-8">
			<h1 class="text-3xl text-white">Leave Request List</h1>
			<div>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-900 text-gray-700 py-1 text-sm px-4 rounded m-1">Export CSV</a>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-900 text-gray-700 py-1 text-sm px-4 rounded m-1">Export CSV (All)</a>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-900 text-gray-700 py-1 text-sm px-4 rounded m-1">Add Leave Request</a>
			</div>
      </div>
      <div class="flex flex-col items-center">
        <app-card-large>
          <template v-slot:titleCard>
            <a href="#" class="text-gray-700 border-b-2 border-yellow-500 inline-block py-2 px-6">Approved</a>
            <a href="#" class="text-gray-700 inline-block py-2 px-6">Pending</a>
            <a href="#" class="text-gray-700 inline-block py-2 px-6">Rejected</a>
          </template>
          <template v-slot:contentCard>
			<table class="min-w-full">
				<tbody class="bg-white">
					<tr>
						<td class="p-4" colspan="4">
							<div class="flex">
								<input type="text" class="m-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="" placeholder="Type to search">
								<button class="m-1 bg-yellow-500 hover:bg-yellow-700 text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
							</div>
						</td>
					</tr>
					<!-- TR DATA ROW START -->
					<tr class="hover:bg-gray-100">
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="flex items-center">
								<div class="flex-shrink-0 h-10 w-10">
									<a href="#"><img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></a>
								</div>
								<div class="ml-4">
									<a href="#"><div class="text-sm leading-5 font-medium text-gray-900 text-left">Mulia Arifandi Nasution</div></a>
									<div class="text-sm leading-5 text-gray-500 text-left">mul14@example.com</div>
									<div class="text-sm leading-5 text-gray-500 text-left">081234567</div>
								</div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="text-sm leading-5 text-gray-900 text-left">Manager</div>
							<div class="text-sm leading-5 text-gray-500 text-left">Research and Development</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="text-sm text-center">
								<div>Leave at 20 June 2020</div>
								<div><span class="bg-green-600 text-white px-2 text-xs rounded-lg inline-block">Approved</span></div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
							<a href="#" class="text-gray-600 hover:text-indigo-900 focus:outline-none focus:underline">
								<svg class="feather feather-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
							</a>
						</td>
					</tr>
					<!-- TR DATA ROW END -->
					<tr class="hover:bg-gray-100">
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="flex items-center">
								<div class="flex-shrink-0 h-10 w-10">
									<a href="#"><img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></a>
								</div>
								<div class="ml-4">
									<a href="#"><div class="text-sm leading-5 font-medium text-gray-900 text-left">Mulia Arifandi Nasution</div></a>
									<div class="text-sm leading-5 text-gray-500 text-left">mul14@example.com</div>
									<div class="text-sm leading-5 text-gray-500 text-left">081234567</div>
								</div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="text-sm leading-5 text-gray-900 text-left">Manager</div>
							<div class="text-sm leading-5 text-gray-500 text-left">Research and Development</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="text-sm text-center">
								<div>Leave at 20 June 2020</div>
								<div><span class="bg-green-600 text-white px-2 text-xs rounded-lg inline-block">Approved</span></div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
							<a href="#" class="text-gray-600 hover:text-indigo-900 focus:outline-none focus:underline">
								<svg class="feather feather-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
							</a>
						</td>
					</tr>
					<tr class="hover:bg-gray-100">
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="flex items-center">
								<div class="flex-shrink-0 h-10 w-10">
									<a href="#"><img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></a>
								</div>
								<div class="ml-4">
									<a href="#"><div class="text-sm leading-5 font-medium text-gray-900 text-left">Mulia Arifandi Nasution</div></a>
									<div class="text-sm leading-5 text-gray-500 text-left">mul14@example.com</div>
									<div class="text-sm leading-5 text-gray-500 text-left">081234567</div>
								</div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="text-sm leading-5 text-gray-900 text-left">Manager</div>
							<div class="text-sm leading-5 text-gray-500 text-left">Research and Development</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
							<div class="text-sm text-center">
								<div>Leave at 20 June 2020</div>
								<div><span class="bg-green-600 text-white px-2 text-xs rounded-lg inline-block">Approved</span></div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
							<a href="#" class="text-gray-600 hover:text-indigo-900 focus:outline-none focus:underline">
								<svg class="feather feather-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
          </template>
        </app-card-large>
      </div>
	</div>
  </app-back>
</template>

<script>
import Nav from '../components/Navigasi'
import Background from '../components/Background'
import LargeCard from '../components/LargeCard'

export default {
  name: 'App',
  components: {
    AppNav: Nav,
    AppBack: Background,
    AppCardLarge: LargeCard,
  },
  data: () => ({
    //
  }),
  props: [
    "icon"
  ]
}
</script>

<style scoped>

</style>