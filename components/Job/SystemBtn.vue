<template>
  <nuxt-link
    :to="url"
    class="systemBtn"
  >
    Read More
  </nuxt-link>
</template>

<script>
  export default {
    name: 'SystemBtn',
    props: {
      url: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .systemBtn {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(to right, #0275ae, #1445a3);
    font-size: 13px;
    text-align: center;
    padding: 15px 0;
    border-radius: 30px;
  }
</style>
