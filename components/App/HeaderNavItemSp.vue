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
    name: 'HeaderNavItemSp',
    props: {
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
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 10px 0;
    color: #fff;
    > .title2 {
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 0.2em;
    }
  }
}
</style>
