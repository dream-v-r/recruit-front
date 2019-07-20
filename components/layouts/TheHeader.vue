<template>
  <header class="site-header">
    <AppLogo />
    <HeaderNav />
  </header>
</template>

<script>
import AppLogo from '../App/AppLogo'
import HeaderNav from '../App/HeaderNav'
export default {
  name: 'TheHeader',
  components: { HeaderNav, AppLogo }
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
