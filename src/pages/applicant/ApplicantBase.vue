<template>
  <app-back>
    <div class="bg-black-alt font-sans leading-normal tracking-normal">
      <app-nav></app-nav>
      <div class="px-8 container w-full mx-auto flex mt-6 flex m-5 justify-between items-center">
			<h1 class="text-3xl text-white">Applicant List</h1>
			<div>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-600 text-gray-700 py-2 text-sm px-4 rounded m-1">Export CSV</a>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-600 text-gray-700 py-2 text-sm px-4 rounded m-1">Export CSV (All)</a>
				<router-link :to="{name: 'add_applicant'}" class="bg-yellow-500 hover:bg-yellow-600 text-gray-700 py-2 text-sm px-4 rounded m-1">Add New Applicant</router-link>
			</div>
      </div>
      <div class="flex flex-col items-center">
        <app-card-large>
          <template v-slot:titleCard>
						<div class="flex justify-center">
							<div v-for="(item, idx) in menu" :key="idx"  @click="activeIndex=idx" :class="{ 'border-b-2 border-yellow-500' : activeIndex === idx}">
								<a href="#" class="text-gray-700 inline-block py-2 px-6">{{ item.name }}</a>
							</div>
						</div>
          </template>
          <template v-slot:contentCard>
						<table class="min-w-full">
							<tbody class="bg-white">
								<tr>
									<td class="p-4" colspan="4">
										<div class="flex">
											<input type="text" class="m-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type to search" v-model="name">
											<button class="m-1 bg-yellow-500 hover:bg-yellow-300 text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="search()">Search</button>
										</div>
									</td>
								</tr>
								<!-- TR DATA ROW START -->
								<tr class="hover:bg-gray-100" v-for="(item, idx) in filterApplicant(allApplicant)" :key="idx">
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<a href="#"><img class="h-10 w-10 rounded-full" :src="item.image"></a>
											</div>
											<div class="ml-4">
												<a href="#"><div class="text-sm leading-5 font-medium text-gray-900 text-left">{{ item.name }}</div></a>
												<div class="text-sm leading-5 text-gray-500 text-left">{{ item.email }}</div>
												<div class="text-sm leading-5 text-gray-500 text-left">{{ item.phone }}</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div class="text-sm leading-5 text-gray-900 text-left">{{ item.position }}</div>
										<div class="text-sm leading-5 text-gray-500 text-left">{{ item.Division }}</div>
									</td>
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"></td>
									<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
										<router-link :to="{name: 'edit_applicant', params: {id: item.id}}" class="text-gray-600 hover:text-indigo-900 focus:outline-none focus:underline">
											<svg class="feather feather-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
										</router-link>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AppNav: Nav,
    AppBack: Background,
    AppCardLarge: LargeCard,
  },
  data: () => ({
		activeIndex: 0,
		name: '', 
		menu: [
			{ name: 'Unprocessed' },
			{ name: 'Scheduled to Psycho Test' },
			{ name: 'Scheduled to Interview' }
		],
	}),
	methods: {
		...mapActions({
			fetchApplicant: 'applicant/fetchApplicant'
		}),
		filterApplicant(allApplicant) {
			let stat = '';
			if (this.activeIndex === 0) stat = 'Unprocessed'
			if (this.activeIndex === 1) stat = 'Scheduled to Psycho Test'
			if (this.activeIndex === 2) stat = 'Scheduled to Interview'
			return this.name ? allApplicant.filter(a => a.status === stat && a.name.toLowerCase().includes(this.name.toLowerCase())) : allApplicant.filter(a => a.status === stat)
		},
		search() {
			return this.name
		}
	},
	computed: {
		...mapGetters({
			allApplicant: 'applicant/listApplicant'
		}),
		getFilteredName() {
			return this.allApplicant.filter(a => a.name === this.name)
		}
	},
	async created() {
		await this.fetchApplicant();
	},
  props: [
    "icon"
  ],
  beforeRouteEnter (to, from, next) {
    window.$cookies.get('user_login') ? next() : next({ name: 'login', query: { redirect: 'applicants' } })
  }
}
</script>
