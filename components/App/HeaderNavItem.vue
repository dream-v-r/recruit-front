<template>
  <li class="nav-item">
    <nuxt-link :to="url" class="nav-link">
      <div class="title1">{{ title1 }}</div>
      <div class="title2">{{ title2 }}</div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'HeaderNavItem',
  props: {
    title1: {
      type: String,
      default: ''
    },
    title2: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.nav-link {
  display: block;
  border-left: 2px solid #fff;
  padding: 5px 40px 5px 14px;
  text-decoration: none;
  color: #fff;
  > .title1 {
    font-size: 13px;
  }
  > .title2 {
    font-size: 10px;
  }
}
</style>
