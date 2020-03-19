<template>
  <app-back>
    <div class="container max-w-5xl mx-auto">
      <app-nav></app-nav>
      <div class="flex m-5 justify-between items-center">
			<h1 class="text-3xl text-white">Broadcast Message</h1>
      </div>
      <div class="flex flex-col items-center">
        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-full">
			<div class="align-middle inline-block rounded min-w-full shadow overflow-hidden border-b border-gray-200">
				<div class="bg-white shadow p-4">
					<div class="w-full mb-6">
						<p class="mb-2 text-gray-600">Message</p>
						<input type="text" name="" class="m-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
						<button class="m-1 bg-yellow-500 hover:bg-yellow-300 text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
					</div>
				</div>
			</div>
        </div>
      </div>
	</div>
  </app-back>
</template>

<script>
import Nav from '../components/Navigasi'
import Background from '../components/Background'

export default {
  name: 'App',
  components: {
    AppNav: Nav,
    AppBack: Background,
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