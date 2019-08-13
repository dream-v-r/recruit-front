<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol4" />
      <DetailInfo
        number="04"
        title="未経験からでも仕事もプライベートも充実。イベントも盛りだくさんで、毎日楽しく過ごせています。"
        year="2017年入社 | 中途採用"
        name="森田 麻里子"
        ruby="MORITA MARIKO"
        post="インフラエンジニア"
        class="vol4"
      />
      <DetailContent
        firstTitle="手に職をつけて、<br class='pc'>自信をもって進んでいくために"
        firstText="専門学校を卒業後、美容師やアパレル業、歯科受付などの仕事をしていましたが、自分の自信になるような手に職、スキルを見つけたいと思い転職活動を行っていました。そんな中、未経験者を募集しているドリームビジョンが目に留まり応募をしました。<br>エンジニアやIT業界というのは身近ではなかったのですが、これからますます必要とされて活躍できる仕事だと思っていたので、「是非ともスキルを手に入れたい」と思ったのを覚えています。<br>もちろん未経験という事で不安もありましたが、未経験からでもしっかりと研修があり、頑張っている人もたくさんいると聞き、「とにかく自分のできることから一生懸命頑張ろう」と努力していこうと思いました。"
        secondTitle="とにかく勉強。日々学ぶこと<br class='pc'>ばかりで楽しい毎日です。"
        secondText="未経験という事もあり、勉強することが毎日たくさんあります。学生時代よりも勉強していることは間違いありません。勉強というと少し気難しいニュアンスになりますが、会社に入ってからの勉強は、やればやるほど自分のできる仕事が増えていくし、任せてもらえる仕事も増えていく楽しいものです。<br>また、お客様に喜んでもらえることも勉強していくエネルギーになっています。手に職をつけるために入社したのですが、今は仕事が楽しくて楽しくて仕方ありません。<br>これからは私のような女性や、未経験の方が活躍できるような土台作り、研修プログラム作成などに携わっていきたいです。"
        thirdTitle="会社はとにかく良い雰囲気で、<br class='pc'>それが私の力にもなっています。"
        thirdText="ドリームビジョンでは、仕事以外でも脱出ゲームやバスケットなどのスポーツ大会のイベントを開いています。部署や上下関係の垣根を越えて楽しめる、私の大好きな時間です。<br>またイベント後の懇親会は会社の福利厚生の一つ懇親会補助があるので、気兼ねなく、皆で同じ時間を楽しむことが出来ます。<br>その際は自分のキャリアや、日ごろの業務には、一見関係のない話の内容でも、それぞれの現場の新しい技術やプライべ―トな話をすることで、「この会社で頑張ろう」と前向きな気持ちにもなれます。これから入社する方は、是非社内イベントにも積極的に参加してほしいですね！"
        class="vol4"
      />
      <ThePeopleSlider class="vol4" />
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
          title: '採用情報 - 社員紹介-4-ドリームビジョン株式会社',
          description: 'ドリームビジョン株式会社の社員(vol.4)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.4',
          url: 'people_vol4'
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
