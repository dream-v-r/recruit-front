<template>
  <section class="internal">
    <div class="title">
      <h3>
        社内制度・福利厚生
        <span class="ruby">
          <img
            src="~/assets/img/job/ttl_ruby_internal.png"
            alt="Internal system Welfare"
          >
        </span>
      </h3>
    </div>
    <div class="inner">
      <p>大手IT企業にも負けない様々な<br>福利厚生や社員サポート</p>

      <ul class="internalList">
        <li class="internalListItem internalListItem--cate01">
          <span class="iconBox" />
          <h3>
            食事補助
            <span>(チケットレストラン)</span>
          </h3>
          <p>チケットレストランは、幅広い飲食店やコンビニが月3000円利用できる福利厚生の食事補助です。全国58,000店以上の 飲食店やコンビニエンスストアでご利用いただけます。</p>
        </li>
        <li class="internalListItem internalListItem--cate05">
          <span class="iconBox" />
          <h3>
            会員制リゾート施設
            <span>(セラヴィリゾート泉郷)</span>
          </h3>
          <p>全国26地区37施設の会員制リゾートが1泊2,900円から利用可能です！八ヶ岳、蓼科、伊豆高原、安曇野等のリゾートホテル、温泉付きコテージ等が格安で宿泊可能です。家族だけでなく、友人との利用でも社員価格で利用できます。</p>
        </li>
        <li class="internalListItem internalListItem--cate03">
          <span class="iconBox" />
          <h3>
            書籍購入補助
          </h3>
          <p>エンジニアとしてキャリアアップを目指す皆さんをサポートするための制度です。専門書籍は高額なものも多く、お困りの方もいらっしゃるのではないでしょうか？技術スキルや専門知識の習得に関する書籍を、月３,000円分までご購入いただけます。また、技術スキル・専門知識を向上しセミナーへなどの参加費用としても活用できます。</p>
        </li>
        <li class="internalListItem internalListItem--cate04">
          <span class="iconBox" />
          <h3>
            社外福利厚生制度
            <span>(ベネフィットワン)</span>
          </h3>
          <p>上場企業の2社に1社が導入している、福利厚生サービスの最大手。映画やフィットネスジム、旅行まで幅広く生活をサポートしてくれます。宿泊、ヘルスケア、スクール水着＆カルチャー、スポーツ、リラクゼーション＆エンタテインメント、ファミリー＆ライフサポート。</p>
        </li>
      </ul>

      <SystemFeature
        url="/culture-welfare"
        class="content"
      />

    </div>
  </section>
</template>

<script>
  import SystemFeature from './SystemFeature'

  export default {
    name: 'System01',
    components: { SystemFeature }
  }
</script>

<style scoped lang="scss">
  .internal {
    background: url(~assets/img/job/bg_internal_pc.jpg) repeat;
    padding: 0 0 60px;
    @include _mqmax(){
      padding: 0 0 40px;
    }
    .title {
      background: url(~assets/img/job/bg_internal_ttl_pc.jpg) no-repeat center center;
      background-size: cover;
      height: 160px;
      padding: 60px 0 0;
      @include _mqmax(){
        background: url(~assets/img/job/bg_internal_ttl_sp.jpg) no-repeat center center;
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
            margin: -10px -30px 0 auto;
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
          text-align: left;
        }
      }
      .internalList {
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
          border-radius: 8px;
          margin: 0 40px 110px 0;
          width: calc(50% - 20px);
          padding: 80px 30px 30px;
          position: relative;
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
          &:nth-child(2) {
            margin: 0 0 110px;
            @include _mqmax(){
              margin: 0 0 75px;
            }
          }
          &:nth-child(3) {
            margin: 0 40px 0 0;
            @include _mqmax(){
              margin: 0 0 75px;
            }
          }
          &:nth-child(4) {
            margin: 0;
          }
          h3 {
            color: #029ae4;
            font-size: 20px;
            text-align: center;
            margin: 0 0 30px;
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
                background: url(~assets/img/job/ico_internal_01.svg) no-repeat;
                width: 77px;
                height: 48px;
                margin: 40px auto 0;
                @include _mqmax(){
                  width: 54px;
                  height: 36px;
                  margin: 31px auto 0;
                }
              }
            }
          }
          &--cate02 {
            .iconBox {
              &:before {
                background: url(~assets/img/job/ico_internal_02.svg) no-repeat;
                width: 59px;
                height: 52px;
                margin: 38px auto 0;
                @include _mqmax(){
                  width: 50px;
                  height: 43px;
                  margin: 28px auto 0;
                }
              }
            }
          }
          &--cate03 {
            .iconBox {
              &:before {
                background: url(~assets/img/job/ico_internal_03.svg) no-repeat;
                width: 71px;
                height: 59px;
                margin: 34px auto 0;
                @include _mqmax(){
                  width: 54px;
                  height: 45px;
                  margin: 26px auto 0;
                }
              }
            }
          }
          &--cate04 {
            .iconBox {
              &:before {
                background: url(~assets/img/job/ico_internal_04.svg) no-repeat;
                width: 72px;
                height: 63px;
                margin: 32px auto 0;
                @include _mqmax(){
                  width: 54px;
                  height: 48px;
                  margin: 25px auto 0;
                }
              }
            }
          }
          &--cate05 {
            .iconBox {
              &:before {
                background: url(~assets/img/job/ico_internal_05.svg) no-repeat;
                width: 85px;
                height: 69px;
                margin: 30px auto 0;
                @include _mqmax(){
                  width: 62px;
                  height: 50px;
                  margin: 24px auto 0;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
