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
            detail: '\u3010\u63a1\u7528\u30b5\u30a4\u30c8\u66f4\u65b0\u306e\u304a\u77e5\u3089\u305b\u3011\n\u65b0\u305f\u306b\u793e\u54e1\u30a4\u30f3\u30bf\u30d3\u30e5\u30fc\u3092\uff15\u540d\u8ffd\u52a0\u3044\u305f\u3057\u307e\u3057\u305f\uff01\u672a\u7d4c\u9a13\u8005\u304b\u3089\u7d4c\u9a13\u8005\u307e\u3067\u3001\u5e45\u5e83\u304f\u53d6\u6750\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3057\u305f\u306e\u3067\u3001\u662f\u975e\u3054\u89a7\u304f\u3060\u3055\u3044\uff01 \u25bc\u8ffd\u52a0\u793e\u54e1\u7d39\u4ecb\u25bc\nhttps://www.dream-v.co.jp/recruit/people_vol8\nhttps://www.dream-v.co.jp/recruit/people_vol9...',
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/93385519_362806751300279_2657591895815080859_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=1Cu_-YNif2YAX_NSk6u&_nc_ht=scontent.cdninstagram.com&oh=09859a78097078d7fa3bda20de66ff3f&oe=5EC3B2CB",
            isDetail: false,
            URL:"https://www.instagram.com/p/B_ElQ5YnDHo/"
          },
          {
            title: '',
            detail: '\u30c9\u30ea\u30fc\u30e0\u30d3\u30b8\u30e7\u30f3\u3067\n\u958b\u767a\u306e\u4ed5\u4e8b\u3092\u3057\u3066\u3044\u308b\u793e\u54e1\u306e\n\u30a4\u30f3\u30bf\u30d3\u30e5\u30fc&\u64ae\u5f71\u3092\u884c\u3044\u307e\u3057\u305f\uff01\n\n\u524d\u8077\u306b\u3064\u3044\u3066\u3084\u30c9\u30ea\u30fc\u30e0\u30d3\u30b8\u30e7\u30f3\u3078\u306e\u5165\u793e\u306e\u7d4c\u7def\u3001\u73fe\u5728\u306e\u4ed5\u4e8b\u306b\u3064\u3044\u3066\u306a\u3069\u306a\u3069\u3001IT\u696d\u754c\u3078\u5165\u793e\u3092\u8003\u3048\u3066\u3044\u308b\u65b9\u304c\u6c17\u306b\u306a\u308b\u3067\u3042\u308d\u3046\u5185\u5bb9\u3092\u4e2d\u5fc3\u306b\u3001\u3044\u308d\u3044\u308d\u6b63\u76f4\u306a\u3068\u3053\u308d\u3092\u304a\u8a71\u3057\u3057\u3066\u3082\u3089\u3044\u307e\u3057\u305f\u3002\n\n\u4ed6\u306b\u3082\u30a4\u30f3\u30d5\u30e9\u3001IT\u30b5\u30dd\u30fc\u30c8\u30e1\u30f3\u30d0\u30fc\u306b\u3082\u305e\u304f\u305e\u304f\u30a4...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/91500891_568820580399314_3138554355321353098_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_ohc=uZIUFE5MvtsAX9EF-vx&_nc_ht=scontent.xx&oh=d9430dfa6e476a30ec0caaa670e77da4&oe=5EA68B5D",
            isDetail: false,
            URL:"https://www.instagram.com/p/B-WM6lcH-hz/"
          },
          {
            title: '',
            detail: '\u300aIT\u696d\u754c\u3092\u76ee\u6307\u3057\u305f\u3044\u2026\u305d\u3093\u306a\u5b66\u751f\u306e\u3042\u306a\u305f\u3078\u300b\n\n\u77e5\u8b58\u3084\u4eca\u307e\u3067\u5b66\u3093\u3067\u304d\u305f\u3053\u3068\u304c\u3001\u9055\u3046\u304b\u3089\u3001\n\u81ea\u5206\u306b\u306f\u3067\u304d\u306a\u3044\u3093\u3058\u3083\u306a\u3044\u304b\u2026\n\u305d\u3093\u306a\u6c17\u6301\u3061\u3092\u62b1\u3048\u3066\u3001\nIT\u696d\u754c\u3092\u3042\u304d\u3089\u3081\u3066\u3044\u308b\u5b66\u751f\u3055\u3093\u306f\n\u591a\u3044\u306e\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\u3002\n\n\u5f0a\u793e\u306f\u5b66\u751f\u6642\u4ee3\u306b\u3084\u3063\u3066\u304d\u305f\u3053\u3068\u3084\u3001\n\u3053\u308c\u304b\u3089\u3084\u308a\u305f\u3044\u3053\u3068\u3092\u3057\u3063\u304b\u308a\u805e\u304d\u3001\n\u672a\u7d4c\u9a13\u3084\u77e5\u8b58\u304c\u306a\u304f\u3066\u3082\u3001\n\u7406\u60f3\u306e\u30a8\u30f3\u30b8\u30cb\u30a2...',
            img: "https://scontent-nrt1-1.xx.fbcdn.net/v/t51.2885-15/90036603_207553613642641_5986283886680539066_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=R_z_H_QETI8AX8jMWsl&_nc_ht=scontent-nrt1-1.xx&oh=02a54f9ae46ecd389357cc769dbc7994&oe=5EC777FB",
            isDetail: false,
            URL:"https://www.instagram.com/p/B9n4DMkH7--/"
          },
          {
            title: '',
            detail: '\u3010\u544a\u77e5\u3011\u30c9\u30ea\u30fc\u30e0\u30d3\u30b8\u30e7\u30f3\u682a\u5f0f\u4f1a\u793e_21\u65b0\u5352\u63a1\u7528\u958b\u59cb\uff01\uff01#11\n\n\u544a\u77e5\u52d5\u753b\u306e\u66f4\u65b0\u3068\u5171\u306b\uff01\n\u30c9\u30ea\u30fc\u30e0\u30d3\u30b8\u30e7\u30f3\u3067\u306f\u65b0\u5352\uff12\uff11\u63a1\u7528\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u958b\u59cb\u3044\u305f\u3057\u307e\u3057\u305f\uff01\nIT\u696d\u754c\u306b\u8208\u5473\u3092\u6301\u3063\u3066\u3044\u308b\u3051\u308c\u3069\u3001\u672c\u5f53\u306b\u50cd\u3051\u308b\u306e\u304b\u4e0d\u5b89\u2026\u30a8\u30f3\u30b8\u30cb\u30a2\u3092\u76ee\u6307\u3057\u305f\u3044\u304c\u81ea\u5206\u306f\u6587\u7cfb\u3060\u304b\u3089\u3064\u3044\u3066\u3051\u308b\u304b\u4e0d\u5b89\u2026\u306a\u3069\u306a\u3069\u3002\n\u4e0d\u5b89\u3092\u62b1\u3048\u3066\u3044\u308b\u5b66\u751f\u3082\u591a\u3044\u3068\u601d\u3044\u307e\u3059...',
            img: "https://scontent-nrt1-1.xx.fbcdn.net/v/t51.2885-15/87594854_599659540882394_2160720676951800081_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=5JGcOoVpOSsAX_kBcF3&_nc_ht=scontent-nrt1-1.xx&oh=5e9df75119404ded63fd28542e85f1e7&oe=5EC93895",
            isDetail: false,
            URL:"https://www.instagram.com/p/B9YcSgCnuNt/"
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