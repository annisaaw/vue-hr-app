<template>
  <app-back>
    <div class="container max-w-5xl mx-auto">
      <app-nav></app-nav>
      <div class="flex">
        <app-card-mini>
          <template v-slot:titleCard>HAHAH</template>
          <template v-slot:contentCard>777</template>
          <template v-slot:subCard>343 Males/ 434 Females</template>
        </app-card-mini>
        <app-card-mini>
          <template v-slot:titleCard>HAHAH</template>
          <template v-slot:contentCard>
            <div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="w-12 rounded-full h-12 -ml-5 mt-4">
              <img src="https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="w-12 rounded-full h-12 -ml-5 mt-4">
              <img src="https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="w-12 rounded-full h-12 -ml-5 mt-4">
            </div>
          </template>
          <template v-slot:subCard>
            <div class="mt-3">
              5 People
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
          <template v-slot:titleCard>HAHAH</template>
          <template v-slot:contentCard>
            <div class="p-4">
              <table class="table-auto w-full bg-white border text-sm">
                <tr>
                  <td class="px-4 py-2 border-b">
                    <font-awesome-icon :icon="['far', 'calendar-alt']" size="lg" />
                  </td>
                  <td class="px-4 py-2 border-b">
                    <p>29 Februari</p>
                  </td>
                  <td class="px-4 py-2 border-b">
                    <p>Ulang Tahun</p>
                  </td>
                </tr>
              </table>
            </div>
          </template>
        </app-card-medium>
        <app-card-medium>
          <template v-slot:titleCard>HAHAH</template>
          <template v-slot:contentCard>
            <div class="p-4">
              <table class="table-auto w-full bg-white border text-sm">
                <tr>
                  <td class="px-4 py-2 border-b">
                    <font-awesome-icon :icon="['fas', 'user-secret']" size="lg" />
                  </td>
                  <td class="px-4 py-2 border-b">
                    <p>Rino DC</p>
                  </td>
                  <td class="px-4 py-2 border-b">
                    <p>Ulang Tahun</p>
                  </td>
                  <td class="px-4 py-2 border-b">
                    <p>Yeay</p>
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

export default {
  name: 'App',
  components: {
    AppNav: Nav,
    AppBack: Background,
    AppCardMini: MiniCard,
    AppCardMedium: MediumCard
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