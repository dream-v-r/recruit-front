<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheEntry />
    <TheFooter />
  </div>
</template>

<style></style>
<script>
import TheHeader from '../components/layouts/TheHeader'
import TheFooter from '../components/layouts/TheFooter'
import TheEntry from '../components/layouts/TheEntry'
export default {
  components: { TheEntry, TheFooter, TheHeader }
}
</script>
