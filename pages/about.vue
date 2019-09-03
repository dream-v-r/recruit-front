<template>
  <main>
    <KeyVisual class="about" />
    <Section01 class="about" />
    <Section02 class="about" />
    <Section03 class="about" />
  </main>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  import KeyVisual from '../components/About/KeyVisual'
  import Section01 from '../components/About/Section01'
  import Section02 from '../components/About/Section02'
  import Section03 from '../components/About/Section03'

  export default {
    components: { KeyVisual, Section01, Section02, Section03 },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: '会社概要',
          description: 'ドリームビジョン株式会社の会社概要をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,中途採用,会社概要',
          url: 'message'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    color: $mainColor;
  }
  .top-main {
    > .section {
      margin-top: 120px;
      border-bottom: 1px solid #999;
      @include _mqmax(){
        margin-top: 50px;
      }
    }
    > .banner {
      border-bottom: 1px solid #999;
    }
    > .news {
      margin-top: -65px;
      position: relative;
      z-index: 1;
      @include _mqmax() {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
</style>
