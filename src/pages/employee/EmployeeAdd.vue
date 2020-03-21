<template>
	<app-back>
		<div class="container max-w-5xl mx-auto">
			<app-nav class="mb-5"></app-nav>
			<div>
				<div>
					<!-- START FORM -->
					<form action="" method="post">
						<div class="flex justify-between">
							<h1 class="text-white text-2xl">New Employee</h1>
							<div class="items-center my-3">
								<button class="btn btn-lg mr-4 p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">Save & Add New</button>
								<button class="btn btn-lg mr-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">Save</button>
								<router-link :to="{name: 'employees'}" class="btn btn-lg px-4 py-3 bg-blue-700 hover:bg-blue-500 text-white rounded-md router-link-active">Cancel</router-link>
							</div>
						</div>
						<div class="flex">
							<div class="w-1/4">
								<ul class="bg-white rounded mr-4 ">
									<li><a href="" class="py-2 px-4 block hover:bg-teal-700 text-white hover:text-white rounded-t bg-teal-500">Profile</a></li>
									<li><a href="" class="py-2 px-4 block hover:bg-teal-700 text-black hover:text-white">Occupation</a></li>
									<li><a href="" class="py-2 px-4 block hover:bg-teal-700 text-black hover:text-white">Address</a></li>
									<li><a href="" class="py-2 px-4 block hover:bg-teal-700 text-black hover:text-white">Emergency Contacts</a></li>
								</ul>
							</div>
							<div class="w-3/4">
								<div class="shadow">
									<h1 class="bg-white text-black bolder font-xl p-4">Profile</h1>
									<div class="min-w-full rounded-b bg-gray-100 px-10 pt-5 border-t border-2 border-solid border-white">
										<div class="flex">
											<div class="w-2/3">
												<div class="w-full mb-3">
													<p class="mb-2 text-gray-600">Name</p>
													<input type="text" name="name" placeholder="" required="required" id="newName" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
												</div>
												<div class="w-full mb-3">
													<p class="mb-2 text-gray-600">Email</p>
													<input type="email" name="email" placeholder="" required="required" id="newEmail" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
												</div>
												<div class="w-full mb-3">
													<p class="mb-2 text-gray-600">Phone Number</p>
													<input type="number" name="phone-number" placeholder="(021) - XXX" required="required" id="newPhoneNumber" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
												</div>
												<div class="w-full mb-3">
													<p class="mb-2 text-gray-600">Gender</p>
													<label for="gender" class="mx-3">
														<input type="radio" name="gender" value="1">
														<span class="ml-2">Male</span>
													</label>
													<label for="gender" class="mx-3">
														<input type="radio" name="gender" value="2" checked>
														<span class="ml-2">Female</span>
													</label>
												</div>
												<div class="w-full mb-3">
													<p class="mb-2 text-gray-600">Birth date</p>
													<input type="date" name="birthdate" id="newBirthdate" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
												</div>
												<div class="w-full mb-3">
													<p class="mb-2 text-gray-600">Birth Place</p>
													<input type="text" name="birthplace" id="newBirthplace" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Bidan">
												</div>
											</div>
											<div class="w-1/3">
												<div class="ml-10 mt-4">
													<div class="">
														<div class="bg-cover w-3/5 bg-center" style="height: 160px; width: 160px" :style="{ 'background-image': 'url(' + this.dataImg + ')' }"></div>
														<input type="file" src=""  alt="" id="inputFile" class="mt-4">
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</form>
					<!-- END FORM -->
				</div>
			</div>
		</div>
	</app-back>
</template>

<script>
import Background from '../../components/Background'
import Nav from '../../components/Navigasi'
import { mapActions } from 'vuex'
export default {
		components: {
			AppBack: Background,
			AppNav: Nav
		},
		data() {
			return {
				dataImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
			}
		},
		computed: {
			...mapActions({
				sendNewEmployee: 'employee/getNewEmployee'
			})
		}
}
</script>

<style scoped>

</style>