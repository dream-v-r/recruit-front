<template>
  <section class="main-section">
    <div class="inner">
      <div class="section-block block">
        <div class="section-inner">
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
            url="/job/newgrads"
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
      max-width: 1366px;
      margin: auto;
    }
  }

  .section-block {
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
      top: -110px;
      left: 51.61054%;
      max-width: 40.42690%;
      @include _mqmax(){
        top: 0;
        position: relative;
        left: 0;
        max-width: 100%;
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
    &::before {
      content: '';
      position: absolute;
      background-image: url("~assets/img/top/section_bg.jpg");
      background-repeat: repeat;
      z-index: -1;
      width: calc(83.089311% + ((100vw - 1366px)/2);
      padding-top: 41.72767%;
      top: -60px;
      left: 0;
      margin-left: 16.398243%;
      @include _mqmax(xl) {
        width: 83.08311%;
      }
      @include _mqmax(){
        width: 73.23943%;
        margin-left: 26.76057%;
        padding-top: 72.666666%;
        top: -10.4%;
      }
    }
    > .img01 {
      /*position: absolute;*/
      max-width: 46.852122%;
      top: 67px;
      @include _mqmax(){
        max-width: 80%;
        top: 9.33333%;
        margin-left: auto;
      }
    }
    > .img02 {
      margin-top: 84px;
      margin-left: 292px;
      max-width: 46.852122%;
      @include _mqmax(){
        max-width: 80%;
        margin-top: 5.333333%;
        margin-left: 0;
        margin-right: auto;
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
