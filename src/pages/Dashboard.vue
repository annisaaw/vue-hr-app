<template>
  <app-back>
    <app-nav></app-nav>
    <!-- start: attendance button -->
    <div class="bg-black-alt w-full flex justify-around flex mt-4">
      <div 
        v-for="(item, idx) in attendance.type" :key="idx"
        @click="attend(idx)">
        <button class="rounded-full h-20 w-20 flex items-center justify-center bg-white opacity-75"
        @click="activeIdx=idx" 
        :class="{ 'bg-green-600 opacity-100' : activeIdx === idx }"
        >{{ item }}</button>
      </div>
    </div>
    <!-- end: attendance button -->
    
    <div class="bg-black-alt font-sans leading-normal tracking-normal">
      <div class="w-full flex mt-6">
        <app-card-mini>
          <template v-slot:titleCard>Total Employee</template>
          <template v-slot:contentCard>
            <div >
              {{ totalEmp() }}
            </div>
          </template>
          <template v-slot:subCard>
            <div>
            {{ maleEmp() }} Males <font-awesome-icon :icon="['fas', 'male']" /> / {{ femaleEmp() }} females <font-awesome-icon :icon="['fas', 'female']" />
            </div>
          </template>
        </app-card-mini>
        <app-card-mini>
          <template v-slot:titleCard>Today's People</template>
          <template v-slot:contentCard>
            <div class="flex justify-center">
              <div class="flex items-center justify-center" v-for="(item, idx) in photoEmp()" :key="idx">
                <div class="bg-cover bg-center w-12 rounded-full h-12 -ml-5 mt-4" :style="{ 'background-image': 'url(' + item + ')' }"></div>
              </div>
            </div>
          </template>
          <template v-slot:subCard>
            <div class="mt-3">
              {{ totalEmp() }} People
            </div>
          </template>
        </app-card-mini>
        <app-card-mini>
          <template v-slot:titleCard>Today's Present</template>
          <template v-slot:contentCard>
            <div class="m-1 flex items-center justify-center">
              <p class="present">0</p><span class="text-gray-400">/ {{ totalEmp() }}</span>
            </div>
          </template>
        </app-card-mini>
      </div>

      <div class="flex">
        <div class="max-w-4xl md:w-full shadow bg-gray-100 rounded m-4 border-t-4 border-yellow-500"> 
          <!-- start: upcoming events -->
          <div>
            <div class=" text-center font-bold p-4 rounded-t border-b">
              <p>Upcoming Events</p>
            </div>
            <div>
              <div class="p-4">
                <table class="table-auto w-full bg-white border text-sm" v-for="(item, idx) in allEvent" :key="idx">
                  <tr>
                    <td class="px-2 py-2 border-b">
                      <font-awesome-icon :icon="['far', 'calendar-alt']" size="lg" />
                    </td>
                    <td class="px-4 py-2 border-b">
                      <p>{{ item.date }}</p>
                    </td>
                    <td class="py-2 border-b" style="max-width: 3rem">
                      <p>{{ item.desc }}</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <!-- end: upcoming events -->

          <div>
            <div class=" text-center font-bold p-4 rounded-t border-b">
              <p>Attendance</p>
            </div>
            <div>
              <div class="p-2">
                <table class="table-auto w-full bg-white border text-sm">
                  <tr class="w-full text-center">
                    <td class="w-1/5">
                      <font-awesome-icon :icon="['far', 'calendar-alt']" size="lg" />
                    </td>
                    <td class="border-b w-2/5">
                      <p>Masuk Time</p>
                    </td>
                    <td class="border-b w-2/5" style="max-width: 3rem">
                      <p>Keluar Time</p>
                    </td>
                  </tr>
                  <tr class="w-full text-center">
                    <td class="w-1/5">
                      <font-awesome-icon :icon="['far', 'clock']" />
                    </td>
                    <td class="border-b w-2/5">{{ timeIn }}</td>
                    <td class="border-b w-2/5">{{ timeOut }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <app-card-medium>
          <template v-slot:titleCard>New Applicants</template>
          <template v-slot:contentCard>
            <div class="p-4">
              <table class="table-auto w-full bg-white border text-sm" v-for="(item, idx) in allApplicant" :key="idx">
                <tr>
                  <td class="px-1 py-2 border-b">
                    <font-awesome-icon :icon="['fas', 'user-secret']" size="lg" />
                  </td>
                  <td class="px-4 py-2 border-b" style="max-width: 3rem">
                    <p>{{ item.name }}</p>
                  </td>
                  <td class="px-4 py-2 border-b" style="max-width: 3rem">
                    <p>{{ item.position }}</p>
                  </td>
                  <td class="px-4 py-2 border-b" style="max-width: 3rem">
                    <p>{{ item.status }}</p>
                  </td>
                </tr>
              </table>
            </div>
          </template>
        </app-card-medium>
      </div>
    </div>
    

  </app-back>
  
</template>

<script>
import Nav from '../components/Navigasi'
import Background from '../components/Background'
import MiniCard from '../components/MiniCard'
import MediumCard from '../components/MediumCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AppNav: Nav,
    AppBack: Background,
    AppCardMini: MiniCard,
    AppCardMedium: MediumCard
  },
  methods: {
    ...mapActions({
      fetchEmployee: 'employee/fetchEmployee',
      fetchEvent: 'event/fetchEvent',
      fetchApplicant: 'applicant/fetchApplicant'
    }), 
    totalEmp() {
      return this.allEmployee.length
    },
    femaleEmp() {
      return this.allEmployee.filter(a => a.gender === 'female').length
    },
    maleEmp() {
      return this.allEmployee.filter(a => a.gender === 'male').length
    },
    photoEmp() {
      return this.allEmployee.map(a => a.image)
    },
    attend(idx) { 
      let today = new Date();
      let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

      if (idx === 0) {
        this.timeIn = time;
      } else if (idx === 1) {
        this.timeOut = time;
      } else {
        return;
      }
      return time;
    }
  },
  watch: {
    timeIn() {
      this.$store.dispatch('attendance/timeIn', this.timeIn);
    },
    timeOut() {
      this.$store.dispatch('attendance/timeOut', this.timeOut);
    }
  },
  computed: {
    ...mapGetters({
      allEmployee: 'employee/listEmployee',
      allEvent: 'event/listEvent',
      allApplicant: 'applicant/listApplicant'
    })
  },
  async created() {
    await this.fetchEmployee();
    await this.fetchEvent();
    await this.fetchApplicant();
  },
  data: () => ({
    timeIn: '',
    timeOut: '',
    activeIdx: -1,
    attendance: {
      type: [
        'MASUK',
        'KELUAR'
      ]
    }
  }),
  props: [
    "icon"
  ],
  beforeRouteEnter (to, from, next) {
    window.$cookies.get('user_login') ? next() : next({ name: 'login', query: { redirect: 'dashboard' } })
  }
}
</script>