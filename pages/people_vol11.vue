<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol11" />
      <DetailInfo
        number="11"
        title="夢中になれたプログラミングを仕事に。開発エンジニアへの道。"
        year="2019年入社 | 中途採用"
        name="O.T."
        post="開発エンジニア"
        class="vol11"
      />
      <DetailContent
        firstTitle="多くの人との出会いを通じて、<br>開発エンジニアのスペシャリストを目指す。"
        firstText="前職は社会インフラ系の企業で、技術職として働き、設備の設計、工事の手配など、責任とやりがいを感じていました。最初はProgateや無料で学べるコンテンツから、プログラミングの勉強を始め、気がつくと、時間を忘れてプログラミングをしてることに気付き、それと同時に、今後の自分のキャリアを考えた時に、開発エンジニアになりたいと思うようになりました。少しずつ就職活動をし、その中でドリームビジョンに出会い、決めました。このIT業界にはいくつかの働き方があります。自社開発や受託開発、客先常駐（プロジェクト参画型）など。私はその中で、様々な環境で、いろんなエンジニアの方々と出会い、スキルアップをすることができる、プロジェクト参画型の客先常駐を選びました。"
        secondTitle="エンジニアのキャリアプランを尊重し、聞いてくれる。"
        secondText="現在は社内業務のワークフローシステム開発に携わっています。そこでは開発フェーズから担当しています。未経験からの初の現場なので、知識やスキル不足を痛感しながらも、日々自分ができることが増えている嬉しさも同時に感じながら、業務に取り込んでいます。<br>
        また、私は未経験でドリームビジョンに入社しました。新人研修はe-ランニングを中心に、実際にプロジェクトに参画にしている先輩社員のトレーナーが付き、現場で必要なツールや、スキルをリアルタイムで教えてもらえることがプロジェクトに参画する上で安心感に繋がりよかったです。また、企業としてエンジニア、一人ひとりのキャリアプランやビジョンを実現させるために会社として、サポートするという想いが会長や社長の面談を通して伝わってきました。仕事、だけではなく私のキャリアプランをしっかり聞いてくれたのものドリームビジョンに入社を決めた理由です。"
        thirdTitle="これから成長していく<br>ドリームビジョンの<br>採用・教育にも関わっていきたい。"
        thirdText="ドリームビジョンは成長中の企業で、すでに在籍する社員の中に多くの優秀なエンジニアや熱い想いを持つエンジニアがいます。そして、会社を大きくしていくために、日々新しいエンジニアの採用に力を入れおり、新人研修はもちろんですが、スキル向上のセミナーも定期的に行っているところが魅力です。自分自身としては、今は開発スキルと知識の向上に注力しながら、将来的にはフルスタックエンジニアとして幅広い知識とスキルを身に付けたいと考えています。また、現場で培ったスキル・知識を後進の教育や開発エンジニアの採用にも生かしていきたいと思っています。"
        class="vol11"
      />
      <ThePeopleSlider
        url="/people_index"
        class="vol11"
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
          title: '社員紹介 vol11',
          description: 'ドリームビジョン株式会社の社員(vol.11)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.11',
          url: 'people_vol11'
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
