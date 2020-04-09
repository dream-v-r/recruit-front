<template>
  <section class="detailInfo">
    <div class="inner">
      <h2 class="title">
        <img
          :src="titleImgPath"
          :alt="title"
          class="pc"
        >
        <img
          :src="titleImgPathSp"
          :alt="title"
          class="sp"
        >
      </h2>
      <div class="info">
        <span class="year">{{ year }}</span>
        <span class="name">{{ name }}</span>
        <span class="ruby">{{ ruby }}</span>
        <span class="post">{{ post }}</span>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    props: {
      number: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      year: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      ruby: {
        type: String,
        default: ''
      },
      post: {
        type: String,
        default: ''
      },
      sp: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      titleImgPath: function() {
        return require(`~/assets/img/people/detail/vol${this.number}/ttl_key_pc.png`)
      },
      titleImgPathSp: function() {
        return require(`~/assets/img/people/detail/vol${this.number}/ttl_key_sp.png`)
      }
    }
  }
</script>

<style scoped lang="scss">

  .detailInfo {
    margin: -224px 0 74px;
    @include _mqmax() {
      margin: -170px 0 74px;
    }
    .inner {
      max-width: 1000px;
      margin: 0 auto;
      padding: 90px 0 0;
      @include _mqmax() {
        max-width: 90%;
      }
      h2 {
        margin: 0 0 80px;
      }
      .info {
        background: linear-gradient(to right, #0275ae, #1445a3);
        width: 460px;
        height: 230px;
        padding: 40px 60px;
        @include _mqmax() {
          max-width: 100%;
          padding: 30px;
          height: auto;
        }
        .year {
          color: #CCC;
          display: block;
          font-size: 12px;
          margin: 0 0 16px;
          @include _mqmax() {
            margin: 0 0 6px;
          }
        }
        .name {
          color: #FFF;
          display: block;
          font-size: 32px;
          font-weight: bold;
          @include _mqmax() {
            display: inline-block;
            font-size: 20px;
          }
        }
        .ruby {
          color: #FFF;
          display: block;
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          font-weight: bold;
          margin: 0 0 22px;
          @include _mqmax() {
            display: inline-block;
            margin: 0 0 10px 10px;
          }
        }
        .post {
          color: #FFF;
          display: block;
          font-size: 14px;
        }
      }
    }
    &.vol1 {
      background: url(~assets/img/people/detail/vol01/bg_detailInfo_pc.jpg) no-repeat top center;
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol01/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 36px 0 0;
          h2 {
            width: 162px;
            margin: 0 0 100px 20px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    &.vol2 {
      background: url(~assets/img/people/detail/vol02/bg_detailInfo_pc.jpg) no-repeat top center;
      .inner {
        padding: 100px 0 0;
        h2 {
          margin: 0 0 70px 30px;
        }
      }
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol02/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 20px 0 0;
          h2 {
            width: 152px;
            margin: 0 0 160px 20px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    &.vol3 {
      background: url(~assets/img/people/detail/vol03/bg_detailInfo_pc.jpg) no-repeat top center;
      .inner {
        padding: 120px 0 0;
        h2 {
          margin: 0 0 110px;
        }
      }
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol03/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 34px 0 0;
          h2 {
            width: 210px;
            margin: 0 0 140px 20px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    &.vol4 {
      background: url(~assets/img/people/detail/vol04/bg_detailInfo_pc.jpg) no-repeat top center;
      .inner {
        padding: 110px 0 0;
        h2 {
          margin: 0 0 60px -20px;
        }
      }
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol04/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 154px 0 0;
          h2 {
            width: 272px;
            margin: 0 0 20px 20px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    &.vol5 {
      background: url(~assets/img/people/detail/vol05/bg_detailInfo_pc.jpg) no-repeat top center;
      .inner {
        padding: 130px 0 0;
        h2 {
          margin: 0 0 100px -10px;
        }
      }
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol05/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 24px 0 0;
          h2 {
            width: 206px;
            margin: 0 0 110px 10px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    &.vol6 {
      background: url(~assets/img/people/detail/vol06/bg_detailInfo_pc.jpg) no-repeat top center;
      .inner {
        padding: 180px 0 0;
        h2 {
          margin: 0 0 110px -30px;
        }
      }
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol06/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 36px 0 0;
          h2 {
            width: 181px;
            margin: 0 0 130px 10px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    &.vol7 {
      background: url(~assets/img/people/detail/vol07/bg_detailInfo_pc.jpg) no-repeat top center;
      .inner {
        padding: 110px 0 0;
        h2 {
          margin: 0 0 90px -50px;
        }
      }
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol07/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 36px 0 0;
          h2 {
            width: 182px;
            margin: 0 0 130px 10px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    &.vol8 {
      background: url(~assets/img/people/detail/vol08/bg_detailInfo_pc.jpg) no-repeat top center;
      .inner {
        padding: 110px 0 0;
        h2 {
          margin: 0 0 90px -50px;
        }
      }
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol08/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 36px 0 0;
          h2 {
            width: 182px;
            margin: 0 0 130px 10px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
      &.vol9 {
      background: url(~assets/img/people/detail/vol09/bg_detailInfo_pc.jpg) no-repeat top center;
      .inner {
        padding: 110px 0 0;
        h2 {
          margin: 0 0 90px -50px;
        }
      }
      @include _mqmax() {
        background: url(~assets/img/people/detail/vol09/bg_detailInfo_sp.jpg) no-repeat top center;
        background-size: 90%;
        .inner {
          padding: 36px 0 0;
          h2 {
            width: 182px;
            margin: 0 0 130px 10px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }

</style>