<template>
  <div class="feature-content content">
    <h3 class="title">
      {{title}}
    </h3>
    <p class="detail" v-html="detail"></p>
    <SectionMainBtn
      :url="url"
      class="btn"
    />
  </div>
</template>

<script>
  import SectionMainBtn from './SectionMainBtn'

  export default {
    name: 'SectionMainFeature',
    components: { SectionMainBtn },
    props: {
      title: {
        type: String,
        default: ''
      },
      detail: {
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
  .section-feature {

    .content {
      margin-top: 104px;

      @include _mqmax() {
        margin-top: 40px;
      }
    }
  }

  .feature-content {

    > .title {
      font-size: 24px;

      @include _mqmax() {
        font-size: 20px;
      }
    }
    > .detail {
      margin-top: 14px;
      font-size: 15px;

      @include _mqmax() {
        font-size: 14px;
      }
    }
    > .btn {
      margin-top: 38px;
      max-width: 205px;

      @include _mqmax() {
        margin-top: 17px;
        margin-left: auto;
        max-width: 156px;
      }
    }
  }
</style>
