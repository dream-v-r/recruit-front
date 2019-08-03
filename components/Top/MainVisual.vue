<template>
  <div class="main-visual">
    <video
      src="~/assets/movie/mainvisual.mp4"
      class="movie"
      autoplay
      playsinline
      muted
      loop
    />
    <div class="main-area block">
      <h1 class="title">
        <img
          src="~/assets/img/top/mainvisual_title.png"
          alt="日本一エンジニアにやさしい会社"
        >
      </h1>
      <nuxt-link to="message" class="btn">
        メッセージ
      </nuxt-link>
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
    > .movie {
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
    }
    > .block {
      text-align: center;
      position: absolute;
      top: 19.033674%;
      right: 0;
      left: 0;
      margin: auto;
      z-index: 1;
    }
  }
  .main-area {
    > .btn {
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
      }
    }
  }
</style>
