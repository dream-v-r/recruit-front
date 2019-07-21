<template>
  <nav class="footer-nav">
    <ul class="nav-list">
      <FooterNavItem
        v-for="page in pageList"
        :key="page.id"
        :title2="page.title2"
        :url="page.url"
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
}
.nav-list {
  display: flex;
  align-items: center;
  > .nav-item {
    margin: 0 0 0 40px;
  }
}
</style>
