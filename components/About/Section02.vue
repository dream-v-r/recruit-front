<template>
  <section class="section02">
    <div class="sec-contents" id="company">
      <h2 class="title">会社概要</h2>
      <dl class="sec-def">
        <dt>会社名</dt>
        <dd>ドリームビジョン株式会社（Dream Vision Co., Ltd.）</dd>
        <dt>設立</dt>
        <dd>平成20年6月10日</dd>
        <dt>役員</dt>
        <dd>代表取締役会長 前田 俊樹<br>取締役社長 井上 達章</dd>
        <dt>資本金</dt>
        <dd>2000万円 決算月12月</dd>
        <dt>事業内容</dt>
        <dd>
          <ul class="list">
            <li>システム開発事業</li>
            <li>ネットワーク・サーバ設計、構築、運用事業</li>
            <li>WEB制作・アプリ開発等の受託開発事業</li>
            <li>IT・WEB業界に特化した職業紹介・人材派遣事業</li>
          </ul>
        </dd>
        <dt>所在地</dt>
        <dd>【本社】<br>〒103-0001<br>東京都中央区日本橋小伝馬町9-10 小伝馬町ビル5階<br>【クリエイティブLAB】<br>〒103-0001<br>東京都中央区日本橋小伝馬町7-12 セントラルビル 4階</dd>
        <dt>TEL・FAX</dt>
        <dd>【本社】<br>TEL 03-6661-9626<br>FAX 03-6661-9629</dd>
      </dl>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section02 {
    color: #333;
    line-height: 1;
    padding-top: 80px;
    @include _mqmax(){
      padding-top: 0;
    }
    .sec-contents {
      max-width: 1000px;
      margin: -94px auto 0;
      padding: 94px 0 48px;
      @include _mqmax(){
        max-width: none;
        margin: -55px auto 0;
        padding: 55px 0 20px;
      }
      .title {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        background-color: #029ae4;
        padding: 20px 0;
        margin-bottom: 60px;
        @include _mqmax(){
          font-size: 25px;
          padding: 22px 0 23px;
          margin-bottom: 39px;
        }
      }
    }
  }
  .sec-def {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    @include _mqmax(){
      font-size: 15px;
      padding: 0 20px;
    }
    dt {
      width: 200px;
      color: #029AE4;
      font-weight: bold;
      border-top: 2px solid #029AE4;
      padding: 22px 0 22px 10px;
      @include _mqmax(){
        width: 90px;
        border-top: 1px solid #029AE4;
        padding: 20px 0 25px 5px;
      }
    }
    dd {
      width: calc(100% - 230px);
      line-height: 2;
      border-top: 2px solid #ccc;
      padding: 15px 0 15px 10px;
      margin-left: 30px;
      @include _mqmax(){
        width: calc(100% - 90px);
        line-height: 1.4;
        border-top: 1px solid #ccc;
        padding: 17px 0 22px 20px;
        margin-left: 0;
      }
    }
    .list {
      li {
        padding-left: 17px;
        position: relative;
        &:before {
          content: '';
          width: 8px;
          height: 8px;
          background-color: #029ae4;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          @include _mqmax(){
            width: 7px;
            height: 7px;
          }
        }
      }
    }
  }
</style>
