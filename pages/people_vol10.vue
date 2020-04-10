<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol10" />
      <DetailInfo
        number="10"
        title="自分にしかできないことをしたい。それがエンジニアだと思った。"
        year="2017年入社 | 中途採用"
        name="N.N."
        post="インフラエンジニア"
        class="vol10"
      />
      <DetailContent
        firstTitle="”日本一 エンジニアにやさしい会社”とは真実か？<br>試してみたくなった"
        firstText="大学卒業後、小売業界に就職しました。業務内容としては、アルバイトの管理、在庫管理、売り場づくり、販売など幅広い業務を行っていました。小売業界で働く中で、自分にしか出来ないことがしたいと思いIT業界への転職を決意しました。<br>
        未経験での異業職転職だったので、いろんなIT企業をみて回り、転職先は非常に悩みましたが、ドリームビジョンの”日本一 エンジニアにやさしい会社”というスローガンを見て、実体に乖離がないのか、どれだけ優しくしてくれるのか試してみたくなり、入社を決めました。"
        secondTitle="常に自分はチャレンジャーだと<br>認識する事を一番大切にしています"
        secondText="馴現在はCisco SD-WANの検証、構築、一部設計に携わっています。<br>
        大規模な構築、設計が多く、理解出来る事柄も増えてきましたが、日々、勉強の毎日です。また、Ansibleという構成管理ツールを使用しての、検証の一部自動化も行っています。社内業務としては、トレーナーとして未経験でドリームビジョンに入社した方のサポートをしています。トレーナー業務では、自らも一緒に新人社員の方と共に成長をするということを意識して業務に向き合うようにしています。仕事において大切にしている事は、常に自分はチャレンジャーだと認識する事を一番大切にしています。<br>
        自分が今後、何をする事が出来るのか、何になる事が出来るのかは全て、今の自分の努力によって変化するものだと考えているので、常に学んでいくことを忘れずに精進していきたいです。"
        thirdTitle="プレイヤーであり<br>マネジメントもできるエンジニアへ"
        thirdText="ドリームビジョンは会長、社長、社員含め、会社全体が誠実なところが一番魅力的だと思います。その他にも自分のスキルに合わせて、給与の交渉をしっかり行えたり、納得いかない部分に対してはきちんと上層部と話し合いを行う事ができ、一緒に改善していけるのも良い部分だと思います。また、自分の次のキャリアプランとして、プレイヤーとしてとマネージャーとしての二つの視点で挑戦してみたい事があります。まず、プレイヤーとしては、インフラエンジニアとして新しい技術にアンテナを張っていくことと、プログラミングの初歩を学習して自分のできることを増やしていく事です。マネージャーとしては、”適度な裁量を持たせ、かつフィードバックをしっかり行うリーダー”を目指すためにマネジメントの基礎を学んでいきたいです。"
        class="vol10"
      />
      <ThePeopleSlider
        url="/people_index"
        class="vol10"
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
          title: '社員紹介 vol10',
          description: 'ドリームビジョン株式会社の社員(vol.10)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.10',
          url: 'people_vol10'
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
