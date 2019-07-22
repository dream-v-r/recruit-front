<template>
  <li class="nav-item">
    <nuxt-link
      :to="url"
      class="link"
    >
      <div class="title2">
        {{ title2 }}
      </div>
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
.nav-item {
  > .link {
    font-size: 10px;
    color: #ccc;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    @include _mqmax() {
      font-size: 14px;
      padding: 10px 0;
      display: block;
    }
  }
}
</style>
