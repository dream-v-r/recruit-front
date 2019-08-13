<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol6" />
      <DetailInfo
        number="06"
        title="良い仲間たちと楽しい日々を。仕事もプライベートも充実。"
        year="2018年入社 | 中途採用"
        name="神谷 彩奈"
        ruby="KAMIYA AYANA"
        post="ITサポート"
        class="vol6"
      />
      <DetailContent
        firstTitle="充実の研修制度で、安心して<br class='pc'>現場にいくことができる"
        firstText="前職では外資系のアパレル会社で働いておりました。販売の他に、資料作りや顧客管理をパソコンで行っていたことで、パソコン業務に興味を持ったのがIT業界に興味を持ったきっかけです。とはいえ資格を持っているわけでも、業界知識があるわけでもありませんでしたので、初めは少し抵抗がありました。こういった専門的なスキルや知識を要する業界には、即戦力しか採用していないと思っていたので。<br>しかしドリームビジョンは、未経験の人でも募集していることや、社内研修が充実していそうだったので、勇気を出して一歩踏み出して応募をしたのを覚えています。<br>実際に社内研修では、基本的なビジネスマナーから、IT業界の基礎知識まで幅広く教えていただきましたので、現場に行くころには自信をもって仕事をする準備が出来ていました。"
        secondTitle="自分の出来ることから。<br class='pc'>試行錯誤でどんどん能力が<br class='pc'>あがっていく"
        secondText="ドリームビジョンに入社して、実際に仕事を任せてもらってから私は本当に成長したと感じます。知識をどんどん身に着けて、確実に前に進んでいるというのはもちろんですが、新しいことを学んで実践に活かしていくことに喜びを感じることが出来るようになったのが、自分でも驚いています。<br>新たに学ぶことが楽しいので、どんどんスキルも上がるし、クライアントにも喜んでもらえるので、非常に良い循環が作れていると感じます。これからも新しいことに挑戦し続けていきたいです。今はJavaやHTMLなどのプログラム言語を見に付けて、自分自身の可能性を広げることに挑戦していこうと思っています。"
        thirdTitle="一緒に成長し、<br class='pc'>喜びを分かち合える仲間と"
        thirdText="ドリームビジョンは社員の仲がとても良いです。部署や業種が違っても連絡を取り合って、コミュニケーションや飲み会などを行っています。仕事で困ったことや、質問などがあっても仲間がいることで、情報を共有し、一緒に解決をしていくことが出来るので、仲間には本当に感謝しています。<br>また、仕事への熱量や意識が高いメンバーが多いので、お互い切磋琢磨してスキルを磨いていけるのも魅力の一つです。これから入社してきてくれる方には、仕事への熱量を持って、良い影響を与え合えるような人に入ってきてもらいたいと思います。そして一緒に飲みに行ける人ももちろん大歓迎です！<br>色々不安もあるとは思いますが、一緒に頑張っていきましょう！"
        class="vol6"
      />
      <ThePeopleSlider class="vol6" />
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
          title: '採用情報 - 社員紹介-6-ドリームビジョン株式会社',
          description: 'ドリームビジョン株式会社の社員(vol.6)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.6',
          url: 'people_vol6'
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
