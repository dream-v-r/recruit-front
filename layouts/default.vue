<template>
  <div v-scroll="handleScroll">
    <TheHeader :class="{isFixed: isFixed}"/>
    <nuxt/>
    <TheEntry/>
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from '../components/layouts/TheHeader'
  import TheFooter from '../components/layouts/TheFooter'
  import TheEntry from '../components/layouts/TheEntry'

  export default {
    components: { TheEntry, TheFooter, TheHeader },
    data() {
      return {
        offsetY: 0,
        isFixed: false
      }
    },
    mounted() {
      this.offsetY = 300
    },
    methods: {
      handleScroll: function() {
        if (this.offsetY < window.scrollY) {
          this.isFixed = true
        } else {
          this.isFixed = false
        }
      }
    }
  }
</script>
