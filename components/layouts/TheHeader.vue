<template>
  <header class="site-header">
    <AppLogo />
    <AppNav />
  </header>
</template>

<script>
import AppLogo from '../App/AppLogo'
import AppNav from '../App/AppNav'
export default {
  name: 'TheHeader',
  components: { AppNav, AppLogo }
}
</script>

<style scoped lang="scss">
.site-header {
  padding: 0 0 0 30px;
  background-color: #029ae4;
  display: flex;
  justify-content: space-between;
  > .site-logo {
    padding: 13px 0;
  }
}
</style>
