<template>
  <nuxt-link
    :to="url"
    class="base-btn"
  >
    {{ title }}
  </nuxt-link>
</template>

<script>
  export default {
    name: 'BaseBtn',
    props: {
      title: {
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

<style scoped>
  .base-btn {
    color: #fff;
    background-color: #f58a00;
    font-size: 15px;
    border-radius: 30px;
    padding: 14px 0;
    display: block;
    text-align: center;
    text-decoration: none;
  }
</style>
