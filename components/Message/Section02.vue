<template>
  <section class="section02">
    <div class="sec-inner">
      <h2 class="comment">
        <img
          src="~/assets/img/message/section02_comment.png"
          alt="仕事を通して「自己成長」と「自己実現」を！"
          class="pc"
        >
        <img
          src="~/assets/img/message/section02_comment_sp.png"
          alt="仕事を通して「自己成長」と「自己実現」を！"
          class="sp"
        >
      </h2>
      <div class="detail">
        <div class="info">
          <span class="position">代表取締役会長</span>
          <span class="name">前田 俊樹</span>
          <span class="en">
            <img
              src="~/assets/img/message/section02_name.png"
              alt="TOSHIKI MAEDA"
            >
          </span>
        </div>
        <p class="text">人生の中で多くの時間を占める「仕事」。その「仕事」がただ単にお金を稼ぐ手段であるとすれば、とても虚しく、いつまでも日曜日が憂鬱なものとなるでしょう。その「仕事」を通して、自分の成長を感じ、自分のなりたい自分に近づければ、その人生はとても豊かなものとなり後悔の無い人生になるはずです。<br>弊社の経営理念に込めた思いは、一人でも多くの社員が自分の仕事に誇りを持ち、仕事を通して「自己成長」と「自己実現」を感じてもらえる会社になる事です。<br>2008年の創業以来11年間、リーマンショックや大震災など様々な困難がありましたが、弊社では一貫して未経験からのエンジニア採用・育成を止めず現在まで成長してきて、2018年一年間で27名の方々の入社がありました。新卒、経験者の中途入社など様々な経歴ですが、全員が弊社の考えを理解し、支持して頂いたと思っております。<br>今後も全社員75名が仕事を楽しみ、仕事を通して成長していけるように会社も成長して参ります。</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section02 {
    height: 688px;
    line-height: 1;
    background-image: url("~assets/img/message/section02_img01.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    margin-bottom: 295px;
    position: relative;
    @include _mqmax(){
      height: auto;
      background-image: url("~assets/img/message/section02_img01_sp.jpg");
      background-size: 100% auto;
      padding-top: 91.73333%;
      margin-bottom: 75px;
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
      top: -23px;
      left: 75px;
      z-index: 1;
      @include _mqmax(){
        top: 25px;
        right: 42.8%;
        left: auto;
        padding-left: 7px;
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
      left: -81px;
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
