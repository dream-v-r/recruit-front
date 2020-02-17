<template>
  <main>
    <div>
      <KeyVisual class="companyStyle" />
      <LinkNav01 class="companyStyle" />
      <Culture01 class="companyStyle" />
      <CultureVoice class="companyStyle" />
    </div>
  </main>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  import KeyVisual from '../components/Culture/KeyVisual'
  import LinkNav01 from '../components/Culture/LinkNav01'
  import Culture01 from '../components/Culture/Culture01'
  import CultureVoice from '../components/Culture/CultureVoice'

  export default {
    components: { KeyVisual, LinkNav01, Culture01, CultureVoice },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: '社員アンケートからひも解く社風 - 福利厚生・社風',
          description: 'ドリームビジョン株式会社の福利厚生・社風をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,中途採用,社風,福利厚生',
          url: 'culture-company-style'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
