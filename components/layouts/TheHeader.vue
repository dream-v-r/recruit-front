<template>
  <header class="site-header" :class="{ active: hamburger }">
    <AppLogo class="logo" />
    <HeaderNav />
  </header>
</template>

<script>
import AppLogo from '../App/AppLogo'
import HeaderNav from '../App/HeaderNav'
import { mapGetters } from 'vuex'
export default {
  name: 'TheHeader',
  components: { HeaderNav, AppLogo },
  computed: {
    ...mapGetters(['hamburger'])
  },
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
  transition: .3s;
  @include _mqmax(){
    min-width: 320px;
    &.active {
      background-color: $mainColor;
    }
  }
  > .logo {
    padding: 13px 0;
    @include _mqmax() {
      max-width: 136px;
      padding: 6px 0;
    }
  }
}
</style>
