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
    <transition name="fade">
      <ul
        v-if="hamburger"
        class="listSp"
      >
        <HeaderNavItemSp
          v-for="page in pageList"
          :key="page.id"
          :title2="page.title2"
          :url="page.url"
        />
      </ul>
    </transition>
    <AppEntry class="entry " />
	<AppCareerEntry class="entry " />
    <AppBtn class="appBtn" />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderNavItem from './HeaderNavItem'
import HeaderNavItemSp from './HeaderNavItemSp'
import AppEntry from './AppEntry'
import AppCareerEntry from './AppCareerEntry'
import AppBtn from './AppBtn'

export default {
  name: 'HeaderNav',
  components: { AppBtn, AppEntry, AppCareerEntry, HeaderNavItem, HeaderNavItemSp },
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
  > .listSp {
    display: none;
    @include _mqmax() {
      display: block;
      position: fixed;
      top: 54px;
      width: 100%;
      left: 0;
      background-color: $mainColor;
      padding: 62px 0;
      z-index: 1;
    }
  }
  > .entry {
    width: 120px;
    @include _mqmax() {
      width: 75px;
      height: 55px;
    }
  }
  .appBtn {
    display: none;
    @include _mqmax() {
      display: block;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
