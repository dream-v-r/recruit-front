<template>
  <section class="main-section">
    <div class="inner">
      <div class="section-block block">
        <div class="section-inner">
          <div class="bg"></div>
          <div class="img01">
            <img
              src="~/assets/img/top/section02_img01.jpg"
              alt=""
            >
          </div>
          <div class="img02">
            <img
              src="~/assets/img/top/section02_img02.jpg"
              alt=""
            >
          </div>
        </div>
        <div class="feature section-feature">
          <SectionMainTitle
            number="02"
            title="Culture"
            comment="社員の笑顔の源。社員の声から生まれる"
            class="title"
          />
          <SectionMainFeature
            title="福利厚生・社風"
            detail="大手IT企業にも負けない様々な福利厚生や<br>社員サポートを行っております。"
            url="culture"
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
    background-image: url("~assets/img/top/section02_bg_text.png");
    background-position: left 20px bottom 55px;
    padding-bottom: 121px;
    @include _mqmax(){
      background-size: 75.2%;
      background-position: left 0 bottom 36px;
      padding-bottom: 71px;
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
        margin-top: -9.85915%;
        z-index: 2;
      }
    }
  }

  .section-inner {
    position: relative;
    > .bg {
      background-color: beige;
      padding-top: 35.339%;
      width: calc(100% - 230px);
      margin-left: auto;
      @include _mqmax(){
        width: calc(100% - 95px);
        padding-top: 77.18309%;
      }
    }
    > .img01 {
      position: absolute;
      max-width: 40.10025%;
      top: 67px;
      @include _mqmax(){
        max-width: 84.50704%;
        top: 12%;
      }
    }
    > .img02 {
      margin-top: -47px;
      margin-left: 21.22986%;
      max-width: 18.9223%;
      @include _mqmax(){
        position: relative;
        max-width: 31.40845%;
        margin-left: auto;
        margin-right: 20px;
        z-index: 2;
        margin-top: -22.53521%;
    }
    }
  }
  .section-feature {
    > .content {
      margin-top: 122px;
      margin-left: -8.052708%;
      @include _mqmax(){
        margin-top: 30px;
        margin-left: 0;
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
