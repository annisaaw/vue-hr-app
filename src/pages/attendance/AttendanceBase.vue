<template>
  <app-back>
    <div class="bg-black-alt font-sans leading-normal tracking-normal">
      <app-nav></app-nav>
			<h1 class="text-3xl text-white ml-4 mt-4">Attendance</h1>
			<div class="w-full text-center overflow-y-auto max-h-75" >
				<div class="flex border-gray-200 border-b-none flex-wrap">
					<div class="flex justify rounded" v-for="(item, idx) in menu" :key="idx" @click="activeIdx=idx">
						<a href="#" class="bg-white hover:bg-gray-100 p-5 text-md text-black mr-1" :class="{ 'bg-gray-300' : activeIdx === idx }">{{ item.name }}</a>
					</div>
				</div>
			</div>
      <div class="w-full text-center overflow-y-auto max-h-75" >
				<div class="flex p-6 border-l border-r border-t flex-wrap sticky top-0 bg-gray-300 z-10">
						<div class="items-center w-2/12 text-left">Employee / Date</div>
						<div v-for="(item, idx) in dateAttendance()" :key="idx" class="flex items-center justify-center w-2/12 px-2">
							<div class="font-bold">
								<p>{{ item }}</p>
							</div>
						</div>
				</div>
				<!-- start: list employee of attendance -->
				<div v-for="(item, idx) in listEmployee" :key="idx">
					<div class="flex p-6 border-b-4 border-gray-400 hover:bg-gray-100 flex-wrap sticky top-0 bg-white z-10">
						<!-- start: user column -->
						<div class="items-center w-2/12 text-left">{{item.name}}</div>
						<!-- end: user column -->
						<!-- <p>{{listAttendance.length}}</p> -->
						<div class="flex items-center justify-center w-2/12 px-2" v-for="att in listAttendance.slice(-5).reverse()" :key="att.date">
							<span class="font-bold" v-if="activeIdx" :class="getClockOut(att.date, item.id) == '-' ? 'text-red-500' : 'text-green-500'"> {{ getClockOut(att.date, item.id) }} </span>
							<span class="font-bold" v-else :class="getClockIn(att.date, item.id) == '-' ? 'text-red-500' : 'text-green-500'"> {{ getClockIn(att.date, item.id) }} </span>
						</div>
					</div>
				</div>
				<!-- end: list employee of attendance -->
      </div>
		</div>
  </app-back>
</template>

<script>
import Nav from '../../components/Navigasi'
import Background from '../../components/Background'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AppNav: Nav,
    AppBack: Background,
  },
  data: () => ({
		activeIdx: 0,
    menu: [
			{ name: 'Clock In'},
			{ name: 'Clock Out'}
		],
		hasClockIn: false,
		hasClockOut: false,
		dataReady: false,
	}),
	methods: {
		...mapActions({
			fetchAttendance: 'attendance/fetchAttendance',
			fetchAttendanceTime: 'attendance/attendanceTime'
		}),
		dateLegalFormat() {
			return this.intlDateTimeFormat[0]+'-'+this.intlDateTimeFormat[1]+'-'+this.intlDateTimeFormat[2];
		},
		getClockIn(date, id){
			return this.listAttendance.find(ob=>ob.date === date).data.find(d=>d.id == id) && this.listAttendance.find(ob=>ob.date === date).data.find(d=>d.id == id).clock_in ? this.listAttendance.find(ob=>ob.date === date).data.find(d=>d.id == id).clock_in : '-'
		},
		getClockOut(date, id) {
			// return this.listAttendance.find(ob=>ob.date === date)
			return this.listAttendance.find(ob=>ob.date === date).data.find(d=>d.id == id) &&this.listAttendance.find(ob=>ob.date === date).data.find(d=>d.id == id).clock_out ? this.listAttendance.find(ob=>ob.date === date).data.find(d=>d.id == id).clock_out : '-'
		}, 
		clockIn(){
			if(!this.getSelfAttd.clock_out){
				let parseData = [];
				console.log(this.getTodayId, 'ID')
				for(let i=0;i<this.getTodayId.data.length;i++){
					let temp = { 
						id: this.getTodayId.data[i].id,
						clock_in: this.getTodayId.data[i].clock_in,
						clock_out: this.getTodayId.data[i].id == this.$cookies.get('local_login') ? this.getHoursNow() : this.getTodayId.data[i].clock_out
					}
					parseData.push(temp);
				}
				let star = {
					id: this.getTodayId.id,
					item: {
						date: this.dateLegalFormat(),
						data: parseData
					}
				}
				this.hasClockOut = this.getHoursNow();
				this.updateClockOut(star);
			}
		},
		clockOut(){
			if(!this.getSelfAttd.clock_out){
				let parseData = [];
				for(let i=0;i<this.getTodayId.data.length;i++){
					let temp = { 
						id: this.getTodayId.data[i].id,
						clock_in: this.getTodayId.data[i].clock_in,
						clock_out: this.getTodayId.data[i].id == this.$cookies.get('local_login') ? this.getHoursNow() : this.getTodayId.data[i].clock_out
					}
					parseData.push(temp);
				}
				let fix = {
					id: this.getTodayId.id,
					doto: {
							date: this.dateLegalFormat(),
							data: parseData
					}
				}
			this.hasClockOut = this.getHoursNow();
			this.updateClockOut(fix);
			}
		},
		dateAttendance() {
			if (!this.listAttendance) return;
			let source = this.listAttendance;
			let res = [];
			source.forEach(e => {
				res.push(e.date)
			});
			// console.log(res.length, 'LENGTH');
			if (res.length >= 5) {
				res = res.reverse().slice(0, 5)
			}
			return res.values();
		}
	},
	computed: {
		...mapGetters({
			listEmployee: 'employee/listEmployee',
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
		getTodayId() {
			return this.listAttendance.find(a => a.date === this.dateLegalFormat())
		},
		getOutToday(){
			return this.leaveReaquest.filter(a => a.leave_date.includes(this.dateLegalFormat()) && a.status === 1)
		},
		getSelfAttd(){
			// console.log(this.listAttendance.find(a => a.date === this.dateLegalFormat()), 'HOOH')
			return this.listAttendance.find(a => a.date === this.dateLegalFormat()) ? this.listAttendance.find(a => a.date === this.dateLegalFormat()).data.find(b => b.id == this.$cookies.get('local_login')) : '';
		},

	},
	watch: {
		attendanceList(){
			if(this.listAttendance.find(ob=>ob.date === this.dateLegalFormat())) this.dataReady = true;
			this.todayPresents = this.listAttendance.filter(ob=>ob.date === this.dateLegalFormat())[0] ? this.listAttendance.filter(ob=>ob.date === this.dateLegalFormat())[0].data.filter(d=>d.clock_in != "").length : 0
		}
	},
	async created() {
		await this.fetchAttendanceTime();
		await this.fetchAttendance();
	},
  props: [
    "icon"
  ],
  beforeRouteEnter (to, from, next) {
    window.$cookies.get('user_login') ? next() : next({ name: 'login', query: { redirect: 'attendance' } })
  }
}
</script>
