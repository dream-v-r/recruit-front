<template>
  <section class="main-section">
    <div class="inner">
      <div class="section-block block">
        <div class="section-inner">
          <div class="bg"></div>
          <div class="img01">
            <img
              src="~/assets/img/top/section04_img01.jpg"
              alt=""
              class="pc"
            >
            <img
              src="~/assets/img/top/section04_img01_sp.jpg"
              alt=""
              class="sp"
            >
          </div>
          <div class="img02">
            <img
              src="~/assets/img/top/section04_img02.jpg"
              alt=""
              class="pc"
            >
            <img
              src="~/assets/img/top/section04_img02_sp.jpg"
              alt=""
              class="sp"
            >
          </div>
        </div>
        <div class="feature section-feature">
          <SectionMainTitle
            number="04"
            title="Recruit"
            comment="一緒に働ける仲間募集中！"
            class="title"
          />
          <SectionMainFeature
            title="採用情報"
            detail="新卒・中途採用の情報をご紹介します。"
            url="entry"
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
    name: 'SectionMain02',
    components: { SectionMainFeature, SectionMainTitle }
  }
</script>

<style scoped lang="scss">
  .main-section {
    position: relative;
    > .inner {
      max-width: 1596px;
      margin-left: auto;
      > .block {
      }
    }
  }

  .section-block {
    padding-left: 20px;
    background-image: url("~assets/img/top/section04_bg_text.png");
    background-position: left 20px bottom 81px;
    padding-bottom: 160px;
    @include _mqmax(){
      background-size: 75.2%;
      background-position: left 0 bottom 36px;
      padding-bottom: 71px;
      padding-left: 0;
    }
    > .feature {
      position: absolute;
      top: -43px;
      left: 51.75695%;
      width: 625px;
      @include _mqmax(){
        top: 0;
        position: relative;
        left: 0;
        width: 100%;
        margin-top: -3.6%;
        z-index: 2;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }

  .section-inner {
    position: relative;
    > .bg {
      background-image: url("~assets/img/top/section_bg.jpg");
      background-repeat: repeat;
      padding-top: 35.339%;
      width: calc(100% - 230px);
      margin-left: auto;
      @include _mqmax(){
        width: calc(100% - 95px);
        padding-top: 77.6%;
      }
    }
    > .img01 {
      position: absolute;
      max-width: 40.10025%;
      top: 67px;
      @include _mqmax(){
        max-width: 80%;
        top: 9.33333%;
        right: 0;
      }
    }
    > .img02 {
      margin-top: -47px;
      margin-left: 21.22986%;
      max-width: 40.10025%;
      @include _mqmax(){
        position: relative;
        max-width: 80%;
        margin-right: auto;
        margin-left: 0;
        z-index: 2;
        margin-top: -37.13333%;
      }
    }
  }
  .section-feature {
    > .content {
      margin-top: 122px;
      @include _mqmax(){
        margin-top: 30px;
      }
    }
    > .title {
      margin-left: 182px;
      @include _mqmax(){
        margin-left: 0;
      }
    }
  }
</style>
