<template>
  <li class="nav-item">
    <nuxt-link :to="url" class="nav-link">
      <div class="title2">{{ title2 }}</div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'FooterNavItem',
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
  font-size: 10px;
  color: #ccc;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
