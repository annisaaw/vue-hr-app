<template>
    <div class="w-full flex justify-center items-center min-h-screen bot-bg bg-gray-900">   
        <!-- Profile  -->
        <div class="shadow w-3/4 m-12">
          <h1 class="text-white text-3xl boder-b-2 my-4 border-gray-300 p-4 font-bold text-left w-full">Submit Application &emsp; <font-awesome-icon :icon="['far', 'newspaper']" /> </h1>
          <div class="min-w-full rounded-b bg-gray-100 px-10 pt-5 border-t border-2 border-solid border-white">
            <div class="flex">
              <div class="w-2/3">
                <div class="w-full mb-3">
                  <p class="mb-2 text-gray-600">Name</p>
                  <input type="text" name="name" placeholder="" required="required" v-model="name" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
                </div>
                <div class="w-full mb-3">
                  <p class="mb-2 text-gray-600">Email</p>
                  <input type="email" name="email" placeholder="" required="required" v-model="email" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
                </div>
                <div class="w-full mb-3">
                  <p class="mb-2 text-gray-600">Phone Number</p>
                  <input type="number" name="phone-number" placeholder="(021) - XXX" required="required" v-model="phone" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
                </div>
                <div class="w-full mb-3">
                  <p class="mb-2 text-gray-600">Gender</p>
                  <label for="gender" class="mx-3">
                    <input type="radio" name="gender" value="male" v-model="gender">
                    <span class="ml-2">Male</span>
                  </label>
                  <label for="gender" class="mx-3">
                    <input type="radio" name="gender" value="female" v-model="gender" checked>
                    <span class="ml-2">Female</span>
                  </label>
                </div>
                <div class="w-full mb-3">
                  <p class="mb-2 text-gray-600">Birth date</p>
                  <input type="date" name="birthdate" v-model="birthdate" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
                </div>
                <div class="w-full mb-3">
                  <p class="mb-2 text-gray-600">Birth Place</p>
                  <input type="text" name="birthplace" v-model="birthplace" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Bidan">
                </div>
                <div class="w-full mb-3">
                  <p class="mb-2 text-gray-600">Available Job</p>
                  <div class="relative">
                    <select class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" id="grid-state">
                      <option v-for="(item, idx) in job" :key="idx" :value="item.id">{{ item.position }} - {{ item.Division }}</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div class="w-full mb-3">
                  <p class="mb-2 text-gray-600">Upload CV</p>
                  <input type="file" accept="image/*" ref="file" @change="handleFileUpload($event)" class="mt-4 w-40">
                </div>
                <div class="w-full mb-3">
              
              <button class="btn btn-lg mr-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md w-full" @click.prevent="saveEdited()">Apply Now</button>
                </div>
              </div>
              <div class="w-1/3">
                <div class="ml-10 mt-4 ">
                  <div class="bg-cover w-3/5 bg-center" style="height: 160px; width: 160px; background-image: url('https://www.eeweb.com/assets/themes/mobile/images/user.png');"></div>
                  <input type="file" accept="image/*" ref="file" @change="handleFileUpload($event)" class="mt-4 w-40">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Profile End -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
      return {
        activeIndex: 0,
        imagePreview: false,
        saveSuccess: false,
        saveError: false,
        name: '',
        email: '',
        gender: 'female',
        image: '',
        birthdate: '02/12/1991',
        birthplace: '',
        phone: '',
        job_id: 0,
        status_id: 0,
        position: '',
        Division: '',
        status:''
      }
    },
    methods: {
      ...mapActions({
        fetchJob: 'applicant/fetchJob'
      }),
      handleFileUpload(event) {
        let filesSelected = event.target.files;
        let fileToLoad = filesSelected[0];
        let fileReader = new FileReader();
        let sef = this;
        fileReader.onload = function(fileLoadedEvent) 
        {
            sef.image = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(fileToLoad);
      }
    },
    computed: {
      ...mapGetters({
        job: 'applicant/listJob'
      })
    },
  async created() {
    await this.fetchJob();
  },
    beforeRouteEnter (to, from, next) {
      window.$cookies.get('user_login') ? next({ name: 'dashboard' }) : next()
    }
}
</script>

