<template>
  <nuxt-link to="entry" class="entry-link">
    <span>entry</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppEntry'
}
</script>

<style scoped>
.entry-link {
  background-color: #f58a00;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
