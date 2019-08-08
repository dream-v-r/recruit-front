<template>
  <main>
    <div class="top-main">
      <mainVisual class="mainVisual" />
      <div class="news">
        <TheNews />
      </div>
      <SectionMain class="section" />
    </div>
  </main>
</template>

<script>
  import SectionMain from '../components/Top/SectionMain'
  import TheNews from '../components/layouts/TheNews'
  import MainVisual from '../components/Top/MainVisual'

  export default {
    components: { MainVisual, TheNews, SectionMain }
  }
</script>

<style lang="scss" scoped>
  p {
    color: $mainColor;
  }
  .top-main {
    > .section {
      margin-top: 120px;
      border-bottom: 1px solid #999;
      @include _mqmax(){
        margin-top: 50px;
      }
    }
    > .banner {
      border-bottom: 1px solid #999;
    }
    > .news {
      margin-top: -65px;
      position: relative;
      z-index: 1;
      @include _mqmax() {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
</style>
