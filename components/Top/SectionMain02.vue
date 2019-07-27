<template>
  <section class="main-section">
    <div class="inner">
      <div class="section-block block">
        <div class="section-inner">
          <div class="bg"></div>
          <div class="img01">
            <img
              src="~/assets/img/top/section02_img01.jpg"
              alt=""
            >
          </div>
          <div class="img02">
            <img
              src="~/assets/img/top/section02_img02.jpg"
              alt=""
            >
          </div>
        </div>
        <div class="feature section-feature">
          <SectionMainTitle
            number="02"
            title="Culture"
            comment="社員の笑顔の源。社員の声から生まれる"
            class="title"
          />
          <SectionMainFeature
            title="福利厚生・社風"
            detail="大手IT企業にも負けない様々な福利厚生や<br>社員サポートを行っております。"
            url="culture"
            class="content"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionMainTitle from './SectionMainTitle'
  import SectionMainFeature from './SectionMainFeature'

  export default {
    name: 'SectionMain02',
    components: { SectionMainFeature, SectionMainTitle }
  }
</script>

<style scoped lang="scss">
  .main-section {
    position: relative;
    > .inner {
      max-width: 1596px;
      margin-left: auto;
      /*background-image: url();*/
      background-position: left 420px;
      > .block {
      }
    }
  }

  .section-block {
    > .feature {
      position: absolute;
      top: -43px;
      left: 51.75695%;
      width: 625px;
    }
  }

  .section-inner {
    position: relative;
    > .bg {
      background-color: beige;
      padding-top: 562px;
      width: calc(100% - 230px);
      margin-left: auto;
    }
    > .img01 {
      position: absolute;
      max-width: 1183px;
      top: 67px;
    }
    > .img02 {
      margin-top: -47px;
      margin-left: 21.22986%;
    }
  }
  .section-feature {
    > .content {
      margin-top: 122px;
      margin-left: -8.052708638
    }
    > .title {
      margin-left: 182px;
    }
  }
</style>
