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
          v-for="(item,index) in gallery"
          :key="index"
          class="gallery-img"
          :class="`gallery${index + 1}`"
          @mouseover="showDetail(index)"
          @mouseleave="hiddenDetail(index)"
        >
          <img :src="item.img">
          <transition name="show">
            <div
              v-show="item.isDetail"
              class="detail-cover cover"
            >
              <p class="text">
                {{ item.detail }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'TheGallery',
    data() {
      return {
        gallery: [
          {
            title: '',
            detail: 'マウスオーバーでテキストが表示されます。マウスオーバーでテキストが表示されます。１１１１',
            img: require("~/assets/img/gallery-img01.jpg"),
            isDetail: false
          },
          {
            title: '',
            detail: 'マウスオーバーでテキストが表示されます。マウスオーバーでテキストが表示されます。２２２２',
            img: require("~/assets/img/gallery-img02.jpg"),
            isDetail: false
          },
          {
            title: '',
            detail: 'マウスオーバーでテキストが表示されます。マウスオーバーでテキストが表示されます。３３３３３',
            img: require("~/assets/img/gallery-img03.jpg"),
            isDetail: false
          },
          {
            title: '',
            detail: 'マウスオーバーでテキストが表示されます。マウスオーバーでテキストが表示されます。４４４４４',
            img: require("~/assets/img/gallery-img04.jpg"),
            isDetail: false
          },
          {
            title: '',
            detail: 'マウスオーバーでテキストが表示されます。マウスオーバーでテキストが表示されます。５５５５５',
            img: require("~/assets/img/gallery-img05.jpg"),
            isDetail: false
          }
        ]
      }
    },
    methods: {
      showDetail: function(index) {
        this.gallery[index].isDetail = true
      },
      hiddenDetail: function(index) {
        this.gallery[index].isDetail = false
      }
    }
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
    position: relative;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    > .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      padding-right: 15px;
      padding-left: 15px;
      padding-bottom: 15px;
      padding-top: 15px;
    }
  }
  .detail-cover {
    font-size: 14px;
    color: #fff;
    background-color: rgba(#1b75b0, 0.9);
  }
  .show-enter-active, .show-leave-active {
    transition: opacity .2s
  }
  .show-enter, .show-leave-active {
    opacity: 0
  }
</style>
