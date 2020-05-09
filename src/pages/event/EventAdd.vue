<template>
	<app-back>
		<div class="bg-black-alt font-sans leading-normal tracking-normal">
			<app-nav class="mb-5"></app-nav>
			<form class="mx-auto pt-6 m-5 px-8" action="" method="post">
				<h1 class="bg-white text-black bolder text-xl bolder p-4">Event Calendar</h1>
				<div class="min-w-full rounded-b bg-gray-100 px-10 pt-5 border-t border-2 border-solid border-white">
					<div>
						<div class="w-full mb-3">
							<p class="mb-2 text-gray-600">Event Date</p>
							<div class="inline-block relative w-64">
								<input type="date" name="date" v-model="date" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
							</div>
						</div>
						<div class="w-full mb-3 flex">
							<div class="mr-4">
								<p class="mb-2 text-gray-600">Event Name</p>
								<div class="inline-block relative w-64">
									<input type="text" name="desc" placeholder="" required="required" v-model="desc" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
								</div>
							</div>
						</div>
					</div>
					<div class="items-center my-3">
						<button class="btn btn-lg mr-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md" @click.prevent="saveNew()">Save</button>
						<router-link :to="{name: 'dashboard'}" class="btn btn-lg px-4 py-3 bg-blue-700 hover:bg-blue-500 text-white rounded-md router-link-active">Cancel</router-link>
					</div>
				</div>
			</form>
		</div>
	</app-back>
</template>

<script>
import Background from '../../components/Background'
import Nav from '../../components/Navigasi'
import { mapGetters, mapActions } from 'vuex'

export default {
	components: {
		AppBack: Background,
		AppNav: Nav
	},
	data(){
		return {
			activeIndex: 0,
			saveSuccess: false,
			saveError: false,
			date: '02/12/1991',
			desc: ''
		}
	},
	methods: {
		...mapActions({
			addEvent: 'event/addEvent',
			fetchEvent: 'event/fetchEvent',
		}),
		saveNew() {
			const last_id = this.allEvent[this.allEvent.length-1].id;
			let new_event = {
				id: parseInt(last_id + 1),
				date: this.date,
				desc: this.desc
			}	

			if(this.desc != '' && this.date != '') {
				this.saveSuccess = true;
				this.addEvent(new_event)
				this.$router.push({ name: 'dashboard' })
			} else {
				this.saveError = true;
				console.log('Data input error!')
			}
			
		},
	},
	computed: {
		...mapGetters({
			allEvent: 'event/listEvent'
		})
	},
	async created() {
		await this.fetchEvent();
    },
    beforeRouteEnter (to, from, next) {
        window.$cookies.get('user_login') ? next() : next({ name: 'login', query: { redirect: 'add' } })
    }

}
</script>