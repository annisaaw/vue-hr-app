<template>
  <app-back>
    <app-nav></app-nav>
    
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
        <!--start: today's present -->
        <app-card-mini>
          <template v-slot:titleCard>Today's Present</template>
          <template v-slot:contentCard>
            <div class="m-1 flex items-center justify-center">
              <p class="present">{{ todayPresent }}</p><span class="text-gray-400">/ {{ totalEmp() }}</span>
            </div>
          </template>
        </app-card-mini>
        <!-- end: today's present -->
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
            <!-- start: attendance button -->
            <div class="w-full flex mt-1">
              <div class="w-full flex justify-around bg-gray-400" v-if="getSelfAttd">
                <button 
                  class="rounded p-3 m-1 flex items-center justify-center bg-white opacity-75 focus:outline-none" 
                  @click.once="clockIn()" :class="!hasClockIn ? 'bg-green-500':'bg-grey-300'">Clock In</button>
                <button 
                  class="rounded p-3 m-1 flex items-center justify-center bg-white opacity-75 focus:outline-none" 
                  @click.once="clockOut()" :class="!hasClockOut ? 'bg-green-500':'bg-grey-300'">Clock Out</button>
              </div>
            </div>
            <!-- end: attendance button -->
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
                  <td class="border-b w-2/5">{{ checkClock(hasClockIn) }}</td>
                  <td class="border-b w-2/5"> {{ checkClock(hasClockOut) }} </td>
                </tr>
              </table>
              <div v-if="!getSelfAttd">
                <p class="text-center mt-2 bg-yellow-500">Start tommorow for attendance</p>
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
      fetchApplicant: 'applicant/fetchApplicant',
      syncClockIn: 'attendance/syncClockIn',
      syncClockOut: 'attendance/syncClockOut',
			fetchAttendanceTime: 'attendance/attendanceTime'
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
      let time = today.getHours() + ':' + today.getMinutes();
      return idx ? (this.clockOut = time) : (this.clockIn = time);
    },
    addZero(x) {
      return x < 10 ? "0" + x : x;
    },
    getTimeNow() {
      let d = new Date();
      let h = this.addZero(d.getHours());
      let m = this.addZero(d.getMinutes());
      let s = this.addZero(d.getSeconds());
      return h + ":" + m + ":" + s;
    },
    dateLegalFormat() {
			return this.intlDateTimeFormat[0]+'-'+this.intlDateTimeFormat[1]+'-'+this.intlDateTimeFormat[2];
    },
    clockIn() {
      if (!this.getSelfAttd.clock_in && !this.getSelfAttd.clock_out) {
        let box = [];
        let today = this.getTodayId.data;
        today.forEach(ob => {
          let temp = {
            id: ob.id,
            clock_in: ob.id == this.$cookies.get('user_login') ? this.getTimeNow() : ob.clock_in,
            clock_out: ob.clock_out
          }
          box.push(temp)
        });
        let cup = {
          id: this.getTodayId.id,
          timeIn: {
            date: this.dateLegalFormat(),
            data: box
          }
        }
        this.hasClockIn = this.getTimeNow();
        this.$router.push('attendance');
        console.log(cup, 'clock-in');
        this.todayPresent++;
        this.syncClockIn(cup);
      }
    },
    clockOut() {
      if (!this.getSelfAttd.clock_out || this.getSelfAttd.clock_in) {
        let box = [];
        let today = this.getTodayId.data;
        today.forEach(ob => {
          let temp = {
            id: ob.id,
            clock_in: ob.clock_in,
            clock_out:  ob.id == this.$cookies.get('user_login') ? this.getTimeNow() : ob.clock_out
          }
          box.push(temp)
        });
        let cup = {
          id: this.getTodayId.id,
          timeOut: {
            date: this.dateLegalFormat(),
            data: box
          }
        }
        this.hasClockOut = this.getTimeNow();
        console.log(cup, 'clock-out');
        this.syncClockOut(cup)
      }
    },
    checkClock(a){
      return a ? a : '-';
    },
  },
  computed: {
    ...mapGetters({
      allEmployee: 'employee/listEmployee',
      allEvent: 'event/listEvent',
      allApplicant: 'applicant/listApplicant',
			listAttendance: 'attendance/listAttendance'
    }),
    intlDateTimeFormat(){
			let d = new Date();
			return [
				new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d),
				new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d),
				new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
			]
    },
    getSelfAttd(){
      return this.listAttendance.find(a=>a.date === this.dateLegalFormat()) ? this.listAttendance.find(a=>a.date === this.dateLegalFormat()).data.find(b=>b.id == this.$cookies.get('user_login')) : '';
    },
    getTodayId() {
      return this.listAttendance.find(a=>a.date === this.dateLegalFormat())
    }
  },
  watch: {
    listAttendance() {
      if (this.listAttendance.find(a=>a.date === this.dateLegalFormat())) this.dataReady = true;
    }
  },
  async created() {
    await this.fetchEmployee();
    await this.fetchEvent();
    await this.fetchApplicant();
    await this.fetchAttendanceTime();
    if (!this.getSelfAttd) return
    this.hasClockIn = this.getSelfAttd.clock_in ? this.getSelfAttd.clock_in : false;
    this.hasClockOut = this.getSelfAttd.clock_out ? this.getSelfAttd.clock_out : false;
    this.todayPresent = this.getTodayId.data.filter(a => a.clock_in != "").length
  },
  data: () => ({
    newEmployee: false,
    hasClockIn: false,
    hasClockOut: false,
    dataReady: false,
    activeIdx: -1,
    todayPresent: 0,
    attendance: {
      type: [
        'Clock In',
        'Clock Out'
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