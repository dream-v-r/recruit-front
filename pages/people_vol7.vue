<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol7" />
      <DetailInfo
        number="07"
        title="考え方が広がることで視野が広がり、新たな成長のチャンスも生まれてくる。"
        year="2016年入社 | 中途採用"
        name="野崎 優人"
        ruby="NOZAKI YUTO"
        post="営業"
        class="vol7"
      />
      <DetailContent
        firstTitle="ドリームビジョンへの<br class='pc'>入社のキッカケは？"
        firstText="前職ではハウスメーカーで営業をしていました。接客をメインに行い、土地探しや分譲住宅の販売、資金計画など幅広く業務を行っていました。ドリームビジョンへの入社のキッカケは、知人がドリームビジョンにおり、話を聞いている内に働いてみたいと思ったのがキッカケです。社内の雰囲気が良いことや、IT業界の魅力を聞いている内に、「ドリームビジョンで働いてみたい」と思ったのを覚えています。<br>実際に入社をしてみると、社内の雰囲気の良さや風通しの良さは、想像以上でした。特に、上司などの目上の方々が、部下の意見を丁寧に聞いてくれていることに感動しました。入ったばかりの新人の頃でも、大切に意見を聞いてもらえると、会社の一員として認められたような感覚になります。部下や新人を育成する立場になって、これから入ってくる人たちにも良い環境を提供したいと思っています。"
        secondTitle="人間的な成長。自分だけの目標から、<br class='pc'>会社や仲間との目標に"
        secondText="馴染みのない業界に入ったこともあって、最初は本当に大変だったのを覚えています。覚えることは多いですし、用語は意味がわからないものばかり。毎日新しいことを覚えて、とにかく一生懸命くらいついていました。「早く一人前になりたい」「自分の営業成績を達成したい」という自分の目標に向かっての努力がメインです。<br>今では少し余裕も出来てきて、自分の事だけでなく、会社全体の成長や目標達成、部下一人ひとりの成長まで考えて仕事が出来るようになりました。<br>仕事に慣れてきて、精神的な余裕を持てるようになったという事ももちろんですが一緒に働く仲間が喜ぶ姿に、私自身が喜びを感じられるようになったというのが大きなキッカケです。<br>またお世話になった会社に貢献したいという気持ちが自然に生まれてきたのも成長の証だと思います。<br>これからは営業マネージャーにも挑戦して、たくさんの人を幸せに出来るように頑張っていきたいです。"
        thirdTitle="いろんな考えの人たちと、<br class='pc'>素晴らしい仕事をしたい"
        thirdText="意見を尊重してくれるドリームビジョンは、これまで培ってきた技術や経験がある方はもちろん、様々な視点や考え方を持った他業種から転職される方も歓迎しています。考え方が広がることで視野が広がり、新たな成長のチャンスも生まれてくるからです。<br>皆、アイデアや提案には積極的に耳を傾けてくれるので、自分自身でやりたいことがある方や、熱意を持った方をお待ちしております。<br>また「IT業界に興味がある」「未経験で不安」という方も大歓迎です。積極的に発言をしたり、能動的に動いたりする人だけでなく、慎重に物事を考えるタイプや、少し人付き合いが苦手という人もいていいと思います。<br>色々な人がいて、協力し合ってよい仕事、よい会社が出来ると思いますので、是非飛び込んできてください。お待ちしています！"
        class="vol7"
      />
      <ThePeopleSlider class="vol7" />
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
          title: '採用情報 - 社員紹介-7-ドリームビジョン株式会社',
          description: 'ドリームビジョン株式会社の社員(vol.7)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.7',
          url: 'people_vol7'
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
