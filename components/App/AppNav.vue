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
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import AppNavItem from './AppNavItem'
export default {
  name: 'AppNav',
  components: { AppNavItem },
  computed: {
    ...mapGetters(['pageList'])
  }
}
</script>

<style scoped></style>
