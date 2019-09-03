<template>
  <section class="section03" id="service">
    <div class="sec-contents">
      <h2 class="title">サービス紹介</h2>
      <p class="text">「人材とIT・クリエイティブの総合カンパニー」ならではのサービスを展開しております。<br>ドリームビジョンはこれまでシステムソリューション、クリエイティブに特化した人材ビジネスを軸に展開して参りました。<br>それらの人材から受諾開発のサービスもスタートし、「人材とIT・クリエイティブの総合カンパニー」ならではのサービスを展開しております。</p>
      <p class="text">展開するサービスで共通するのは、「IT」と「クリエイティブ」。<br>この2つに関わることに課題を持つ企業、その業界で働く求職者の方々の手助けになる様々な事業を展開しています。</p>
      <div class="inner js_syncTarget">
        <div class="col">
          <img
            src="~/assets/img/about/section03_img01.png"
            alt="Engineer Fan"
            class="img"
          >
          <p class="label">フリーエンジニア向け求人サイト</p>
          <h3 class="name">Engineer Fan</h3>
          <p class="lead">エンジニアファンはフリーエンジニア向けの案件情報を提供する求人サイトです。常時1,000件を超える保有案件から専任コンサルタントが、求職者の経験、ご希望、スキル、ビジョン等をしっかりと把握した上でご希望にあった案件をご紹介致します。</p>
          <p class="link"><a href="http://www.engineer-fan.jp/" target="_blank">サービス詳細へ</a></p>
        </div>
        <div class="col">
          <img
            src="~/assets/img/about/section03_img02.png"
            alt="CREATORS FAN"
            class="img"
          >
          <p class="label">クリエイターに寄り添う転職サイト</p>
          <h3 class="name">CREATORS FAN</h3>
          <p class="lead">クリエイターズファンは、Web・デザイン・IT系のクリエイティブ求人に特化した転職求人サイトです。特に30代、40代の経験豊富なクリエイターが希望する求人が多数掲載しております。大手企業から中小規模企業まで、幅広い求人をご紹介しています。</p>
          <p class="link"><a href="https://www.creators-fan.jp/" target="_blank">サービス詳細へ</a></p>
        </div>
        <div class="col">
          <img
            src="~/assets/img/about/section03_img03.png"
            alt="WebCAN"
            class="img"
          >
          <p class="label">Webキャンペーン抽選システム</p>
          <h3 class="name">WebCAN</h3>
          <p class="lead is-mb">Webキャンペーン抽選システム「WebCAN(ウェブキャン)」はWebでオープン懸賞、クローズド懸賞を行えるパッケージシステムです。キャンペーンサイトの開設、当選者・応募者情報の管理、賞品の保管・配送代行(※)までキャンペーンに必要なサービスをワンストップでご提供するサービスです。</p>
          <p class="link"><a href="http://www.dream-v.co.jp/webcan/" target="_blank">サービス詳細へ</a></p>
        </div>
        <div class="col">
          <img
            src="~/assets/img/about/section03_img04.png"
            alt="THQREE"
            class="img"
          >
          <p class="label">３D認証システム</p>
          <h3 class="name">THQREE</h3>
          <p class="lead is-mb">世界のあらゆるシチュエーションで活用されている顔認証システムとなります。その中で弊社の顔認証システムは、「高度なセキュリティ機能」・「世界水準の認証精度と認証スピード」を兼ね備えた最先端3Ｄ顔認証システムとなります</p>
          <p class="link"><a href="http://www.dream-v.co.jp/3d_thqree/" target="_blank">サービス詳細へ</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section03 {
    color: #333;
    line-height: 1;
  }
  .sec-contents {
    max-width: 1000px;
    margin: 0 auto 102px;
    @include _mqmax(){
    }
    .title {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      background-color: #029ae4;
      padding: 20px 0;
      margin-bottom: 30px;
      @include _mqmax(){
      }
    }
    .text {
      font-size: 16px;
      line-height: 2;
      @include _mqmax(){
      }
      &:not(:last-of-type) {
        margin-bottom: 32px;
      }
      &:last-of-type {
        margin-bottom: 58px;
      }
    }
  }
  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include _mqmax(){
    }
    .col {
      width: 306px;
      &:not(:last-child) {
        margin-bottom: 60px;
      }
    }
    .img {
      margin-bottom: 21px;
    }
    .label {
      color: #999;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 13px;
    }
    .name {
      color: #029ae4;
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 22px;
    }
    .lead {
      font-size: 14px;
      line-height: 1.7857142;
      margin-bottom: 52px;
      &.is-mb {
        margin-bottom: 27px;
      }
    }
    .link {
      text-align: center;
    }
    .link a {
      display: inline-block;
      width: 226px;
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-decoration: none;
      background: -webkit-linear-gradient( left, rgba(2 ,117, 174, 1), rgba(20, 69, 163, 1));
      background: linear-gradient( to right, rgba(2, 117, 174, 1), rgba(20, 69, 163, 1));
      border-radius: 25px;
      padding: 18px 0;
      &:hover {
        opacity: .7;
      }
    }
  }
</style>
