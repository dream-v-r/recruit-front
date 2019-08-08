<template>
  <div class="feature-content">
    <SectionMainBtn
      :url="url"
      class="btn"
    />
  </div>
</template>

<script>
  import SectionMainBtn from './SystemBtn'

  export default {
    name: 'SystemFeature',
    components: { SectionMainBtn },
    props: {
      url: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">

  .feature-content {
    > .btn {
      max-width: 320px;
      margin: 0 auto;
      @include _mqmax() {
        margin-top: 17px;
        margin-left: auto;
        max-width: 250px;
      }
    }
  }
</style>
