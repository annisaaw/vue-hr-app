<template>
  <div class="max-w-4xl md:w-full shadow bg-gray-100 rounded m-4">
    <div class="text-center">
      <div class="p-4 bg-white rounded-t border-b text-center">
        <slot name="titleCard"></slot>
      </div>
      <div class="text-5xl">
        <slot name="contentCard"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      
  }
</script>

<style scoped>

</style>