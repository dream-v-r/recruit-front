<template>
  <div>
    <AppLogo />
    <AppNav />
  </div>
</template>

<script>
import AppLogo from '../App/AppLogo'
import AppNav from '../App/AppNav'
export default {
  name: 'TheHeader',
  components: { AppNav, AppLogo }
}
</script>

<style scoped></style>
