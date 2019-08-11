<template>
  <section class="slider">
    <div class="inner">
      <div class="title">
        <h3>
          こんな社員がいます！
        </h3>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide>
          <a href="people_vol1">
            <img
              src="~assets/img/slider/img_slider_01_pc.png"
              alt="新貝 哲平"
              class="pc"
            >
            <img
              src="~assets/img/slider/img_slider_01_sp.png"
              alt="新貝 哲平"
              class="sp"
            >
            <div class="infoBox">
              <span class="post">インフラエンジニア</span>
              <span class="name">新貝 哲平</span>
              <span class="year">2016年入社 | 中途採用</span>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="/people_vol2">
            <img
              src="~assets/img/slider/img_slider_02_pc.png"
              alt="小田島 貴宏"
              class="pc"
            >
            <img
              src="~assets/img/slider/img_slider_02_sp.png"
              alt="小田島 貴宏"
              class="sp"
            >
            <div class="infoBox">
              <span class="post">開発エンジニア</span>
              <span class="name">小田島 貴宏</span>
              <span class="year">2017年入社 | 中途採用</span>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="/people_vol3">
            <img
              src="~assets/img/slider/img_slider_03_pc.png"
              alt="大津 裕之"
              class="pc"
            >
            <img
              src="~assets/img/slider/img_slider_03_sp.png"
              alt="大津 裕之"
              class="sp"
            >
            <div class="infoBox">
              <span class="post">開発エンジニア</span>
              <span class="name">大津 裕之</span>
              <span class="year">2016年入社 | 中途採用</span>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="/people_vol4">
            <img
              src="~assets/img/slider/img_slider_04_pc.png"
              alt="森田 麻里子"
              class="pc"
            >
            <img
              src="~assets/img/slider/img_slider_04_sp.png"
              alt="森田 麻里子"
              class="sp"
            >
            <div class="infoBox">
              <span class="post">インフラエンジニア</span>
              <span class="name">森田 麻里子</span>
              <span class="year">2017年入社 | 中途採用</span>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="/people_vol5">
            <img
              src="~assets/img/slider/img_slider_05_pc.png"
              alt="山崎 篤"
              class="pc"
            >
            <img
              src="~assets/img/slider/img_slider_05_sp.png"
              alt="山崎 篤"
              class="sp"
            >
            <div class="infoBox">
              <span class="post">開発エンジニア</span>
              <span class="name">山崎 篤</span>
              <span class="year">2018年入社 | 中途採用</span>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="/people_vol6">
            <img
              src="~assets/img/slider/img_slider_06_pc.png"
              alt="神谷 彩奈"
              class="pc"
            >
            <img
              src="~assets/img/slider/img_slider_06_sp.png"
              alt="神谷 彩奈"
              class="sp"
            >
            <div class="infoBox">
              <span class="post">ITサポート</span>
              <span class="name">神谷 彩奈</span>
              <span class="year">2018年入社 | 中途採用</span>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="/people_vol7">
            <img
              src="~assets/img/slider/img_slider_07_pc.png"
              alt="新貝 哲平"
              class="pc"
            >
            <img
              src="~assets/img/slider/img_slider_07_sp.png"
              alt="新貝 哲平"
              class="sp"
            >
            <div class="infoBox">
              <span class="post">営業</span>
              <span class="name">野崎 優人</span>
              <span class="year">2016年入社 | 中途採用</span>
            </div>
          </a>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <nuxt-link
        :to="url"
        class="base-btn"
      >
        {{ title }}
      </nuxt-link>
    </div>
  </section>
</template>

<script>

  export default {
    props: {
      url: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        swiperOption: {
          loop: true, //無限ループ
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: { //前へ・次へのナビ設定
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            767: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .base-btn {
    color: #fff;
    background: linear-gradient(to right, #0275ae, #1445a3);
    font-size: 15px;
    border-radius: 30px;
    padding: 14px 0;
    display: block;
    text-align: center;
    text-decoration: none;
    width: 320px;
    margin: 0 auto;
    @include _mqmax(){
      font-size: 12px;
      padding: 9px 0;
    }
  }

  .slider {
    background: url(~assets/img/slider/bg_slider.jpg) repeat;
    padding: 0 0 60px;
    .inner {
      max-width: 1000px;
      margin: 0 auto;
      padding: 1px 0 0;
      @include _mqmax() {
        max-width: 100%;
      }
      .title {
        margin: -35px 0 80px;
        @include _mqmax(){
          margin: -24px 0 50px;
        }
        h3 {
          background: #FFF;
          border-bottom: 4px solid #029ae4;
          width: 380px;
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
            width: 70%;
          }
        }
      }
      .swiper-container {
        margin: 0 auto 60px;;
        @include _mqmax() {
          margin: 0 auto 30px;;
        }
      }
      .swiper-slide {
        a {
          text-decoration: none;
          img {
            width: 90%;
            position: relative;
            z-index: 1;
            @include _mqmax() {
              width: 90%;
              margin: 0 auto;
            }
          }
          .infoBox {
            background: #FFF;
            box-sizing: border-box;
            width: 80%;
            margin: -36px auto 1px;
            padding: 1px 20px 20px;
            position: relative;
            z-index: 2;
            .post {
              background: linear-gradient(to right, #0275ae, #1445a3);
              color: #FFF;
              display: block;
              margin: -14px 0 10px ;
              text-align: center;
              font-size: 13px;
              line-height: 30px;
              height: 30px;
            }
            .name {
              color: #333;
              display: block;
              font-size: 20px;
              font-weight: bold;
            }
            .year {
              color: #999;
              font-size: 12px;
              font-weight: bold;
            }
          }
        }
      }
      .swiper-button-prev, .swiper-button-next {
        background: #029ae4;
        border-radius: 37px;
        width: 74px;
        height: 74px;
        margin-top: -37px;
        &:before {
          content: '';
          width: 20px;
          height: 20px;
          border: 0px;
          border-top: solid 3px #FFF;
          border-right: solid 3px #FFF;
          position: absolute;
          top: 50%;
          margin-top: -10px;
        }
      }
      .swiper-button-prev {
        left: 0;
        @include _mqmax() {
          left: -37px;
        }
        &:before {
          right: 30%;
          transform: rotate(-135deg);
          @include _mqmax() {
            right: 5%;
          }
        }
      }
      .swiper-button-next {
        right: 0;
        @include _mqmax() {
          right: -37px;
        }
        &:before {
          left: 30%;
          transform: rotate(45deg);
          @include _mqmax() {
            left: 5%;
          }
        }
      }

    }
  }


</style>