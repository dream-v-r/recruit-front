<template>
  <main>
    <div>
      <KeyVisual class="people" />
      <PeopleList class="people" />
    </div>
  </main>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  import KeyVisual from '../components/People/KeyVisual'
  import PeopleList from '../components/People/PeopleList'

  export default {
    components: { KeyVisual, PeopleList },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: '社員紹介-一覧',
          description: 'ドリームビジョン株式会社の社員をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事',
          url: 'people_index'
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
