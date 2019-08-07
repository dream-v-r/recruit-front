<template>
  <div class="main-visual">
    <div class="movie-block">
      <video
        class="movie"
        autoplay
        playsinline
        muted
        loop
      >
        <source src="~/assets/movie/mainvisual.mp4">
      </video>
    </div>
    <div class="main-area block">
      <div class="areaInner">
        <h1 class="title">
          <img
            src="~/assets/img/top/mainvisual_title.png"
            alt="日本一エンジニアにやさしい会社"
          >
        </h1>
        <nuxt-link
          to="message"
          class="btn"
        >
          メッセージ
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainVisual'
  }
</script>

<style scoped lang="scss">
  .main-visual {
    position: relative;
    width: 100%;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba($mainColor, 0.4);
      left: 0;
      top: 0;
    }
    > .movie-block {
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      overflow: hidden;
      > .movie {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        display: block;
      }
    }
    > .block {
      width: 100%;
      height: 100%;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      z-index: 1;
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  .main-area {
    display: flex;
    align-items: center;
    justify-content: center;
    .areaInner {
    }
    .title {
      @include _mqmax() {
        max-width: 330px;
        margin: auto;
      }
    }
    .btn {
      text-decoration: none;
      color: #fff;
      display: block;
      max-width: 240px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 40px;
      border: 2px solid #fff;
      padding: 19px 0;
      line-height: 1;
      font-weight: bold;
      position: relative;
      margin-top: 8.931185%;
      overflow: hidden;
      @include _mqmax() {
        max-width: 200px;
        padding: 15px 0;
        font-size: 14px;
      }
      &::before {
        content: '';
        position: absolute;
        border-top: 2px solid $mainColor;
        border-right: 2px solid $mainColor;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        left: 58px;
        top: 0;
        bottom: 0;
        margin: auto;
        @include _mqmax() {
          left: 45px;
          width: 8px;
          height: 8px;
        }
      }
      &::after {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        z-index: -1;
        transition: .3s;
        box-shadow: inset 0 0 0 10em rgba(255, 255, 255, .3);
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
</style>
