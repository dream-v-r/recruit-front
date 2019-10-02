<template>
  <section class="main-section">
    <div class="inner">
      <div class="section-block block">
        <div class="img01">
          <img
            src="~/assets/img/top/section03_img01.jpg"
            alt=""
          >
        </div>
        <div class="img02">
          <img
            src="~/assets/img/top/section03_img02.jpg"
            alt=""
          >
        </div>
        <div class="feature section-feature">
          <SectionMainTitle
            number="03"
            title="event"
            comment="多くの人との出会いの機会を"
            :sp="true"
          />
          <SectionMainFeature
            title="説明会"
            detail="会社説明会を随時開催しています。<br>企業や業界について知りたいことがありましたら<br>お気軽にご参加ください。"
            url="https://www.dream-v.co.jp/recruit/seminar/"
            class="content"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionMainTitle from './SectionMainTitle'
  import SectionMainFeature from './SectionMainFeature'

  export default {
    name: 'SectionMain03',
    components: { SectionMainFeature, SectionMainTitle }
  }
</script>

<style scoped lang="scss">
  .main-section {

    @include _mqmax() {

    }
    > .inner {
      max-width: 1366px;
      margin-right: auto;
      margin-left: auto;
      background-image: url("~assets/img/top/section03_bg_text.png");
      background-position: left bottom 148px;
      padding-bottom: 245px;
      @include _mqmax() {
        padding-bottom: 82px;
        background-size: 79.2%;
        background-position: left bottom 36px;
      }
      > .block {
        margin-left: 183px;
        @include _mqmax() {
          margin: 0;
        }
      }
    }
  }

  .section-block {
    position: relative;
    > .img01 {
      margin-left: auto;
      margin-bottom: 60px;
      width: 60.01690%;
      @include _mqmax() {
        width: 89.55223%;
        margin-left: 0;
        margin-right: auto;
        margin-bottom: 40px;
      }
    }
    > .img02 {
      padding-top: 42px;
      margin-left: 21.978021%;
      width: 60.016906%;
      @include _mqmax() {
        width: 80%;
        margin-left: auto;
        padding-top: 0;
        padding-right: 20px;
      }
    }
    > .feature {
      position: absolute;
      top: -37px;
      left: 0;
      width: 568px;
      @include _mqmax() {
        position: static;
        width: 100%;
        padding-left: 20px;
        margin-top: -27px;
        padding-right: 20px;
      }
    }
  }

  .section-feature {
    .content {
      margin-top: 104px;
      @include _mqmax() {
        margin-top: 40px;
      }
    }
  }
</style>
