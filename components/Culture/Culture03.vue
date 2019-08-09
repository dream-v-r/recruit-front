<template>

  <section class="training">
    <div class="inner">
      <div class="title">
        <h3>
          しっかり！研修制度
        </h3>
      </div>
      <ul class="trainingTile">
        <li class="trainingTileItem trainingTileItem--cate01">
          <span class="iconBox" />
          <h3>
            トレーナー制度
          </h3>
          <p>豊富な経験を持つ先輩写真がチャットワーク等を使いプロジェクトの実状に沿ったきめ細やかな指導を行います。色々な問題に直面した時スピード感を持って相談できるので安心感があると好評です。</p>
        </li>
        <li class="trainingTileItem trainingTileItem--cate02">
          <span class="iconBox" />
          <h3>
            eラーニング研修
          </h3>
          <p>未経験でもスキル向上をバックアップしており、HTML、CSS、Javascript、PHP、Java、制作などに関するEラーニングを無料で受講することが可能です。PCだけではなくタブレットがあれば気軽に受講できる為、利用者は業務前や業務後の時間を有効に活用しています。</p>
        </li>
        <li class="trainingTileItem trainingTileItem--cate03">
          <span class="iconBox" />
          <h3>
            外部講師・社内セミナー
          </h3>
          <p>ビジネスやその他専門分野の第一線で活躍する方を講師としてお招きし、不定期で社内セミナーを開催しています。スキルアップ・ヒューマンスキルアップだけではなく、モチベーションアップにもつながっています。</p>
        </li>

      </ul>
    </div>
  </section>

</template>

<style scoped lang="scss">

  .training {
    background: url(~assets/img/culture/bg_training.jpg) repeat;
    padding: 0 0 160px;
    @include _mqmax(){
      padding: 0 0 80px;
    }
    .inner {
      max-width: 1000px;
      margin: 0 auto;
      padding: 1px 0 0;
      @include _mqmax(){
        max-width: 90%;
      }
      .title {
        margin: -35px 0 50px;
        @include _mqmax(){
          margin: -24px 0 0;
        }
        h3 {
          background: #FFF;
          border-bottom: 4px solid #029ae4;
          width: 364px;
          margin: 0 auto;
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          line-height: 70px;
          height: 70px;
          position: relative;
          &:before {
            content: "";
            position: absolute;
            bottom: -22px;
            left: 50%;
            margin-left: -15px;
            border: 12px solid transparent;
            border-top: 12px solid #FFF;
            z-index: 2;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: -30px;
            left: 50%;
            margin-left: -17px;
            border: 14px solid transparent;
            border-top: 14px solid #029ae4;
            z-index: 1;
          }
          @include _mqmax(){
            font-size: 20px;
            line-height: 48px;
            height: 48px;
            width: 200px;
            border-bottom: 2px solid #029ae4;
            &:before {
              bottom: -11px;
              margin-left: -6px;
              border: 6px solid transparent;
              border-top: 6px solid #FFF;
              z-index: 2;
            }
            &:after {
              bottom: -14px;
              margin-left: -6px;
              border: 6px solid transparent;
              border-top: 6px solid #029ae4;
              z-index: 1;
            }
          }
        }
      }
      .trainingTile {
        overflow: hidden;
        padding: 80px 0 0;
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 60px;
        @include _mqmax(){
          display: block;
          margin: 0 0 40px;
        }
        &Item {
          background: #FFF;
          border: 2px solid #029ae4;
          margin: 0 3.5% 0 0;
          width: 31%;
          padding: 80px 30px 30px;
          position: relative;
          &:nth-child(3n) {
            margin: 0;
          }
          @include _mqmax(){
            width: 100%;
            margin: 0 0 75px;
            padding: 70px 20px 20px;
          }
          .iconBox {
            background: #029ae4;
            border-radius: 64px;
            display: block;
            position: absolute;
            width: 128px;
            height: 128px;
            top: -80px;
            left: 50%;
            margin: 0 0 0 -64px;
            @include _mqmax(){
              width: 98px;
              height: 98px;
              margin: 0 0 0 -49px;
              top: -49px;
            }
            &:before  {
              content: "";
              display: block;
            }
            &:after {
              content: "";
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 10px 5px 0 5px;
              border-color: #0299e4 transparent transparent transparent;
              position: absolute;
              bottom: -9px;
              left: 50%;
              margin: 0 0 0 -5px;
            }
          }
          h3 {
            color: #029ae4;
            font-size: 20px;
            text-align: center;
            margin: 0 0 30px;
            &.mb {
              margin: 0 0 52px;
            }
            &.lines {
              margin: 0 0 20px;
              &2 {
                margin: 0 0 4px;
              }
            }
            @include _mqmax(){
              font-size: 25px;
              margin: 0 0 20px;
            }
            span {
              display: block;
              font-size: 15px;
              text-align: center;
            }
          }
          p {
            font-size: 14px;
            line-height: 1.8;
            text-align: justify;
            @include _mqmax(){
              font-size: 15px;
            }
          }
          &--cate01 {
            .iconBox {
              &:before {
                background: url(~assets/img/culture/welfare/ico_welfare_13.svg) no-repeat;
                width: 74px;
                height: 74px;
                margin: 27px auto 0;
                @include _mqmax(){
                  width: 52px;
                  height: 53px;
                  margin: 22px auto 0;
                }
              }
            }
          }
          &--cate02 {
            .iconBox {
              &:before {
                background: url(~assets/img//culture/welfare/ico_welfare_14.svg) no-repeat;
                width: 72px;
                height: 68px;
                margin: 30px auto 0;
                @include _mqmax(){
                  width: 54px;
                  height: 50px;
                  margin: 24px auto 0;
                }
              }
            }
          }
          &--cate03 {
            .iconBox {
              &:before {
                background: url(~assets/img/culture/welfare/ico_welfare_15.svg) no-repeat;
                width: 68px;
                height: 68px;
                margin: 30px auto 0;
                @include _mqmax(){
                  width: 44px;
                  height: 44px;
                  margin: 22px auto 0;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
