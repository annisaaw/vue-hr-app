<template>
  <div>
    <a href="#" class="" :class="classes">
      {{ btnTitle }}
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
      }
    },
    props: {
      btnTitle: String,
    },
    computed: {
      classes() {
        let classes = [];
        if (this.isActive) {
          classes.push(' btn btn-link btn-sm mr-1 btn-active')
        }
        else {
          classes.push(' btn btn-link btn-sm mr-1')
        } 
        return classes;
      }
    }
  }
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem
}
.btn-active {
  background-color: #319795
}

</style>