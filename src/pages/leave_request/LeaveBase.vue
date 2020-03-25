<template>
  <app-back>
	<div class="container max-w-5xl mx-auto">
		<app-nav></app-nav>
		<div class="flex m-5 justify-between items-center">
			<h1 class="text-3xl text-white">Leave Request List</h1>
			<div>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-600 text-gray-700 py-2 text-sm px-4 rounded m-1">Export CSV</a>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-600 text-gray-700 py-2 text-sm px-4 rounded m-1">Export CSV (All)</a>
				<router-link :to="{name: 'add_leave_request'}" class="bg-yellow-500 hover:bg-yellow-600 text-gray-700 py-2 text-sm px-4 rounded m-1">Add Leave Request</router-link>
			</div>
      </div>
      <div class="flex flex-col items-center">
        <app-card-large>
          <template v-slot:titleCard>
						<div class="flex justify-center">
              <div v-for="(item, idx) in menu" :key="idx" @click="activeIndex=idx" :class="{ 'border-b-2 border-yellow-500' : activeIndex === idx}">
                <a href="#" class="text-gray-700 inline-block py-2 px-6" >{{item.name}}</a>
              </div>
            </div>
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
								<tr class="hover:bg-gray-100" v-for="(item, idx) in filterByStatus(leave_list)" :key="idx">
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<a href="#"><img class="h-10 w-10 rounded-full" :src="thumbnailEmp(item.employee_id)"></a>
											</div>
											<div class="ml-4">
												<a href="#"><div class="text-sm leading-5 font-medium text-gray-900 text-left">{{ item.name }}</div></a>
												<div class="text-sm leading-5 text-gray-500 text-left">{{ item.email }}</div>
												<div class="text-sm leading-5 text-gray-500 text-left">{{ phoneEmp(item.employee_id) }}</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div class="text-sm leading-5 text-gray-900 text-left">{{ item.position }}</div>
										<div class="text-sm leading-5 text-gray-500 text-left">{{ item.Division }}</div>
									</td>
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div class="text-sm text-center">
											<div>Leave : {{ item.leave_at }}</div>
											<div><span class="bg-green-600 text-white px-2 text-xs rounded-lg inline-block">{{ item.status }}</span></div>
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
import Nav from '../../components/Navigasi'
import Background from '../../components/Background'
import LargeCard from '../../components/LargeCard'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'App',
	methods: {
		...mapActions({
			fetchLeaveStatus: 'leaveRequest/fetchLeaveRequest',
			fetchStatus: 'leaveRequest/fetchLeaveStatus',
			fetchEmployee: 'employee/fetchEmployee'
		}),
		thumbnailEmp(id) {
			return (this.employee.filter(a => a.id === parseInt(id)).map(a => a.image))
		},
		phoneEmp(id) {
			return (this.employee.filter( a => a.id === id).map(a => a.phone)[0])
		},
		filterByStatus(leave_list) {
			let stat = '';
			if (this.activeIndex === 0) stat = 'Approved'
			if (this.activeIndex === 1) stat = 'Pending'
			if (this.activeIndex === 2) stat = 'Reject'

			return this.name ? leave_list.filter(a => a.status === stat && a.name.toLowerCase().includes(this.name.toLowerCase())) : leave_list.filter(a => a.status === stat)
		}
	},
	computed: {
		...mapGetters({
      employee: 'employee/listEmployee',
			leave_stat: 'leaveRequest/listStatus',
			leave_list: 'leaveRequest/listRequest'
		})
	},
	async created() {
		this.fetchEmployee()
		this.fetchLeaveStatus()
		this.fetchStatus()
	},
  components: {
    AppNav: Nav,
    AppBack: Background,
    AppCardLarge: LargeCard,
  },
  data: () => ({
		activeIndex: 0,
    menu: [
			{ name: 'Approve' },
			{ name: 'Pending' },
			{ name: 'Rejected' },
		]
  }),
  props: [
    "icon"
  ]
}
</script>