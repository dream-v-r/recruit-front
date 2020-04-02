<template>
  <main>
    <KeyVisual class="career_entry2" />
    <Section01 class="career_entry2" />
    <Section02 class="career_entry2" />
  </main>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  import KeyVisual from '../components/Career_entry2/KeyVisual'
  import Section01 from '../components/Career_entry2/Section01'
  import Section02 from '../components/Career_entry2/Section02'

  export default {
    components: { KeyVisual, Section01, Section02 },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: 'キャリアエントリー',
          description: 'ドリームビジョンのキャリア向け求人情報です。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,中途採用',
          url: 'career_entry2'
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
