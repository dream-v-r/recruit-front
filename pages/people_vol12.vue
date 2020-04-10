<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol12" />
      <DetailInfo
        number="12"
        title="一人一人の目指すキャリアを尊重してくれる。だから、私は前向きに働ける。"
        year="2018年入社 | 中途採用"
        name="S.S."
        post="ITサポート"
        class="vol12"
      />
      <DetailContent
        firstTitle="エンジニアの声を聞くうちに、<br>自分も技術を学びたいという<br>気持ちに"
        firstText="前職は医療系ソフトウェアのカスタマーサポート、保育士、事務職の派遣社員など幅広く経験していました。自分の経験を活かせるのではないかと思い、ソフトウェアやITの営業職を検討している際に、ドリームビジョンに出会いました。面談では、私の前職と希望の営業職、また、今後挑戦してみたいこと、双方を活かせるような仕事がないかなど、一緒に親身に考えていただきました。また、社長の人柄と、自分の中の「やってみたい！」という前向きな気持ちを引き出してくれるような会社の雰囲気に心惹かれて、入社を決めました。そこで、まずは本社で営業職からスタートし、現場のエンジニアと会話するところから、始めました。そんな中、エンジニアのやりたいことやキャリアプラン、取得したいスキルを聞いているうちに、現場に出て自分も技術を磨いていきたいという気持ちが芽生え、営業ではなく、技術者としての道に進みました。"
        secondTitle="目標を設定し、<br>叶えるためにどのような筋道を立てるか"
        secondText="現在は大手車メーカーのシステム開発部にて、車のメンテナンスに関わるソフトウェアの運用と管理業務を行っております。事務職の経験をデスクワークで活かし、車載システムの通信の仕組みを日々勉強しながら、お客様が安全快適に車と関われるようソフトウェアの品質を支えています。現在、参画しているプロジェクトでは、自身の責任、業務的立場の責任について考えることを大切にしています。他部署や協力会社と関わる仕事では、各担当の業務責任について常に“責任の所在”を意識しながら、無責任な責任を請け負わないよう注意しています。一方で自分自身が何か問題に直面した際は、責任感を持って向き合うことで自身が成長できると考えています。その成長によって、自分の力のみで可能になる行動領域を広げたいと思っています。"
        thirdTitle="ポジティブな雰囲気が<br>ドリームビジョンの魅力"
        thirdText="ドリームビジョンの一番良いところは、ポジティブな考え方と雰囲気があり、会社全体がどんな時も前を向いているところがだと感じています。本社にいる社員や各現場に所属する社員は、環境も業務もそれぞれ異なりますが、皆さんポジティブシンキングなところが共通しています。「次はこんなことをしよう！この技術を磨きたい！」という声がどの方面からも聞こえること、また、その気持ちを全力で応援してくれる雰囲気がこの会社にはあります。実際に資格取得や自己研鑽への補助など、福利厚生も手厚いところも良いところです。今後私は、Excel VBAプログラミングのスキルをあげて、事務業務等のルーチンワークにVBAツールを組み込むことで業務効率を上げたいです。また、プロジェクト先にで業務効率化を提案しながら、自分のアイデアを形にする技術を日々これからも勉強していこうと思います。"
        class="vol12"
      />
      <ThePeopleSlider
        url="/people_index"
        class="vol12"
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
          title: '社員紹介 vol12',
          description: 'ドリームビジョン株式会社の社員(vol.12)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.12',
          url: 'people_vol12'
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
