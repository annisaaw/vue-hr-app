<template>
  <app-back>
    <div class="container max-w-5xl mx-auto">
      <app-nav></app-nav>
      <div class="flex">
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
              <p class="present">8</p><span class="text-gray-400">/100</span>
            </div>
          </template>
        </app-card-mini>
      </div>
      <div class="flex">
        <app-card-medium>
          <template v-slot:titleCard>Upcoming Events</template>
          <template v-slot:contentCard>
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
          </template>
        </app-card-medium>
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
    }
    // totalEmp: () => this.allEmployee.length,
    // femaleEmp: () => console.log(this.allEmployee),
    // maleEmp: () => console.log(this.allEmployee)
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
    //
  }),
  props: [
    "icon"
  ]
}
</script>

<style scoped>

</style>