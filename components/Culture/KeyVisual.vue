<template>
  <section class="key-visual">
    <div class="inner">
      <h1 class="title">
        福利厚生・社風
      </h1>
      <span class="ruby">CULTURE</span>
      <p>大手IT企業にも負けない様々な福利厚生や社員サポートを行っております。</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .key-visual {
    background: url("~assets/img/culture/bg_keyvisual_pc.jpg") center center;
    background-size: cover;
    height: 500px;
    text-align: center;
    position: relative;
    @include _mqmax(){
      background: url("~assets/img/culture/bg_keyvisual_sp.jpg") center center;
      background-size: cover;
      height: 420px;
    }
    &:after {
      background: #029ae4;
      content: "";
      display: block;
      width: 108px;
      height: 10px;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin: 0 0 0 -54px;
      @include _mqmax(){
        width: 54px;
        height: 5px;
        margin: 0 0 0 -27px;
      }
    }
    .inner {
      padding: 200px 0 0;
      @include _mqmax(){
        padding: 120px 0 0;
      }
      .title {
        color: #FFF;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: .05em;
        margin: 0 0 6px;
        @include _mqmax(){
          font-size: 30px;
        }
      }
      .ruby {
        display: block;
        color: #CCC;
        font-size: 14px;
        font-weight: bold;
        margin: 0 0 20px;
        @include _mqmax(){
          font-size: 16px;
          margin: 0 0 46px;
        }
      }
      p {
        color: #FFF;
        font-size: 15px;
        line-height: 2;
        @include _mqmax(){
          font-size: 18px;
          text-align: left;
          line-height: 1.8;
          width: 90%;
          margin: 0 auto;
        }
      }
    }
  }
</style>
