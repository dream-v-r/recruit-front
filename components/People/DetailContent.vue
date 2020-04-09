<template>
  <section class="detail">
    <div class="detailContent detailContent--01">
      <div class="inner">
        <div class="txtBox">
          <h3
            v-html="firstTitle"
          />
          <p
            v-html="firstText"
          />
        </div>
      </div>
    </div>
    <div class="detailContent detailContent--02">
      <div class="inner">
        <div class="txtBox">
          <h3
            v-html="secondTitle"
          />
          <p
            v-html="secondText"
          />
        </div>
      </div>
    </div>
    <div class="detailContent detailContent--03">
      <div class="inner">
        <div class="txtBox">
          <h3
            v-html="thirdTitle"
          />
          <p
            v-html="thirdText"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    props: {
      firstTitle: {
        type: String,
        default: ''
      },
      firstText: {
        type: String,
        default: ''
      },
      firstText02: {
        type: String,
        default: ''
      },
      secondTitle: {
        type: String,
        default: ''
      },
      secondText: {
        type: String,
        default: ''
      },
      thirdTitle: {
        type: String,
        default: ''
      },
      thirdText: {
        type: String,
        default: ''
      }
    }
  }

</script>

<style scoped lang="scss">

  .detail {
    &Content {
      margin: 0 0 50px;
      .inner {
        max-width: 1000px;
        margin: 0 auto;
        padding: 90px 0 0;
        @include _mqmax() {
          max-width: 90%;
        }
        .txtBox {
          background: #FFF;
          padding: 70px 80px;
          width: 600px;
          @include _mqmax() {
            padding: 30px 26px;
          }
          h3 {
            color: #029ae4;
            font-size: 28px;
            font-weight: bold;
            line-height: 1.5;
            margin: 0 0 20px;
            letter-spacing: -.1em;
            @include _mqmax() {
              font-size: 21px;
              br {
                display: none;
              }
            }
          }
          p {
            font-size: 15px;
            line-height: 1.8;
            text-align: justify;
            @include _mqmax() {
              font-size: 14px;
            }
          }
        }
      }
      &--01 {
        .inner {
          padding: 170px 0 0;
          .txtBox {
            margin: 0 0 0 400px;
            @include _mqmax() {
              width: 90%;
              margin: 0 0 0 10%;
            }
          }
        }
      }
      &--02 {
        padding: 420px 0 0;
        position: relative;
        overflow: hidden;
        @include _mqmax() {
          padding: 180px 0 0;
        }
        &:before {
          content: "";
          width: 100%;
          height: 527px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        .inner {
          padding: 0;
          .txtBox {
            margin: 0 auto;
            position: relative;
            z-index: 2;
            @include _mqmax() {
              width: 100%;
            }
          }
        }
      }
      &--03 {
        margin: 0;
        .inner {
          padding: 170px 0 130px;
          .txtBox {
            @include _mqmax() {
              width: 90%;
              margin: 0 10% 0 0;
            }
          }
        }
      }
    }
    &.vol1 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol01/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol01/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol01/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol01/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol01/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol01/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
    &.vol2 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol02/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol02/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol02/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol02/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol02/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol02/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
    &.vol3 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol03/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol03/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol03/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol03/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol03/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol03/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
    &.vol4 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol04/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol04/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol04/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol04/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol04/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol04/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
    &.vol5 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol05/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol05/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol05/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol05/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol05/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol05/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
    &.vol6 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol06/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol06/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol06/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol06/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol06/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol06/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
    &.vol7 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol07/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol07/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol07/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol07/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol07/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol07/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
    &.vol8 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol08/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol08/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol08/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol08/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol08/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol08/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
    &.vol9 {
      .detailContent {
        &--01 {
          background: url(~assets/img/people/detail/vol09/bg_content_01_pc.jpg) no-repeat top left;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol09/bg_content_01_sp.jpg) no-repeat top left;
            background-size: 80%;
          }
        }
        &--02 {
          &:before {
            background: url(~assets/img/people/detail/vol09/bg_content_02_pc.jpg) no-repeat top center;
            background-size: cover;
            @include _mqmax() {
              background: url(~assets/img/people/detail/vol09/bg_content_02_sp.jpg) no-repeat top center;
              background-size: 100%;
            }
          }
        }
        &--03 {
          background: url(~assets/img/people/detail/vol09/bg_content_03_pc.jpg) no-repeat top right;
          @include _mqmax() {
            background: url(~assets/img/people/detail/vol09/bg_content_03_sp.jpg) no-repeat top right;
            background-size: 80%;
          }
        }
      }
    }
  }

</style>