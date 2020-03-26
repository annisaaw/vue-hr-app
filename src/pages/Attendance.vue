<template>
  <app-back>
    <div class="bg-black-alt font-sans leading-normal tracking-normal">
      <app-nav></app-nav>
      <div class="px-8 container w-full mx-auto pt-20 flex mt-6 flex m-5 justify-between items-center">
			<h1 class="text-3xl text-white">Attendance</h1>
			<div>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-900 text-gray-700 py-1 text-sm px-4 rounded m-1">Clock In</a>
				<a href="#" class="bg-yellow-500 hover:bg-yellow-900 text-gray-700 py-1 text-sm px-4 rounded m-1">Clock Out</a>
			</div>
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
					<tr>
						<td class="border text-center p-4">
							<a href="#"> John Lenon </a>
						</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-red-500 text-white">A</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-red-500 text-white">A</td>						<td class="border text-center p-4 bg-green-500 text-white">P</td>
					</tr>
					<!-- TR DATA ROW END -->
					<tr>
						<td class="border text-center p-4">
							<a href="#"> John Lenon </a>
						</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-red-500 text-white">A</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
					</tr>
					<tr>
						<td class="border text-center p-4">
							<a href="#"> John Lenon </a>
						</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
						<td class="border text-center p-4 bg-green-500 text-white">P</td>
					</tr>

				</tbody>
			</table>
          </template>
        </app-table-card>
      </div>
	</div>
  </app-back>
</template>

<script>
import Nav from '../components/Navigasi'
import Background from '../components/Background'
import TableCard from '../components/TableCard'

export default {
  name: 'App',
  components: {
    AppNav: Nav,
    AppBack: Background,
    AppTableCard: TableCard,
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