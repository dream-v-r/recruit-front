<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol9" />
      <DetailInfo
        number="09"
        title="エンジニアとしてだけでなく、1人のビジネスマンとして、よりよい会社づくりを。"
        year="2020年入社 | 中途採用"
        name="K.Y."
        post="インフラエンジニア"
        class="vol9"
      />
      <DetailContent
        firstTitle="やりがい、成長<br>この会社なら実現できると思った"
        firstText="新卒でIT関連企業に未経験で入社し、手探りの中、プロジェクトの一員として設計・構築工程だけでなくプロジェクト管理にも関わらせていただきました。そこでプロジェクト運営の楽しさと難しさを知り、エンジニアとして、そしてビジネスマンとしてより成長していきたいという気持ちがどんどん強くなりました。<br>また、前職では金融システムやコールセンターシステムなどのサーバ及びストレージ構築案件に幅広く携わっておりました。自分がビジネスマンとして成長していく中で、「さらに新しいことに挑戦したい」という意欲が強く芽生えはじめていた時に出会ったのがドリームビジョンでした。ありがたいことに社長をはじめ社員の皆さんとお話する場を何度も設けていただき、そこで自分の志向やビジョンを正直に伝えました。その思いを真摯に受け止めていただき、また、会社のことや社員の皆さんのことを知っていく中で、この人たちと一緒に仕事をすることで自分は成長していくことができると確信したので入社を決めました。"
        secondTitle="新しい環境に慣れていきたい"
        secondText="現在は、大規模システムの維持管理プロジェクトの一員として業務を行っております。これまでに関わったことのない規模で、さらに維持管理の業務を担当することも初めてのため、日々の業務で学ぶことが多く、とても新鮮な気持ちで毎日が充実しています。入社してまだ日が浅いため、今の段階では新しい環境に慣れること、少しでも早く会社に貢献できる人材となっていくことに注力することで精一杯なのですが、自分が経験したことのない業務に携わることで、日々少しずつエンジニアとしての力がついている実感があります。"
        thirdTitle="より良い会社にしていくことに<br>携わりたい"
        thirdText="「日本一エンジニアにやさしい会社」の言葉の通り、とにかくエンジニアファーストで考えていただいているところが良いところです。業務面でも自分の意見を考慮していただき、福利厚生面でも充実していてとても働きやすい環境なので、未経験で入社するエンジニアも安心して仕事に専念できると思います。今後は、エンジニアとしては自動化を中心に技術力を磨き、会社に貢献できる人材として成長していきたいです。<br>また、エンジニアとしてだけでなく1人のビジネスマンとして、よりよい会社づくりをしていくことに携わっていければなと思っています。"
        class="vol9"
      />
      <ThePeopleSlider
        url="/people_index"
        class="vol9"
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
          title: '社員紹介 vol9',
          description: 'ドリームビジョン株式会社の社員(vol.9)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.9',
          url: 'people_vol9'
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
