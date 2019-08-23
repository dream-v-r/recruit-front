<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol5" />
      <DetailInfo
        number="05"
        title="興味だけだった自分が今は開発のスペシャリストになりたいと思っている"
        year="2018年入社 | 中途採用"
        name="山崎 篤"
        ruby="YAMAZAKI ATUSI"
        post="開発エンジニア"
        class="vol5"
      />
      <DetailContent
        firstTitle="IT業界のことから技術的なことまで<br class='pc'>一から勉強できる環境があった"
        firstText="学生時代はアルバイトでガソリンスタンドを、サークル活動でフットサルをやっていました。ドリームビジョンに応募したきっかけは、ドリームビジョンで働いている知り合いがいて、話を聞いている内に、話に引き込まれIT業界に興味を持つと共に「システム開発のスペシャリストになりたいと」と強く思いました。<br>実際に入社させて頂くと、未経験からでもスペシャリストになるための研修制度が充実していて驚きました。<br>また、先輩社員も優しく教えてくれましたし、分からないことがあっても質問しやすい環境だなと感じることができ、ストレスなく学んでいくことが出来ました。新卒で初めての正社員でしたが、手厚いサポートのお陰で安心して働くことができました。"
        secondTitle="正社員としての責任感が、<br class='pc'>成長を加速する"
        secondText="新卒でドリームビジョンに入社させていただいたので、ドリームビジョンが初めて正社員として働く会社になりました。優しい先輩方や研修制度のお陰でスムーズに慣れていきましたが、やはり正社員としての責任感は、アルバイトの比ではありませんでした。もちろんアルバイトも一生懸命取り組んでいましたが、社会人として責任感や、任されている仕事は重さが全く異なり、それは今もずっしりと感じています。<br>しかし責任感があるお陰で、「仕事をもっと頑張ろう」「期待に応えたい」と思えるようになりました。自分の仕事で誰かの役に立てるように、一刻も早く一人前になれるように努力を重ねた結果、今はプログラムの設計やテストを任せて頂いています。<br>新卒で社会人になれば、責任感というの誰もが感じるものだと思うので、私がしてもらったように、これから入ってくる新卒の人にも、頑張ってもらえるようにサポートしていきたいです。"
        thirdTitle="とにかく働きやすい職場、<br class='pc'>最初に入った会社がここでよかった"
        thirdText="本当に優しい先輩社員ばかりで、感謝しかありません。社内の雰囲気が良いので、新しい人が増えてきてもみんな和やかに、お互い協力して仕事をしています。<br>新しい環境に飛び込むときに、何よりも気になるのが人間関係や関係の構築です。例え未経験の分野に取り組む時でも、教えてくれる人が丁寧に優しく教えてくれたら怖いものはありません。<br>社内の雰囲気や人間関係の良さが長所のドリームビジョンは新卒の方や、業界未経験の方にも自信をもっておすすめできる会社です。もともと明るくてコミュニケーションが得意な方はもちろん、就職を機に自分を変えたい人や、新たに挑戦したいことがある人もお待ちしています。私も精いっぱいサポートしたいです！"
        class="vol5"
      />
      <ThePeopleSlider
        url="/people_index"
        class="vol5"
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
          title: '採用情報 - 社員紹介-5-ドリームビジョン株式会社',
          description: 'ドリームビジョン株式会社の社員(vol.5)をご紹介しております。ドリームビジョンは日本一エンジニアにやさしい企業を目指しております。',
          keywords: '採用情報,エンジニア,クリエイティブ,Web,IT,システム開発,ネットワーク,インフラ,小伝馬町,ドリームビジョン株式会社,新卒採用,社員紹介,インタビュー,仕事,vol.5',
          url: 'people_vol5'
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
