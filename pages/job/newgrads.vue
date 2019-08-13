<template>
  <main>
    <div>
      <KeyVisual class="newgrads" />
      <Requirements01 class="newgrads" />
      <System01 class="newgrads" />
      <System02 class="newgrads" />
      <ThePeopleSlider
        url="/people_index"
        class="newgrads"
        title="READ MORE"
      />
    </div>
  </main>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  import KeyVisual from '../../components/Job/KeyVisual'
  import Requirements01 from '../../components/Job/Requirements01'
  import System01 from '../../components/Job/System01'
  import System02 from '../../components/Job/System02'
  import ThePeopleSlider from '../../components/layouts/ThePeopleSlider'

  export default {
    components: { KeyVisual, Requirements01, System01, System02, ThePeopleSlider },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: '採用情報 - 新卒採用 - ドリームビジョン株式会社',
          description: 'ドリームビジョン株式会社の新卒採用の情報ををご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,募集',
          url: '/job/newgrads'
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  .newgrads {
    color: #333;
  }
</style>
