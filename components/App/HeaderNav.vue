<template>
  <nav class="header-nav">
    <ul class="list">
      <HeaderNavItem
        v-for="page in pageList"
        :key="page.id"
        :title1="page.title1"
        :title2="page.title2"
        :url="page.url"
      />
    </ul>
    <ul v-if="hamburger" class="list-sp">
      <HeaderNavItemSp
        v-for="page in pageList"
        :key="page.id"
        :title2="page.title2"
        :url="page.url"
      />
    </ul>
    <AppEntry />
    <AppBtn class="appBtn" />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderNavItem from './HeaderNavItem'
import HeaderNavItemSp from './HeaderNavItemSp'
import AppEntry from './AppEntry'
import AppBtn from './AppBtn'

export default {
  name: 'HeaderNav',
  components: { AppBtn, AppEntry, HeaderNavItem, HeaderNavItemSp },
  computed: {
    ...mapGetters(['pageList', 'hamburger'])
  }
}
</script>

<style scoped lang="scss">
.header-nav {
  display: flex;
  > .list {
    display: flex;
    align-items: center;
    @include _mqmax() {
      display: none;
    }
  }
  > .list-sp {
    display: none;
    @include _mqmax() {
      display: block;
      position: fixed;
      top: 50px;
      width: 100%;
      left: 0;
      background-color: $mainColor;
      padding: 62px 0;
    }
  }
  > .entry-link {
    width: 194px;
    @include _mqmax() {
      width: 55px;
    }
  }
  .appBtn {
    display: none;
    @include _mqmax() {
      display: block;
    }
  }
}
</style>
