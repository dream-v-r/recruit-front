<template>
  <section class="careerUp">
    <div class="title">
      <h3>
        キャリアアップ
        <span class="ruby">
          <img
            src="~/assets/img/job/ttl_ruby_careerup.png"
            alt="Career Enhancement"
          >
        </span>
      </h3>
    </div>
    <div class="inner">
      <p>経験や技術レベルに応じた活躍のステージを用意しています。<br>高い能力を持つ人材は、自分の裁量の大きいプロジェクトや先端技術領域に<br>積極的に抜擢していきます。</p>
    </div>
    <div class="careerContent careerContent--specialist">
      <div class="inner">
        <div class="txtBox">
          <h3>
            SPECIALIST
            <span>スペシャリスト</span>
          </h3>
          <p>エンジニアとして最先端の<br>技術・現場で技術向上を目指す環境を<br>提供いたします。<br>また、自身でキャリアプランを<br>プランニングすることもできます。</p>
        </div>
      </div>
    </div>
    <div class="careerContent careerContent--generalist">
      <div class="inner">
        <div class="txtBox">
          <h3>
            GENERALIST
            <span>ゼネラリスト</span>
          </h3>
          <p>プロジェクトリーダーとしてチーム全体のマネジメントはもとより、事業戦略や教育事業の計画・立案といった経営戦略的な業務にも携われます。<br>歯車の一つとして働くのではなく、ドリームビジョンでは歯車の中心として働くチャンスを積極的に提供しております。</p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
  .careerUp {
    background: url(~assets/img/job/bg_careerup_pc.jpg) repeat;
    padding: 0 0 60px;
    @include _mqmax(){
      padding: 0 0 40px;
    }
    .title {
      background: url(~assets/img/job/bg_careerup_ttl_pc.jpg) no-repeat center center;
      background-size: cover;
      height: 160px;
      padding: 60px 0 0;
      @include _mqmax(){
        background: url(~assets/img/job/bg_careerup_ttl_sp.jpg) no-repeat center center;
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
    > .inner {
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
        margin: 0 0 60px;
        @include _mqmax(){
          font-size: 18px;
          text-align: left;
          margin: 0 0 20px;
          br {
            display: none;
          }
        }
      }
    }
    .careerContent {
      position: relative;
      .inner {
        max-width: 1000px;
        margin: 0 auto;
        .txtBox {
          width: 600px;
          position: relative;
          padding: 120px 60px 60px;
          @include _mqmax(){
            width: 100%;
            padding: 35px 5%;
          }
          &:before {
            background: #edf8fd;
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
          }
          h3 {
            color: #029ae4;
            font-size: 81.75px;
            font-weight: 900;
            font-family: 'Lato', sans-serif;
            position: absolute;
            top: -50px;
            left: 60px;
            z-index: 9;
            @include _mqmax(){
              font-size: 50px;
              position: relative;
              top: inherit;
              left: inherit;
              text-align: center;
              margin: 0 0 30px;
            }
            span {
              color: #029ae4;
              display: block;
              font-size: 15px;
              font-weight: bold;
            }
          }
          p {
            font-size: 15px;
            line-height: 2;
            text-align: justify;
            position: relative;
            z-index: 9;
            @include _mqmax(){
              margin: 0 0 20px;
              br {
                display: none;
              }
            }
          }
        }
      }
      &--specialist {
        margin: 0 0 80px;
        padding: 100px 0;
        height: 517px;
        @include _mqmax(){
          padding: 0;
          height: auto;
          margin: 0 0 50px;
        }
        &:before {
          background: url(~assets/img/job/bg_careerup_01.jpg) no-repeat;
          content: "";
          display: block;
          width: 721px;
          height: 517px;
          position: absolute;
          top: 0;
          right: 5%;
          z-index: 3;
        }
        @include _mqmax(){
          &:before {
            content: none;
          }
          .inner {
            .txtBox {
              &:after {
                background: url(~assets/img/job/bg_careerup_01.jpg) no-repeat;
                background-size: 100%;
                content: "";
                display: block;
                width: 100%;
                height: 242px;
                position: relative;
                z-index: 3;
              }
            }
          }
        }
      }
      &--generalist {
        margin: 0 0 80px;
        padding: 100px 0 0;
        height: 525px;
        @include _mqmax(){
          padding: 0;
          height: auto;
          margin: 0;
        }
        &:before {
          background: url(~assets/img/job/bg_careerup_02.jpg) no-repeat;
          content: "";
          display: block;
          width: 720px;
          height: 525px;
          position: absolute;
          top: 0;
          left: 5%;
          z-index: 3;
        }
        @include _mqmax(){
          &:before {
            content: none;
          }
        }
        .inner {
          .txtBox {
            margin: 0 0 0 400px;
            @include _mqmax(){
              margin: 0;
              &:after {
                background: url(~assets/img/job/bg_careerup_02.jpg) no-repeat;
                background-size: 100%;
                content: "";
                display: block;
                width: 100%;
                height: 242px;
                position: relative;
                z-index: 5;
              }
            }
            &:before {
              z-index: 4;
            }
          }
        }
      }
    }
  }
</style>
