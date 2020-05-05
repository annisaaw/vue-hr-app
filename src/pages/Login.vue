<template>
    <div class="w-full flex justify-center items-center min-h-screen">   
        <form class="bg-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4" @submit.prevent="login()">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-orange-100" id="username" type="email" placeholder="Email" value="rinoganteng@mail.start" v-model="email" :class="{ 'border-red-600' : error }">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-orange-100" id="password" type="password" placeholder="Password" value="admin" v-model="password">
            <p class="text-red-600 text-xs italic text-center" v-if="error">Account is not found</p>
          </div>
          <div class="flex items-center justify-around">
            <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">Sign In</button>
            <router-link to='lostpassword' class="hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none">Forgot Password</router-link>
          </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
      return{
          email: 'john.doe@mail.com',
          password: 'kompas',
          error: false
      }
    },
    methods: {
			login(){
				var getUser = this.emp.findIndex(ob => ob.email === this.email && ob.password === this.password);
        // console.log(this.emp.findIndex(a=>a.email === this.email), 'test');
			if(getUser == -1) {
				this.error = true;
				return
      }

      this.$cookies.set('user_login',this.emp[getUser].id,'23h');
			this.$router.push({ name: 'dashboard' });
        }
    },
    computed: {
      ...mapGetters({
        emp: 'employee/listEmployee'
      }),
    },
    beforeRouteEnter (to, from, next) {
      window.$cookies.get('user_login') ? next({ name: 'dashboard' }) : next()
    }
}
</script>

