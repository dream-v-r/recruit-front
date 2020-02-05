<template>
  <div v-scroll="handleScroll">
    <TheHeader :class="{isFixed: isFixed}" :style="{ left: positionLeft }" />
    <nuxt/>
    <TheGallery/>
    <TheEntry/>
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from '../components/layouts/TheHeader'
  import TheFooter from '../components/layouts/TheFooter'
  import TheGallery from '../components/layouts/TheGallery'
  import TheEntry from '../components/layouts/TheEntry'

  export default {
    components: { TheEntry, TheGallery, TheFooter, TheHeader },
    data() {
      return {
        offsetY: 0,
        offsetX: 0,
        isFixed: false
      }
    },
    computed: {
      positionLeft() {
        return `-${this.offsetX}px`
      }
    },
    mounted() {
      this.offsetY = 300
    },
    methods: {
      handleScroll: function() {
        this.offsetX = window.scrollX;
        if (this.offsetY < window.scrollY) {
          this.isFixed = true
        } else {
          this.isFixed = false
        }
      }
    }
  }
</script>
