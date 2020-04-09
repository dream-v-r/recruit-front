<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol8" />
      <DetailInfo
        number="08"
        title="諦めかけた、IT業界にもう一度挑戦できたことが嬉しいです。"
        year="2018年入社 | 中途採用"
        name="H.R."
        post="インフラエンジニア"
        class="vol8"
      />
      <DetailContent
        firstTitle="一度諦めていたIT業界にもう一度"
        firstText="前職では、建築業界で約３年、営業をしていました。主な仕事内容としては、新規既存顧客への訪問営業、見積もり作成、現場監督、図面作成など多岐にわたる業務を行っていました。IT業界に転職した理由は営業に就く前に、情報処理の専門学校に通っていたのですが、当時はITに抵抗感が、生まれてしまい、一度挫折してしまいました。転職を考えていた時に、再度IT業界に挑戦しようと考えていた時に、その時に出会ったのがドリームビジョンです。新人に対しての研修制度や、未経験から活躍している社員が多いこと、また会長や社長の想いに共感できたことが、入社の決め手になりました。"
        secondTitle="現場での環境が<br>日々の勉強意欲を高めている"
        secondText="現在はISPのバックボーンネットワークの設計構築運用を行っています。設定変更作業、作業手順書の作成、検証が主な業務になります。毎月いくつか作業があるので、それに応じて、現場の方へのヒアリング、要件整理を行い業務を進めています。<br>
        また、プロジェクトに参画してから、自分の中で大きな変化がありました。それは、未経験の業界に転職して新しく覚えなければいけない知識がたくさんあるので、日々に勉強なんですが、それを続けていくことで今では習慣となり、新しい知識を覚えるのが楽しくなりました。勉強をすることで、業務に対するモチベーションや自分自身の成長意欲が付いたことが大きな変化だと感じています。"
        thirdTitle="より良い会社にしていくことに<br>携わりたい"
        thirdText="ドリームビジョンは、エンジニアとして成長していく上で、必要な福利厚生が揃っていると思います。書籍補助申請、資格補助制度など、やる気さえあれば成長できる環境が整っています。私は待っているだけでなく、この環境を活かして自分自身が成長していくことが大切だと思います。<br>
        今後は、クラウド関係に携わっていきたいと思っており、勉強しいつでも即戦力に慣れるように、準備を進めたいと思っております。また、ネットワークエンジニアとして仕事をしていく上で、日本人以外の方との仕事も増えてくるので、英語のスキルが必要な場面が多くあると感じていました。ドキュメントを読む際や外国人のエンジニアが現場にいることもあるので、英語のスキルがあることで業務の効率化や円滑化に繋がること、自分がチャンスを掴める可能性が増えることがあるので、勉強していきたいと思います。"
        class="vol8"
      />
      <ThePeopleSlider
        url="/people_index"
        class="vol8"
        title="一覧に戻る"
      />
    </div>
  </main>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  import DetailKeyVisual from '../components/People/DetailKeyVisual'
  import DetailInfo from '../components/People/DetailInfo'
  import DetailContent from '../components/People/DetailContent'
  import ThePeopleSlider from '../components/layouts/ThePeopleSlider'

  export default {
    components: { DetailKeyVisual, DetailInfo, DetailContent, ThePeopleSlider },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: '社員紹介 vol8',
          description: 'ドリームビジョン株式会社の社員(vol.8)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.8',
          url: 'people_vol8'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .peopleDetail {
    background: #f7f7f7;
  }
</style>
