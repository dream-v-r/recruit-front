<template>
  <header class="site-header">
    <AppLogo class="logo" />
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
  position: fixed;
  padding-left: 2.19619%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 1200px;
  top: 0;
  left: 0;
  z-index: 10;
  > .logo {
    padding: 13px 0;
    @include _mqmax() {
      max-width: 136px;
      padding: 6px 0;
    }
  }
}
</style>
