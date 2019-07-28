<template>
  <main>
    <div class="top-main">
      <div class="news">
      <TheNews />
      </div>
      <SectionMain class="section" />
      <TheColumnBanner class="banner" />
      <TheGallery class="gallery" />
    </div>
  </main>
</template>

<script>
  import SectionMain from '../components/Top/SectionMain'
  import TheColumnBanner from '../components/layouts/TheColumnBanner'
  import TheGallery from '../components/layouts/TheGallery'
  import TheNews from '../components/layouts/TheNews'

  export default {
    components: { TheNews, TheGallery, TheColumnBanner, SectionMain }
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
      @include _mqmax() {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
</style>
