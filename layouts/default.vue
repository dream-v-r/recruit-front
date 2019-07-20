<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<style></style>
<script>
import TheHeader from '../components/layouts/TheHeader'
import TheFooter from '../components/layouts/TheFooter'
export default {
  components: { TheFooter, TheHeader }
}
</script>
