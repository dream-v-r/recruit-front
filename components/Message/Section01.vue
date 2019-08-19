<template>
  <section class="section01">
    <div class="sec-inner">
      <h2 class="lead">
        <img
          src="~/assets/img/message/section01_lead.png"
          alt="日本一エンジニアにやさしい会社"
        >
      </h2>
      <p class="text">エンジニアが自分の会社・仕事に満足し、自分の会社・仕事に誇りがもてるようになる事ができる環境を日々作る。<br>それがドリームビジョンの最大のミッションです。<br>本気で『日本で一番エンジニアにやさしい会社』を目指し、大手企業にも負けない、<br>様々な福利厚生や新人社員へのトレーナー制度など圧倒的なサポート体制がドリームビジョンには用意されています。<br>エンジニアが働きやすく、更なるスキルアップを実現し、一人一人が高いビジョンを持って<br>成長出来るよう成長して参ります。<br>ぜひご自分のビジョンを実現するために、ご一緒に高みを目指し走り出しましょう!!</p>
      <p class="text-em">「ここが自分の会社なんだ」と誇りに思える場所であるために。</p>
      <h2 class="title">
        <img
          src="~/assets/img/message/section01_title.png"
          alt="TOP MESSAGE"
        >
        <span class="ruby">代表あいさつ</span>
      </h2>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section01 {
    max-width: 1366px;
    color: #333;
    line-height: 1;
    padding: 0 60px;
    margin: 60px auto 123px;
    @include _mqmax(){
      max-width: none;
      padding: 0;
      margin: 0 0 111px;
    }
  }
  .sec-inner {
    text-align: center;
    background-image: url("~assets/img/message/section01_bg.png");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-color: #f7f7f7;
    padding-top: 61px;
    @include _mqmax(){
      text-align: left;
      background-image: none;
      padding: 37px 22px 0;
    }
    .lead {
      margin-bottom: 42px;
      @include _mqmax(){
        margin-bottom: 26px;
      }
    }
    .text {
      font-size: 18px;
      line-height: 2.6666666;
      letter-spacing: -0.02em;
      margin-bottom: 65px;
      @include _mqmax(){
        font-size: 14px;
        line-height: 2;
        letter-spacing: normal;
        margin-bottom: 28px;
      }
    }
    .text-em {
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 0.1em;
      margin-bottom: 31px;
      @include _mqmax(){
        color: #666;
        font-size: 16px;
        line-height: 1.75;
        letter-spacing: normal;
        margin-bottom: 79px;
      }
    }
    .title {
      position: relative;
      bottom: -53px;
      @include _mqmax(){
        text-align: center;
        bottom: -46px;
      }
      .ruby {
        display: block;
        color: $mainColor;
        font-size: 16px;
        padding-top: 20px;
        @include _mqmax(){
          padding-top: 18px;
        }
      }
    }
  }
</style>
