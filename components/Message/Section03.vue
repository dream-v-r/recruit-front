<template>
  <section class="section03">
    <div class="sec-inner">
      <h2 class="comment">
        <img
          src="~/assets/img/message/section03_comment.png"
          alt="社員一人一人のキャリアプランを尊重した「エンジニアファースト」を。"
        >
      </h2>
      <div class="detail">
        <div class="info">
          <span class="position">取締役社長</span>
          <span class="name">井上 達章</span>
          <span class="en">
            <img
              src="~/assets/img/message/section03_name.png"
              alt="TATSUAKI INOUE"
            >
          </span>
        </div>
        <p class="text">当社はシステムソリューション事業をメインにエージェント事業・クリエイティブ事業の3事業を展開しており、社員の8割がITエンジニアという会社です。2015年に「日本一エンジニアにやさしい会社」というコーポレートビジョンを掲げさせていただきました。<br>やるからには中途半端ではなく、本気でこのビジョンを目指そうという事で10種類を超える福利厚生制度とエンジニア職としては珍しいインセンティブ制度を確立しました。福利厚生やインセンティブといった表面的な改善以外に社員の働きがいを得る為にキャリアプランを社員自身で決めさせる「エンジニアファースト」を取り組んでおります。<br>一般的には会社側が主導で案件なりプロジェクトへの参画を進めていきますが弊社ではエンジニア主導でのプロジェクト参画を行っております。社員のスキルUPとモチベーションUP＝会社の成長と考えております。サポートする営業メンバーやリーダーは大変ですけどね（笑）<br>設立当初は数名からのスタートでしたが現在社員が75名まで成長致しました。IT企業としては緩やかな成長曲線だと思いますが、今後も変わらず社員1人1人のキャリアプランを尊重した「エンジニアファースト」を実践していきます。</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section03 {
    height: 688px;
    line-height: 1;
    background-image: url("~assets/img/message/section03_img01.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    margin-bottom: 358px;
    position: relative;
    @include _mqmax(){
      height: auto;
      background-image: url("~assets/img/message/section03_img01_sp.jpg");
      background-size: 100% auto;
      padding-top: 91.73333%;
      margin-bottom: 52px;
    }
  }
  .sec-inner {
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    @include _mqmax(){
      max-width: 100%;
      position: static;
    }
    .comment {
      position: absolute;
      top: -64px;
      right: -72px;
      z-index: 1;
      @include _mqmax(){
        top: 16px;
        right: auto;
        left: 38.93333333333333%;
        padding-right: 10px;
      }
    }
    .info {
      margin-bottom: 42px;
      @include _mqmax(){
        margin-bottom: 23px;
      }
    }
    .position {
      display: block;
      font-size: 14px;
      margin-bottom: 20px;
      @include _mqmax(){
        font-size: 12px;
        margin-bottom: 10px;
      }
    }
    .name {
      display: inline-block;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 0.1em;
      padding-right: 20px;
      padding-right: 20px;
      @include _mqmax(){
        font-size: 20px;
        letter-spacing: normal;
        padding-right: 16px;
      }
    }
    .en {
      display: inline-block;
    }
    .detail {
      width: 581px;
      background-color: #f7f7f7;
      padding: 62px 80px 64px;
      position: absolute;
      top: 173px;
      right: -81px;
      @include _mqmax(){
        width: 89.33333%;
        padding: 30px 30px 24px;
        margin: -39px auto 0;
        position: static;
      }
    }
    .text {
      color: #666;
      font-size: 15px;
      line-height: 1.8;
      @include _mqmax(){
        font-size: 12px;
        line-height: 2;
      }
    }
  }
</style>
