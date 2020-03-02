<template>
  <section class="section02">
    <div class="sec-contents" id="company">
      <dl class="sec-def">
        <dt><a href="/recruit/">HOME<span>ホーム</span></a></dt>
        <dd></dd>
        <dt><a href="/recruit/message/">MESSAGE<span>メッセージ</span></a></dt>
        <dd></dd>
        <dt><a href="/recruit/people_index/">PEOPLE<span>社員紹介</span></a></dt>
        <dd>
          <ul class="list">
            <li><a href="/recruit/people_vol1/">先輩社員インタビューVol.1</a></li>
            <li><a href="/recruit/people_vol2/">先輩社員インタビューVol.2</a></li>
            <li><a href="/recruit/people_vol3/">先輩社員インタビューVol.3</a></li>
            <li><a href="/recruit/people_vol4/">先輩社員インタビューVol.4</a></li>
            <li><a href="/recruit/people_vol5/">先輩社員インタビューVol.5</a></li>
            <li><a href="/recruit/people_vol6/">先輩社員インタビューVol.6</a></li>
            <li><a href="/recruit/people_vol7/">先輩社員インタビューVol.7</a></li>
          </ul>
        </dd>
        <dt><a href="/recruit/culture-company-style/">CULTURE<span>福利厚生・社風</span></a></dt>
        <dd>
          <ul class="list">
            <li><a href="/recruit/culture-company-style/">社員アンケートからひも解く社風</a></li>
            <li><a href="/recruit/culture-welfare/">福利厚生</a></li>
          </ul>
        </dd>
        <dt><a href="/recruit/about/">ABOUT US<span>会社概要</span></a></dt>
        <dd></dd>
        <dt><a href="/recruit/job/career/">RECRUIT<span>募集要項</span></a></dt>
        <dd>
          <ul class="list">
            <li><a href="/recruit/job/newgrads/">新卒採用</a></li>
            <li><a href="/recruit/job/career/">キャリア採用</a></li>
          </ul>
        </dd>
        <dt><a href="/recruit/seminar/">EVENT<span>説明会</span></a></dt>
        <dd></dd>
        <dt><a href="https://rikunabi-direct.jp/2021/corporation/detail/rd00036185" target="_blank">NEW GRADUATE ENTRY
        <img
          src="~/assets/img/sitemap/externallink.png"
          alt="別タブで外部サイトが開きます"
        >
        <span>新卒採用エントリー</span></a>
        </dt>
        <dd></dd>
        <dt><a href="/recruit/career_entry/">CAREER RECRUITMENT ENTRY<span>キャリア採用エントリー</span></a></dt>
        <dd></dd>
        <dt><a href="/" target="_blank">CORPORATE SITE
        <img
          src="~/assets/img/sitemap/externallink.png"
          alt="別タブでページが開きます"
        >
        <span>コーポレートサイト</span></a></dt>
        <dd></dd>
        <dt><a href="/privacy/" target="_blank">PRIVACY POLICY
        <img
          src="~/assets/img/sitemap/externallink.png"
          alt="別タブでページが開きます"
        >
        <span>プライバシーポリシー</span></a></dt>
        <dd></dd>
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
        margin: 0 auto 0;
        padding: 30px 0 20px;
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
      width: 300px;
      color: #029AE4;
      font-weight: bold;
      border-top: 2px solid #029AE4;
      padding: 22px 0 22px 10px;
      @include _mqmax(){
        width: 100%;
        border-top: 1px solid #029AE4;
        padding: 20px 0 0 5px;
      }
    }
    dd {
      width: calc(100% - 300px);
      color: #029AE4;
      line-height: 1;
      font-weight: bold;
      border-top: 2px solid #029AE4;
      padding: 10px 0 10px 10px;
      @include _mqmax(){
        width: 100%;
        border-top: none;
        padding: 0 0 10px;
        margin-left: 0;
      }
    }
    .list {
      li {
        padding: 1em 0 1em 1em;
        position: relative;
      }
        @include _mqmax(){
          padding-left: 0;
       }
    }
  }
dt a, dd a {
  padding-left: 2em;
  position: relative;
  text-decoration: none;
  color: #029AE4;
}

dt a:hover, dd a:hover {
  color: #f58a00;
}

dt a:before, dd a:before {
  content: '';
  width: 6px;
  height: 6px;
  display: inline-block;
  border-top: 1px solid #2383c5;
  border-right: 1px solid #2383c5;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

dt a img, dd a img {
  padding: 3px;
}

dt a span, dd a span {
  display: block;
  font-weight: normal;
  color: #555;
  font-size: 12px;
  line-height: 1.4;
  padding-left: 28px;
    @include _mqmax(){
      padding-left: 30px;
    }
}
</style>
