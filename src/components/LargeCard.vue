<template>
	<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-full">
		<div class="align-middle inline-block rounded min-w-full shadow overflow-hidden border-b border-gray-200">
			<div class="border-b border-gray-300 text-center bg-white pt-4 shadow rounded-t">
				<slot name="titleCard"></slot>
			</div>
			<div class="border-b border-gray-300 text-center bg-white pt-4 shadow">
				<slot name="contentCard"></slot>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
      
  }
</script>

<style scoped>

</style>