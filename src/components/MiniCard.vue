<template>
  <div class="max-w-2xl md:w-full shadow bg-gray-100 rounded m-4 border-t-4 border-yellow-500">
    <div class="text-center">
      <div class="p-4 bg-white rounded-t border-b text-center font-bold">
        <slot name="titleCard"></slot>
      </div>
      <div class="text-5xl border-t-4">
        <slot name="contentCard"></slot>
      </div>
      <div class="text-gray-500 pb-4">
        <slot name="subCard"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      
  }
</script>

<style lang="scss" scoped>

</style>