<template>
	<div class="bg-gray-200 min-w-screen">
		<div class="bot-bg bg-gray-900">
			<div class="max-w-5xl mx-auto">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
.bot-bg {
	height: 40vh;
}

</style>