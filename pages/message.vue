<template>
  <main>
    <KeyVisual class="message" />
    <Section01 class="message" />
    <Section02 class="message" />
    <Section03 class="message" />
  </main>
</template>

<script>
  import KeyVisual from '../components/Message/KeyVisual'
  import Section01 from '../components/Message/Section01'
  import Section02 from '../components/Message/Section02'
  import Section03 from '../components/Message/Section03'

  export default {
    components: { KeyVisual, Section01, Section02, Section03 },
    head () {
      return {
        title: '採用情報 - メッセージ - ドリームビジョン株式会社',
        description: 'ドリームビジョン株式会社の会長・社長のメッセージをご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
        keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,メッセージ,役員メッセージ,会長,社長',
        url: 'message'
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
