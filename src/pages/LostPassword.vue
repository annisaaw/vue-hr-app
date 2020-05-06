<template>
  <div class="w-full flex justify-center items-center min-h-screen">
    <form class="bg-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4" @submit.prevent="getPassword()">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">User Email</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-orange-100" id="email" type="email" placeholder="Email registered" v-model="email" :class="{ 'border-red-600' : error }">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">Phone Number</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-orange-100" id="phone" type="number" placeholder="Phone number registered" v-model="phone" :class="{ 'border-red-600' : error }">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="birthdate">Birth Date</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-orange-100" id="birthdate" type="date" v-model="birthdate" :class="{ 'border-red-600' : error }">
      </div>
      <!-- <div>{{ list }}</div>   -->
      <div class="flex items-center justify-around">
        <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">Get Password</button>
      </div>
      <div class="flex items-center justify-around">
        <p class="text-sm p-1 text-red-600" v-if="error">Account's not found</p>
        <div class="block font-bold mt-4 mb-1" v-if="password">
          <p class="text-lg p-1 underString" >{{ password }}</p>
        </div>
      </div>
      <div class="flex items-center justify-center mt-3" v-if="password">
        <button class="bg-green-300 py-1 px-5 rounded" type="submit" @click="loginPage">
          <span>Login</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      email: '',
      phone: '',
      birthdate: '02/08/1993',
      password: '',
      error: false
    }
  },
  methods: {
    getPassword() {
      let date = this.birthdate.replace(/-/g, '/').split("/").reverse().join("/");
      let getPass = this.list.find(a=>a.email === this.email && a.phone === this.phone && a.birthdate === date).password;
      return getPass ? this.password = getPass : this.error = true;
    },
    loginPage() {
      this.$router.push({ name: 'login'})
    }
  },
  computed: {
    ...mapGetters(
      { list: 'employee/listEmployee' }
    )
  }
}
</script>

<style lang="stylus">
.underString:after{
  content: "";
  width: 4.124rem;
  height: 0.25rem;
  display: block;
  background-color: #fff;
  margin-top: 0.625rem;
}
</style>