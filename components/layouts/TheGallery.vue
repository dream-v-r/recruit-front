<template>
  <section class="site-gallery">
    <div class="inner instagram_graph_api_area">
<div class="instagram_graph_api_area">
<div class="instagram_graph_api_area_title">
<img src="https://www.dream-v.co.jp/recruit/_nuxt/img/instagram_icon.png" alt="Instagramロゴアイコン">GALLERY<span>ギャラリー</span>
</div>

<ul>
  <li
    v-for="(item,index) in gallery"
    :key="index"
    class="gallery-img"
    :class="`gallery${index + 1}`"
    @mouseover="showDetail(index)"
    @mouseleave="hiddenDetail(index)"
  >
    <a 
    :href="item.URL"
    target="_blank"
    >
    <img :src="item.img">
    <span
      v-show="item.isDetail"
      class="detail-cover cover"
    >
    {{ item.detail }}
    </span>
    </a>
  </li>
</ul>
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
            detail: '\u5148\u9031\u306e\u91d1\u66dc\u65e5\u3001\n\u30a4\u30f3\u30d5\u30e9\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u30e1\u30f3\u30d0\u30fc\uff08\u4e00\u90e8\uff09\u3067\n\u5c11\u3057\u9045\u3081\u306e\u65b0\u5e74\u4f1a\u3092\u3084\u308a\u307e\u3057\u305f\u3002\n\n\u5c11\u4eba\u6570\u304b\u3089\u59cb\u307e\u3063\u305f\u3053\u306e\u30c1\u30fc\u30e0\u3001\n\u4eca\u3067\u306f\u3059\u3063\u304b\u308a\u4ef2\u9593\u304c\u5897\u3048\u3066\u5927\u304d\u306a\u30c1\u30fc\u30e0\u306b\u306a\u308a\u307e\u3057\u305f\u3002\n\n\u305d\u3057\u3066\u3053\u308c\u304b\u3089\u3082\u3063\u3068\u3082\u3063\u3068\u5927\u304d\u3044\u30c1\u30fc\u30e0\u306b\n\u3057\u3066\u3044\u304d\u305f\u3044\u3068\u601d\u3063\u3066\u304a\u308a\u307e\u3059\uff01 \u25bc\u25bd\u73fe\u5728\u4ef2\u9593\u3092\u52df\u96c6\u4e2d\u3067\u3059\uff01\u25bc\u25bd\n...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/84698559_669642270451473_3354235073526907138_n.jpg?_nc_cat=101&_nc_ohc=xKSWdcV-6o0AX8XHCcG&_nc_ht=scontent.xx&oh=9d8f9fe6819039845c74b6af0c2d7ebb&oe=5EFDDC21",
            isDetail: false,
            URL:"https://www.instagram.com/p/B8qWwu2H4u8/"
          },
          {
            title: '',
            detail: '\u30c9\u30ea\u30fc\u30e0\u30d3\u30b8\u30e7\u30f3\u3067\u306f\u3001\u6280\u8853\u30b9\u30ad\u30eb\u3084\u5c02\u9580\u77e5\u8b58\u306e\u7fd2\u5f97\u306b\u95a2\u3059\u308b\u66f8\u7c4d\u3092\u67083,000\u5186\u5206\u307e\u3067\u8cfc\u5165\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\n\u4eca\u6708\u79c1\u304c\u8cfc\u5165\u3057\u305f\u66f8\u7c4d\u306f\u3053\u3061\u3089\u2193\u2193\n\u3010WordPress \u4ed5\u4e8b\u306e\u73fe\u5834\u3067\u30b5\u30c3\u3068\u4f7f\u3048\u308b\uff01\u30c7\u30b6\u30a4\u30f3\u6559\u79d1\u66f8\u3011\n\nWordPress\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304b\u3089\u7ba1\u7406\u753b\u9762\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3001Web\u30b5\u30a4\u30c8\u306e\u9ad8\u901f\u5316\u306b\u3064\u3044\u3066\u307e\u3067\u7db2\u7f85\u3057\u3066\u3044\u308b\u826f\u66f8\u3067\u3059\u3002\n\u8f09\u3063...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/84297647_472352203445120_1799020495293166916_n.jpg?_nc_cat=105&_nc_ohc=dWtEktXLBaoAX9Gjm1g&_nc_ht=scontent.xx&oh=b719135e535999e15b8f73d96d3e54f1&oe=5E8D8A22",
            isDetail: false,
            URL:"https://www.instagram.com/p/B8K0uv5HmFJ/"
          },
          {
            title: '',
            detail: '\u3010youtube\u52d5\u753b#9\u3092\u516c\u958b\u3057\u307e\u3057\u305f\uff01\u3011 \u9762\u63a5\u30cf\u30a6\u30c4\u30fc\u306e\u7b2c\u4e8c\u5f3e\u306b\u306a\u308a\u307e\u3059\u3002\n\u9762\u63a5\u306e\u6642\u306b\u7dca\u5f35\u3057\u3066\u4f55\u3092\u805e\u304b\u308c\u308b\u3093\u3060\u308d\u3046\u2026\n\u3069\u3046\u7b54\u3048\u305f\u3089\u3044\u3044\u3093\u3060\u308d\u3046\u2026\u3068\u8003\u3048\u3059\u304e\u3066\u3001\n\u5fae\u5999\u306a\u7a7a\u6c17\u306b\u306a\u3063\u3066\u3057\u307e\u3063\u305f\u7d4c\u9a13\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f\n\u4e8b\u524d\u306b\u3001\u805e\u304b\u308c\u308b\u3053\u3068\u3092\u30a4\u30e1\u30fc\u30b8\u3057\u3066\u304a\u304f\u3068\u81ea\u5206\u306e\u8a00\u3044\u305f\u3044\u3053\u3068\u304c\u6574\u7406\u3067\u304d\u3066\u81ea\u4fe1\u3092\u3082\u3063\u3066\u9762\u63a5\u306b\u6311\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u203b\u62c5...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/82078552_182367836304666_866213596789303208_n.jpg?_nc_cat=109&_nc_ohc=jacSE9aWFpcAX_L7JlW&_nc_ht=scontent.xx&oh=d56d63632f6733b5ad75c0120138f740&oe=5EDA5045",
            isDetail: false,
            URL:"https://www.instagram.com/p/B7-WaA7nTM7/"
          },
          {
            title: '',
            detail: '2020\u5e74\u6700\u521d\u306e\u30a4\u30d9\u30f3\u30c8\u3001\u30c9\u30ea\u30fc\u30e0\u30d3\u30b8\u30e7\u30f3\u65b0\u5e74\u4f1a\u304c\u79cb\u8449\u539f\u3067\u958b\u50ac\u3055\u308c\u307e\u3057\u305f\uff01\n\n\u666e\u6bb5\u306f\u63a5\u70b9\u306e\u5c11\u306a\u3044\u793e\u54e1\u540c\u58eb\u3082\u3001\u3053\u3046\u3057\u3066\u96c6\u307e\u308b\u3068\u81ea\u7136\u3068\u8a71\u304c\u306f\u305a\u307f\u307e\u3059( \u00b4\u2200)\u4eba(\u2200\uff40 )\n\u4eca\u56de\u306f\u4ed5\u4e8b\u4e2d\u306b\u306f\u77e5\u308b\u3053\u3068\u306e\u306a\u3044\u3001\u4ef2\u9593\u306e\u610f\u5916\u306a\u8da3\u5473\u306e\u8a71\u3082\u805e\u3051\u305f\u308a\u3057\u3066\u3068\u3066\u3082\u6709\u610f\u7fa9\u306a\u6642\u9593\u3067\u3057\u305f\u3002\n\n\u4eca\u56de\u3082\u305f\u304f\u3055\u3093\u98df\u3079\u3066\u3001\u305f\u304f\u3055\u3093\u98f2\u3093\u3067\u3001\u305f\u304f\u3055\u3093\u558b\u3063\u3066\u3001\u7b11\u3063\u3066\u3001\u30b2...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/84026016_101162654759032_4750301197389349175_n.jpg?_nc_cat=107&_nc_ohc=9vIdcwa70l4AX_8J6pC&_nc_ht=scontent.xx&oh=12e46592d1783963ccdac3b9799c8c17&oe=5EBC4BE2",
            isDetail: false,
            URL:"https://www.instagram.com/p/B72vJqMH8gL/"
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
.instagram_graph_api_area {
  width: 1000px;
  margin: 0 auto;
  padding: 30px 0 50px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;

    li {
      height: 250px;
      width: 250px;
      list-style: none;

      img {
        height: 250px;
        width: 250px;
        object-fit: cover;
        font-family: 'object-fit: cover;';

        /*IE対策*/
      }

      span {
        display: block;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 20px;
        line-height: 1.4;
        color: #fff;
        height: 250px;
        width: 250px;
        font-size: .9em;
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;

        &:hover {
          opacity: .9;
          background: linear-gradient(to right, #0276ae, #1445a3);
          transition: .3s;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .instagram_graph_api_area {
    width: 90%;
  }
}

@media screen and (max-width: 767px) {
  .instagram_graph_api_area ul {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
}

@media screen and (max-width: 767px) {
  .instagram_graph_api_area ul li {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 767px) {
  .instagram_graph_api_area ul li img {
    width: 100%;
    height: auto;
    font-family: none;

    /*IE対策*/
    object-fit: contain;
  }
}

@media screen and (max-width: 767px) {
  .instagram_graph_api_area ul li span {
    display: none;
  }
}

.instagram_graph_api_area_title {
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
  font-family: none;
  margin-bottom: 30px;
  line-height: 1;
  font-family: 'Lato', sans-serif;
  font-weight: 900;

  img {
    width: 100px;
  }

  span {
    display: block;
    font-size: 12px;
    font-weight: normal;
  }
}

.instagram_graph_api_area ul li {
  position: relative;
}
</style>