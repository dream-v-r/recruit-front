<template>
  <section class="main-section">
    <div class="inner">
      <div class="section-block block">
        <div class="img01">
          <img
            src="~/assets/img/top/section05_img01.jpg"
            alt=""
            class="pc"
          >
          <img
            src="~/assets/img/top/section05_img01_sp.jpg"
            alt=""
            class="sp"
          >
        </div>
        <div class="feature section-feature">
          <SectionMainTitle
            number="05"
            title="About us"
            comment="雇用創出を通して社会に貢献し会社員の幸福を追求する"
            class="title"
          />
          <SectionMainFeature
            title="会社概要"
            detail="私たちドリームビジョン株式会社の基本情報を<br>ご紹介しています。"
            url="about"
            class="content"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionMainFeature from './SectionMainFeature'
  import SectionMainTitle from './SectionMainTitle'
  export default {
    name: 'SectionMain05',
    components: { SectionMainTitle, SectionMainFeature }
  }
</script>

<style scoped lang="scss">
  .main-section {
    > .inner {
      max-width: 1366px;
      margin: auto;
      padding-bottom: 82px;
      @include _mqmax(){
        padding-bottom: 40px;
      }
    }
  }
  .section-block {
    > .feature {
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      margin-top: -33px;
      @include _mqmax(){
        padding-right: 20px;
        padding-left: 20px;
        margin-top: -13px;
      }
    }
  }
  .section-feature {
    .title {
      margin-bottom: 40px;
      @include _mqmax(){
        margin-bottom: 30px;
      }
    }
  }

</style>
