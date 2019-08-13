<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol2" />
      <DetailInfo
        number="02"
        title="仕事を通じて人生も豊かに。 社員の人生を考えてくれる会社。"
        year="2017年入社 | 中途採用"
        name="小田島 貴宏"
        ruby="ODAZIMA TAKAHIRO"
        post="開発エンジニア"
        class="vol2"
      />
      <DetailContent
        firstTitle="より良い環境を求めて<br class='pc'>ドリームビジョンに"
        firstText="前職では約１５年間エンジニアとして務めておりました。なので同業種ですね。転職を考えたきっかけは、残業時間や休日出勤が多く、このままでいいのかな？と思ったからです。私は結婚もしていて子供もいるのですが、仕事に時間を取られ、家族とのコミュニケーションが減ってしまっていました。<br>もちろん仕事は楽しかったし、一生懸命日々過ごしていました。そんな中、プライベートも充実することでメリハリが付き、仕事も更に頑張れると考えて転職を決めました。ドリームビジョンに入社を決めたのは、転職フェアに行った際、働いている人たちの雰囲気が凄く良かったので、「こんなに楽しそうなら、働きやすい会社だろう」と考え入社を決めました。"
        secondTitle="ゆとりが生まれ、<br class='pc'>仕事も前向きに楽しくなりました"
        secondText="前職との一番の違いは、以前は終電ギリギリで家に帰るのが当たり前でしたが、今は全くそんなことはありません。もちろん時期や業務によって帰りが遅くなることはありますが、ほとんどは家に帰って、子供と顔を合わせることが出来ています。<br>また、働く環境が良いので社員の雰囲気も和やかで、仲が良いのも特徴の一つで、会社帰りの飲み会や、イベントなど楽しませて頂いています。雰囲気がいいと社員同士も連携しやすく、情報も共有できるので、ストレスも少ないのが良いですね。"
        thirdTitle="仕事を楽しく、プライベートも<br class='pc'>充実したい人に是非選んでほしい"
        thirdText="私自身が仕事のやりがいだけでなく、プライベートの充実も重視しているので、新しく入社する方にももちろん人生を充実させながら仕事に取り組んでもらいたいと思っています。<br>いまリーダーとして社内の人材成長やマネジメントにも挑戦していますが、いろいろな人が活躍できるように、更に働きやすい環境を作っていくように努力している最中です。<br>一緒に高め合えるような人をお待ちしています。"
        class="vol2"
      />
      <DetailMovie
        movieUrl="https://www.youtube.com/embed/9QWXL6mFWEo"
        class="vol2"
      />
      <ThePeopleSlider
        url="/people_index"
        class="vol2"
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
  import DetailMovie from '../components/People/DetailMovie'
  import ThePeopleSlider from '../components/layouts/ThePeopleSlider'

  export default {
    components: { DetailKeyVisual, DetailInfo, DetailContent, DetailMovie, ThePeopleSlider },
    mixins: [Meta],
    data () {
      return {
        meta: {
          title: '採用情報 - 社員紹介-2-ドリームビジョン株式会社',
          description: 'ドリームビジョン株式会社の社員(vol.2)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.2',
          url: 'people_vol2'
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
