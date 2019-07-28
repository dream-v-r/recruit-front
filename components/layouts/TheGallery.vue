<template>
  <section class="site-gallery">
    <div class="inner">
      <div class="gallery-grid">
        <h2 class="title gallery-title">
          <div class="icon">
            <img
              src="~/assets/img/icon_insta_c.png"
              alt=""
            >
          </div>
          <div class="main">
            <img
              src="~/assets/img/gallery_text.png"
              alt="gallery"
            >
          </div>
          <div class="sub">
            ギャラリー
          </div>
        </h2>
        <div
          class="gallery1 gallery-img"
          @mouseover="showDetail"
        >
          <img
            src="~/assets/img/gallery-img01.jpg"
            alt=""
          >
        </div>
        <div class="gallery2 gallery-img">
          <img
            src="~/assets/img/gallery-img01.jpg"
            alt=""
          >
        </div>
        <div class="gallery3 gallery-img">
          <img
            src="~/assets/img/gallery-img01.jpg"
            alt=""
          >
        </div>
        <div class="gallery4 gallery-img">
          <img
            src="~/assets/img/gallery-img01.jpg"
            alt=""
          >
        </div>
        <div class="gallery5 gallery-img">
          <img
            src="~/assets/img/gallery-img01.jpg"
            alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'TheGallery'
  }
</script>

<style scoped lang="scss">
  .site-gallery {
    background-image: url("~assets/img/top/section_bg.jpg");
    background-repeat: repeat;
    .inner {
      max-width: 1000px;
      margin: auto;
      padding-top: 50px;
      padding-bottom: 80px;
      @include _mqmax(){
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }

  .gallery-title {
    text-align: center;
    > .icon {
      @include _mqmax(){
        margin-top: 18.71657%;
      }
    }
    > .main {
      margin-top: 20px;
      line-height: 1;
      @include _mqmax(){
        margin-top: 12px;
        max-width: 132px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    > .sub {
      margin-top: 15px;
      font-size: 15px;
      color: $mainColor;
      @include _mqmax(){
        font-size: 14px;
      }
    }
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-template-rows: 167px 200px;
    grid-template-areas:
    "title title title title title"
    "item1 item2 item3 item4 item5";
    @include _mqmax(){
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
      "title item1"
      "item2 item3"
      "item4 item5"
    }
    > .title {
      grid-area: title
    }
    > .gallery1 {
      grid-area: item1;
    }
    > .gallery2 {
      grid-area: item2;
    }
    > .gallery3 {
      grid-area: item3;
    }
    > .gallery4 {
      grid-area: item4;
    }
    > .gallery5 {
      grid-area: item5;
    }
  }
  .gallery-img {
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
