<template>
  <section class="site-columnBanner">
    <div class="inner">
      <nuxt-link to="">
        <img src="~/assets/img/banner_column.jpg" alt="Column IT業界やエンジニアの仕事のことなど、ご紹介します。"/>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'TheColumnBanner'
  }
</script>

<style scoped lang="scss">
.site-columnBanner {
  padding-top: 80px;
  padding-bottom: 80px;
  @include _mqmax(){
    padding-top: 39px;
    padding-bottom: 39px;
  }
  .inner {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
