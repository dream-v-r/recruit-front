<template>
  <section class="key-visual">
    <div class="inner">
      <h1 class="title">
        先輩社員インタビュー
      </h1>
      <span class="ruby">INTERVIEW</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .key-visual {
    background: url("~assets/img/people/detail/key_detail_pc.jpg") center center;
    background-size: cover;
    height: 530px;
    @include _mqmax(){
      background: url("~assets/img/people/detail/key_detail_sp.jpg") center center;
      background-size: cover;
      height: 420px;
    }
    .inner {
      padding: 170px 0 0;
      text-align: center;
      @include _mqmax(){
        padding: 120px 0 0;
      }
      .title {
        color: #FFF;
        font-size: 32px;
        margin: 0 0 20px;
        @include _mqmax(){
          font-size: 30px;
          margin: 0 0 16px;
        }
      }
      .ruby {
        color: #FFF;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: .05em;
        @include _mqmax(){
          font-size: 16px;
          margin: 0 0 46px;
        }
      }
    }
  }
</style>