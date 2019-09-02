<template>
  <section class="voice">
    <div class="inner">
      <div class="title">
        <h3>
          社員の声
        </h3>
      </div>
      <ul class="voiceMovie">
        <li class="voiceMovieItem">
          <iframe
            src="https://www.youtube.com/embed/h8g75FtY32k"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
        <li class="voiceMovieItem">
          <iframe
            src="https://www.youtube.com/embed/cA1O3zodk5w"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">

  .voice {
    background: url(~assets/img/culture/bg_voice.jpg) repeat;
    padding: 0 0 120px;
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
          margin: -24px 0 50px;
        }
        h3 {
          background: #FFF;
          border-bottom: 4px solid #029ae4;
          width: 240px;
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
            width: 250px;
          }
        }
      }
      .voiceMovie {
        overflow: hidden;
        &Item {
          float: left;
          width: 470px;
          margin: 0 60px 0 0;
          @include _mqmax(){
            width: 100%;
            margin: 0 0 30px;
          }
          iframe {
            width: 470px;
            height: 264px;
            @include _mqmax(){
              width: 100%;
              height: 189px;
            }
          }
          &:nth-child(2n) {
            margin: 0;
          }
        }
      }
    }
  }
</style>
