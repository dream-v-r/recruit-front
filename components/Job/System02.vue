<template>
  <section class="training">
    <div class="title">
      <h3>
        研修制度
        <span class="ruby">
          <img
            src="~/assets/img/job/ttl_ruby_training.png"
            alt="Training system"
          >
        </span>
      </h3>
    </div>
    <div class="inner">
      <p>入社から初配属までの流れ</p>
      <span>(ネットワークエンジニア編)</span>

      <ol class="flow">
        <li class="flowItem flowItem--01">
          <div class="content">
            <span class="stage">入社</span>
            <h3>
              まずは、ビジネスマナーに始まり、専門用語・ネットワークの仕組み
            </h3>
            <p>・運用に欠かせない“コマンド”の使い方などを学習</p>
          </div>
        </li>
        <li class="flowItem flowItem--02">
          <div class="content">
            <span class="stage">１ヵ月</span>
            <h3>
              実機を使った講義では、現場をよく知る先輩が講師となり、<br>実際のサーバーやネットワーク機器を触りながら<br>実践的な内容を学んでいきます。
            </h3>
          </div>
          <div class="point">
            <p>社内チャットなどを利用して、<br>いろいろな先輩からさまざまなアドバイスをもらえますよ。</p>
          </div>
        </li>
        <li class="flowItem flowItem--03">
          <div class="content">
            <span class="stage">２ヵ月</span>
            <h3>
              ネットワークエンジニアの登竜門である『CCENT』の資格に挑戦！
            </h3>
          </div>
          <div class="point">
            <p>これまで100％取得できているので、ご安心ください。</p>
          </div>
        </li>
        <li class="flowItem flowItem--04">
          <div class="content">
            <span class="stage">３ヵ月</span>
            <h3>
              いよいと初現場。配属後も1年間は3年以上の経験をもつ先輩が、<br>あなた専属のトレーナーとしてつくので、なんでも<br>わからないことを相談できますよ。
            </h3>
          </div>
          <div class="point">
            <p>eラーニングや有志の「勉強会」なども開催、<br>スキルアップのチャンスは豊富です。</p>
          </div>
        </li>
      </ol>

    </div>
  </section>
</template>

<style scoped lang="scss">
  .training {
    background: url(~assets/img/job/bg_training_pc.jpg) repeat;
    padding: 0 0 60px;
    .title {
      background: url(~assets/img/job/bg_training_ttl_pc.jpg) no-repeat center center;
      background-size: cover;
      height: 160px;
      padding: 60px 0 0;
      @include _mqmax(){
        background: url(~assets/img/job/bg_training_ttl_sp.jpg) no-repeat center center;
        background-size: cover;
        height: 130px;
        padding: 40px 0 0;
      }
      h3 {
        color: #FFF;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        width: 300px;
        margin: 0 auto;
        @include _mqmax(){
          font-size: 25px;
        }
        .ruby {
          display: block;
          width: 228px;
          margin: -26px -100px 0 auto;
          @include _mqmax(){
            margin: -20px -30px 0 auto;
          }
        }
      }
    }
    .inner {
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 0 0;
      @include _mqmax(){
        max-width: 90%;
      }
      > p {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.8;
        text-align: center;
        @include _mqmax(){
          font-size: 18px;
        }
      }
      > span {
        display: block;
        font-size: 14px;
        line-height: 1.8;
        text-align: center;
        margin: 0 0 30px;
        @include _mqmax(){
          font-weight: bold;
          font-size: 18px;
        }
      }
      .flow {
        margin: 0 auto 60px;
        max-width: 880px;
        @include _mqmax(){
          margin: 0 auto 54px;
        }
        &Item {
          background: #FFF;
          box-shadow: 0px 0px 8px 0px #CCC;
          max-width: 880px;
          margin: 0 0 100px;
          padding: 0 0 50px;
          position: relative;
          &:after {
            background: url(~assets/img/job/ico_arrow.png) no-repeat;
            content: "";
            display: block;
            width: 92px;
            height: 100px;
            position: absolute;
            bottom: -78px;
            left: 50%;
            margin: 0 0 0 -46px;
            @include _mqmax(){
              background: url(~assets/img/job/ico_arrow_sp.png) no-repeat;
              background-size: 100%;
              width: 46px;
              height: 50px;
              bottom: -42px;
              margin: 0 0 0 -23px;
            }
          }
          @include _mqmax(){
            box-shadow: 0px 0px 4px 0px #CCC;
            padding: 106px 0 40px;
            margin: 0 0 54px;
          }
          .content {
            max-width: 620px;
            margin: 0 0 0 260px;
            padding: 40px 40px 0 0;
            @include _mqmax(){
              margin: 0;
              padding: 0 20px;
            }
            .stage {
              background: url(~assets/img/job/line_stage_bottom.png) no-repeat bottom left;
              color: #029ae4;
              font-size: 24px;
              font-weight: bold;
              display: block;
              padding: 0 0 16px;
              margin: 0 0 26px;
              @include _mqmax(){
                background: url(~assets/img/job/line_stage_bottom.png) no-repeat bottom center;
                font-size: 20px;
                text-align: center;
              }
            }
            h3 {
              font-size: 18px;
              line-height: 1.8;
              margin: 0 0 10px;
              @include _mqmax(){
                font-size: 15px;
              }
            }
            > p {
              font-size: 14px;
              line-height: 1.8;
              @include _mqmax(){
                font-size: 15px;
              }
            }
          }
          .point {
            background: #edf8fd;
            max-width: 760px;
            margin: 30px auto 0;
            position: relative;
            display: flex;
            @include _mqmax(){
              width: calc(100% - 40px);
              display: block;
            }
            &:before {
              background: linear-gradient(to right, #0275ae, #1445a3);
              content: "POINT";
              color: #FFF;
              display: flex;
              font-size: 20px;
              font-weight: bold;
              width: 130px;
              text-align: center;
              align-items: center;
              padding: 0 0 0 40px;
              @include _mqmax(){
                font-size: 15px;
                width: 100%;
                display: block;
                padding: 0;
                height: 42px;
                line-height: 42px;
              }
            }
            &:after {
              background: linear-gradient(to top left, rgba(20,69,163,0) 50%, #1445a3 50.5%) no-repeat top left/100% 100%;
              content: "";
              display: block;
              width: 40px;
              height: 100%;
              position: absolute;
              top: 0;
              left: 130px;
              @include _mqmax(){
                content: none;
              }
            }
            p {
              font-size: 16px;
              line-height: 1.7;
              padding: 20px 0;
              width: calc(100% - 190px);
              margin: 0 0 0 60px;
              @include _mqmax(){
                width: 100%;
                margin: 0;
                padding: 20px;
                font-size: 14px;
              }
            }
          }
          &--01 {
            background: #FFF url(~assets/img/job/num_training_01.png) no-repeat top 50% left 40px;
            @include _mqmax(){
              background: #FFF url(~assets/img/job/num_training_01.png) no-repeat top 20px left 50%;
              background-size: 97px;
            }
          }
          &--02 {
            background: #FFF url(~assets/img/job/num_training_02.png) no-repeat top 50px left 40px;
            @include _mqmax(){
              background: #FFF url(~assets/img/job/num_training_02.png) no-repeat top 20px left 50%;
              background-size: 97px;
            }
          }
          &--03 {
            background: #FFF url(~assets/img/job/num_training_03.png) no-repeat top 50px left 40px;
            @include _mqmax(){
              background: #FFF url(~assets/img/job/num_training_03.png) no-repeat top 20px left 50%;
              background-size: 97px;
            }
            .point {
              margin: 60px auto 0;
              @include _mqmax(){
                margin: 30px auto 0;
              }
            }
          }
          &--04 {
            background: #FFF url(~assets/img/job/num_training_04.png) no-repeat top 50px left 40px;
            @include _mqmax(){
              background: #FFF url(~assets/img/job/num_training_04.png) no-repeat top 20px left 50%;
              background-size: 97px;
            }
            &:after {
              content: none;
            }
          }
        }
      }
    }
  }
</style>
