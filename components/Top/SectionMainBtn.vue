<template>
  <nuxt-link
    :to="url"
    class="section-mainBtn"
  >
    Read More
  </nuxt-link>
</template>

<script>
  export default {
    name: 'SectionMainBtn',
    props: {
      url: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .section-mainBtn {
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
