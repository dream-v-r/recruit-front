<template>
  <main>
    <div>
      <KeyVisual class="careerup" />
      <Requirements02 class="careerup" />
      <System03 class="careerup" />
      <System04 class="careerup" />
      <System05 class="careerup" />
      <ThePeopleSlider
        url="/people_index"
        class="careerup"
        title="READ MORE"
      />
    </div>
  </main>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  import KeyVisual from '../../components/Job/KeyVisual'
  import Requirements02 from '../../components/Job/Requirements02'
  import System03 from '../../components/Job/System03'
  import System04 from '../../components/Job/System04'
  import System05 from '../../components/Job/System05'
  import ThePeopleSlider from '../../components/layouts/ThePeopleSlider'

  export default {
    components: { KeyVisual, Requirements02, System03, System04, System05, ThePeopleSlider },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: '中途採用 - 募集要項',
          description: 'ドリームビジョン株式会社の中途採用の情報ををご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,募集',
          url: '/job/career'
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  .careerup {
    color: #333;
  }
</style>
