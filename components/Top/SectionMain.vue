<template>
  <div>
    <section class="main-section">
      <div class="inner">
        <div class="section-block block">
          <div class="img01">
            <img
              src="~/assets/img/top/section01_img01.jpg"
              alt=""
            >
          </div>
          <div class="img02">
            <img
              src="~/assets/img/top/section01_img02.jpg"
              alt=""
            >
          </div>
          <div class="img03">
            <img
              src="~/assets/img/top/section01_img03.jpg"
              alt=""
            >
          </div>
          <div class="feature section-feature">
            <SectionMainTitle
              number="01"
              title="people"
              comment="一人一人のキャリアとプライベートを全力で応援"
            />
            <div class="feature-content content">
              <h3 class="title">
                社員紹介
              </h3>
              <p class="detail">
                希望の働き方を実現した社員の声をご紹介。
              </p>
              <SectionMainBtn url="people_index" class="btn"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import SectionMainTitle from './SectionMainTitle'
  import SectionMainBtn from './SectionMainBtn'

  export default {
    name: 'SectionMain',
    components: { SectionMainBtn, SectionMainTitle }
  }
</script>
<style scoped lang="scss">
  .main-section {
    padding-bottom: 209px;
    > .inner {
      max-width: 1366px;
      margin-right: auto;
      margin-left: auto;
      > .block {
        margin-left: 183px;
      }
    }
  }
  .section-block {
    position: relative;
    > .img01 {
      text-align: right;
      margin-bottom: 60px;
    }
    > .img02 {
      padding-top: 42px;
      margin-left: 16.56804%;
    }
    > .img03 {
      position: absolute;
      top: 452px;
      right: 260px;

    }
    > .feature {
      position: absolute;
      top: -37px;
      left: 0;
      width: 568px;
    }
  }
  .section-feature {
    .content {
      margin-top: 104px;
    }
  }
  .feature-content {
    > .title {
      font-size: 24px;
    }
    > .detail {
      margin-top: 14px;
      font-size: 15px;
    }
    > .btn {
      margin-top: 38px;
      max-width: 205px;
    }
  }
</style>
