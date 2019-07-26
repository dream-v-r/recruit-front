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

<style scoped lang="scss">
  .base-btn {
    color: #fff;
    background-color: #f58a00;
    font-size: 15px;
    border-radius: 30px;
    padding: 14px 0;
    display: block;
    text-align: center;
    text-decoration: none;
    @include _mqmax(){
      font-size: 12px;
      padding: 9px 0;
    }
  }
</style>
