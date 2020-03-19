<template>
	<div>
		<div class="bg-gray-200 min-h-screen min-w-screen">
			<div class="bot-bg bg-gray-600 min-w-screen">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
			
	}
</script>

<style scoped>
.bot-bg {
	height: 40vh;
}

</style>