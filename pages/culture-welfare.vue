<template>
  <main>
    <div>
      <KeyVisual class="welfare" />
      <LinkNav02 class="welfare" />
      <Culture02 class="welfare" />
      <Culture03 class="welfare" />
    </div>
  </main>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  import KeyVisual from '../components/Culture/KeyVisual'
  import LinkNav02 from '../components/Culture/LinkNav02'
  import Culture02 from '../components/Culture/Culture02'
  import Culture03 from '../components/Culture/Culture03'

  export default {
    components: { KeyVisual, LinkNav02, Culture02, Culture03 },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: '採用情報 - 福利厚生・社風-ドリームビジョン株式会社',
          description: 'ドリームビジョン株式会社の福利厚生・社風をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,中途採用,社風,福利厚生',
          url: 'culture-welfare'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
