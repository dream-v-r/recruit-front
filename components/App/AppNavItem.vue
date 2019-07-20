<template>
  <li>
    <nuxt-link :to="url">
      <div>{{ title1 }}</div>
      <div>{{ title2 }}</div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'AppNavItem',
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

<style scoped></style>
