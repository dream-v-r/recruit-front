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
            detail: '\u3010\u544a\u77e5\u3011\u30c9\u30ea\u30fc\u30e0\u30d3\u30b8\u30e7\u30f3\u682a\u5f0f\u4f1a\u793e_21\u65b0\u5352\u63a1\u7528\u958b\u59cb\uff01\uff01#11\n\n\u544a\u77e5\u52d5\u753b\u306e\u66f4\u65b0\u3068\u5171\u306b\uff01\n\u30c9\u30ea\u30fc\u30e0\u30d3\u30b8\u30e7\u30f3\u3067\u306f\u65b0\u5352\uff12\uff11\u63a1\u7528\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u958b\u59cb\u3044\u305f\u3057\u307e\u3057\u305f\uff01\nIT\u696d\u754c\u306b\u8208\u5473\u3092\u6301\u3063\u3066\u3044\u308b\u3051\u308c\u3069\u3001\u672c\u5f53\u306b\u50cd\u3051\u308b\u306e\u304b\u4e0d\u5b89\u2026\u30a8\u30f3\u30b8\u30cb\u30a2\u3092\u76ee\u6307\u3057\u305f\u3044\u304c\u81ea\u5206\u306f\u6587\u7cfb\u3060\u304b\u3089\u3064\u3044\u3066\u3051\u308b\u304b\u4e0d\u5b89\u2026\u306a\u3069\u306a\u3069\u3002\n\u4e0d\u5b89\u3092\u62b1\u3048\u3066\u3044\u308b\u5b66\u751f\u3082\u591a\u3044\u3068\u601d\u3044\u307e\u3059...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/87594854_599659540882394_2160720676951800081_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=lnTaaGKYpxIAX8rQtW3&_nc_ht=scontent.xx&oh=63846463cf90af0a0501e7ee0ff2942b&oe=5E80656B",
            isDetail: false,
            URL:"https://www.instagram.com/p/B9YcSgCnuNt/"
          },
         {
            title: '',
            detail: '\u4eca\u6708\u3082\u5f0a\u793e\u798f\u5229\u539a\u751f\u306e\u4e00\u3064\u3001\n\u3010BENEFIT ONE\u3011\u304b\u3089\u518a\u5b50\u304c\u5c4a\u304d\u307e\u3057\u305f\u266a\n\n\u6620\u753b\u3084\u98f2\u98df\u5e97\u306e\u5272\u5f15\u60c5\u5831\u304c\u76db\u308a\u3060\u304f\u3055\u3093\uff01\n\n\u305d\u306e\u4ed6\u306b\u3082\u5f0a\u793e\u306f\u798f\u5229\u539a\u751f\u3092\u5145\u5b9f\u3055\u305b\u3066\u3044\u307e\u3059\u266a \u25bc\u25bd\u798f\u5229\u539a\u751f\u306e\u8a73\u7d30\u306f\u3053\u3061\u3089\u25bc\u25bd\nhttps://www.dream-v.co.jp/recruit/culture-welfare\n\n#\u798f\u5229\u539a\u751f #benefitone #\u5145\u5b9f #\u30e9\u30a4\u30d5\u30ef\u30fc\u30af\u30d0\u30e9\u30f3\u30b9...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/85257793_213297733388602_2810716193415598554_n.jpg?_nc_cat=105&_nc_ohc=hhOcrRTS5lMAX-E2QSO&_nc_ht=scontent.xx&oh=dae1494f3ed4f32f9ee3538b681fefc5&oe=5E8CF0E6",
            isDetail: false,
            URL:"https://www.instagram.com/p/B9DtoFHndb5/"
          },
          {
            title: '',
            detail: '\u6628\u65e5\u3001\u958b\u767a\u30c1\u30fc\u30e0\u306e\u7814\u4fee\u304c\u884c\u308f\u308c\u307e\u3057\u305f\uff01\n\n\u958b\u767a\u30c1\u30fc\u30e0\u306eS\u3055\u3093\u3092\u8b1b\u5e2b\u306b\u3001\n\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u30ad\u30e3\u30ea\u30a2\u306b\u3064\u3044\u3066\u3084\u3001\n\u305d\u308c\u305e\u308c\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u56f0\u3063\u3066\u3044\u308b\u3053\u3068\u7b49\u306e\n\u5171\u6709\u3092\u884c\u3044\u307e\u3057\u305f\u3002\n\n\u7814\u4fee\u7d42\u4e86\u5f8c\u306f\u793e\u5185\u3067\u61c7\u89aa\u4f1a\u3092\u884c\u3044\u3001\n\u5927\u4eba\u6570\u306e\u4e2d\u3067\u306f\u666e\u6bb5\u306a\u304b\u306a\u304b\u8a71\u305b\u306a\u3044\u30c1\u30fc\u30e0\u3067\u306e\n\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u751f\u307e\u308c\u307e\u3057\u305f\u3002\n\n#\u958b\u767a #\u30a8\u30f3\u30b8\u30cb\u30a2 #\u7814\u4fee #\u61c7\u89aa\u4f1a...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/84961420_646395972782737_4054178423532144544_n.jpg?_nc_cat=101&_nc_ohc=i4ae1hJ-HVcAX9EZoco&_nc_ht=scontent.xx&oh=e4844ed4539cb837dd292450bfc241b9&oe=5E761E67",
            isDetail: false,
            URL:"https://www.instagram.com/p/B8xzJgFHFUd/"
          },
          {
            title: '',
            detail: '\u30103\u670814\u65e5\uff08\u571f\uff0913:00\uff5e\u958b\u50ac\u3011DreamVision presents seminar F!NE \u958b\u50ac\uff01\uff01 \u300a\u300a\u300a\u5143Yahoo\uff01JAPAN\u306ePM\u304c\u8a9e\u308b\n\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e1\u30f3\u30c8\u6210\u529f/\u5931\u6557\u4e8b\u4f8b\u300b\u300b\u300b \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3068\u3057\u3066\u3001\n\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6210\u529f\u3055\u305b\u308b\u305f\u3081\u306b\u306f\u3001\n\u77e5\u8b58\u306f\u3055\u308b\u3053\u3068\u306a\u304c\u3089\u3001\u73fe\u5834\u7d4c\u9a13\u3092\u7a4d\u307f\u91cd\u306d\u3001\n\u5931\u6557\u3084\u6210\u529f\u306e\u4f53\u9a13\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\n\u305d\u3093\u306a\u4e2d\u3001\u77e5\u8b58...',
            img: "https://scontent.xx.fbcdn.net/v/t51.2885-15/84771333_189918205691843_7941844968433614532_n.jpg?_nc_cat=106&_nc_ohc=CEeLDOugabcAX_l3Rvx&_nc_ht=scontent.xx&oh=b01263a60e532cc0b6fd686ccef690f2&oe=5E756B9E",
            isDetail: false,
            URL:"https://www.instagram.com/p/B8s5ghlnKwA/"
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