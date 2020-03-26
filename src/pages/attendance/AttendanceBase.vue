<template>
  <app-back>
    <div class="container max-w-5xl mx-auto">
      <app-nav></app-nav>
			<h1 class="text-3xl text-white ml-4 mt-4">Attendance</h1>
      <div class="flex justify-between items-center m-8">
				<a href="#" class="bg-green-500 hover:bg-green-600 p-3 text-md text-white rounded mr-3">Clock In</a>
				<a href="#" class="bg-red-500 hover:bg-red-600 text-white p-3 text-md rounded m-3">Clock Out</a>
      </div>
      <div class="flex flex-col items-center">
        <app-table-card>
          <template v-slot:contentCard>
			<table class="table-auto w-full">
				<thead>
					<tr>
						<th class="border text-center text-sm p-4 text-gray-700">Employee</th>
					<!-- TR DATA ROW START -->
						<th class="border text-center text-sm p-4 text-gray-700">2 Maret 2020<br>Monday</th>
					<!-- TR DATA ROW END -->
						<th class="border text-center text-sm p-4 text-gray-700">3 Maret 2020<br>Tuesday</th>
						<th class="border text-center text-sm p-4 text-gray-700">4 Maret 2020<br>Wednesday</th>
						<th class="border text-center text-sm p-4 text-gray-700">5 Maret 2020<br>Thrusday</th>
						<th class="border text-center text-sm p-4 text-gray-700">6 Maret 2020<br>Friday</th>
					</tr>
				</thead>
				<tbody>
					<!-- TR DATA ROW START -->
					<tr v-for="(item, idx) in employee" :key="idx">
						<td class="border text-center p-4">
							<a href="#"> {{ item.name }} </a>
						</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-red-500 text-white">A</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-red-500 text-white">A</td>						<td class="border text-center p-4 bg-green-500 text-white">P</td>
					</tr>
					<!-- TR DATA ROW END -->

				</tbody>
			</table>
          </template>
        </app-table-card>
      </div>
	</div>
  </app-back>
</template>

<script>
import Nav from '../../components/Navigasi'
import Background from '../../components/Background'
import TableCard from '../../components/TableCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AppNav: Nav,
    AppBack: Background,
		AppTableCard: TableCard
  },
  data: () => ({
    state: {
			date : new Date()
		}
	}),
	methods: {
    ...mapActions({
      fetchEmployee: 'employee/fetchEmployee',
		})
	},
	computed: {
	...mapGetters({
		employee: 'employee/listEmployee'
		})
	},
	async created() {
    await this.fetchEmployee();
  },
  props: [
    "icon"
  ]
}
</script>
