<template>
  <nav class="site-nav">
    <ul class="list">
      <AppNavItem
        v-for="page in pageList"
        :key="page.id"
        :title1="page.title1"
        :title2="page.title2"
        :url="page.url"
      />
    </ul>
    <AppEntry />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import AppNavItem from './AppNavItem'
import AppEntry from './AppEntry'
export default {
  name: 'AppNav',
  components: { AppEntry, AppNavItem },
  computed: {
    ...mapGetters(['pageList'])
  }
}
</script>

<style scoped lang="scss">
.site-nav {
  display: flex;
  > .list {
    display: flex;
    align-items: center;
  }
  > .entry-link {
    width: 194px;
  }
}
</style>
