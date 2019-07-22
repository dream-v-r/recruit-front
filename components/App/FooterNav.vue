<template>
  <nav class="footer-nav">
    <ul class="nav-list">
      <FooterNavItem
        v-for="page in pageList"
        :key="page.id"
        :title2="page.title2"
        :url="page.url"
        class="item"
      />
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import FooterNavItem from './FooterNavItem'
export default {
  name: 'FooterNav',
  components: { FooterNavItem },
  computed: {
    ...mapGetters(['pageList'])
  }
}
</script>

<style scoped lang="scss">
.footer-nav {
  display: flex;
  @include _mqmax() {
    display: block;
    width: 100%;
    text-align: center;
  }
}
.nav-list {
  display: flex;
  align-items: center;
  @include _mqmax() {
    display: block;
  }
  > .item {
    margin-bottom: 40px;
    @include _mqmax(){
      margin-bottom: 16px;
    }
  }
}
</style>
