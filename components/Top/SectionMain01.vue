<template>
  <section class="main-section">
    <div class="inner">
      <div class="section-block block">
        <div class="img01">
          <img
            src="~/assets/img/top/section01_img01.jpg"
            alt=""
          >
        </div>
        <div class="img02">
          <img
            src="~/assets/img/top/section01_img02.jpg"
            alt=""
          >
        </div>
        <div class="img03">
          <img
            src="~/assets/img/top/section01_img03.jpg"
            alt=""
          >
        </div>
        <div class="feature section-feature">
          <SectionMainTitle
            number="01"
            title="people"
            comment="一人一人のキャリアとプライベートを全力で応援"
          />
          <div class="feature-content content">
            <h3 class="title">
              社員紹介
            </h3>
            <p class="detail">
              希望の働き方を実現した社員の声をご紹介。
            </p>
            <SectionMainBtn
              url="people_index"
              class="btn"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionMainTitle from './SectionMainTitle'
  import SectionMainBtn from './SectionMainBtn'
  export default {
    name: 'SectionMain01',
    components: { SectionMainBtn, SectionMainTitle }
  }
</script>

<style scoped lang="scss">
  .main-section {
    padding-bottom: 209px;
    @include _mqmax(){
      padding-bottom: 82px;
    }
    > .inner {
      max-width: 1366px;
      margin-right: auto;
      margin-left: auto;
      background-image: url("~assets/img/top/section01_bg_text.png");
      background-position: left 420px;
      @include _mqmax(){
        padding-right: 20px;
        padding-left: 20px;
      }
      > .block {
        margin-left: 183px;
        @include _mqmax(){
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
      @include _mqmax(){
        width: 89.55223%;
        margin-bottom: 48px;
      }
    }
    > .img02 {
      padding-top: 42px;
      margin-left: 16.56804%;
      width: 29.92392%;
      @include _mqmax() {
        width: 47.46268%;
        margin-left: auto;
        padding: 0;
      }
    }
    > .img03 {
      position: absolute;
      top: 61.08108%;
      right: 21.978022%;
      width: 25.52831%;
      @include _mqmax(){
        top: 22.2%;
        width: 32.83582%;
        right: auto;
        left: 0;
      }

    }
    > .feature {
      position: absolute;
      top: -37px;
      left: 0;
      width: 568px;
      @include _mqmax(){
        position: static;
        width: 100%;
        margin-top: -30px;
        top: 26px;
      }
    }
  }
  .section-feature {
    .content {
      margin-top: 104px;
      @include _mqmax(){
        margin-top: 40px;
      }
    }
  }
  .feature-content {
    > .title {
      font-size: 24px;
      @include _mqmax(){
        font-size: 20px;
      }
    }
    > .detail {
      margin-top: 14px;
      font-size: 15px;
      @include _mqmax(){
        font-size: 14px;
      }
    }
    > .btn {
      margin-top: 38px;
      max-width: 205px;
      @include _mqmax(){
        margin-top: 17px;
        margin-left: auto;
        max-width: 156px;
      }
    }
  }
</style>
