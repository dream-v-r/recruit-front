<template>
  <section class="key-visual">
    <div class="inner">
      <h1 class="title">
        サイトマップ
      </h1>
      <span class="ruby">SITE MAP</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .key-visual {
    background: url("~assets/img/message/mainvisual_bg.png") center center;
    height: 340px;
    text-align: center;
    position: relative;
    @include _mqmax(){
      background: url("~assets/img/message/mainvisual_bg.png") center center;
      height: 250px;
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
        padding: 114px 0 0;
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
