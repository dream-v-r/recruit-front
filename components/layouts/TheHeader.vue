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
  padding-left: 2.19619%;
  background-color: #029ae4;
  display: flex;
  justify-content: space-between;
  > .logo {
    padding: 13px 0;
    @include _mqmax() {
      max-width: 136px;
      padding: 6px 0;
    }
  }
}
</style>
