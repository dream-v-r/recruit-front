<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol1" />
      <DetailInfo
        number="01"
        title="Recruit"
        year="2016年入社 | 中途採用"
        name="新貝 哲平"
        ruby="SINKAI TEPPEI"
        post="インフラエンジニア"
        class="vol1"
      />
      <DetailContent
        firstTitle="ここでなら<br class='pc'>自分のやりたい事もできる。"
        firstText="前職は同業種のITインフラ系の会社に勤めていましたが、システムの設定管理や統合維持、管理業務がメインで、私が望んでいたネットワーク関連業務を行うことが出来ない状態が続いていました。ネットワーク業務を行う為にCCNAの資格取得も済ませていたこともあり、もどかしい思いをしていたのを覚えています。<br>しかし皆が皆、希望の仕事を行うことなどできないことはわかっていたので、日々業務に取り組んでいましたね。<br>そんな時にドリームビジョンから直接オファーを頂き、今の社長とお話しさせて頂く機会を頂きました。具体的な会社の未来や、私の個人のキャリアプランなどを真剣に話し合うことが出来、「ここでなら自分のやりたい事もできるし、力を発揮できる」と感じ入社を決意しました。"
        secondTitle="希望の仕事を任せてもらい、<br class='pc'>責任ある仕事で大きな成長を"
        secondText="入社後、すぐに希望していたネットワークの設計や構築業務を経験させて頂くことが出来ました。入社直後の私に、希望の仕事を任せてくれたという信頼や信用を感じ、今まで以上に張り切って仕事を行いました。そのおかげか、社内のリーダーへの抜擢や自分以外のプロジェクトの参画要員の拡大やマネジメント管理なども任せてもらえるようになり、自分自身がどんどん成長しているのを感じたのを覚えています。<br>今後はエンジニアを売り込む営業や、自分の後任となるサブリーダーの育成などにも挑戦していき、自分自身の価値を高めながら会社に貢献していきたいです。"
        thirdTitle="とにかく熱意のある人間が成長する。<br class='pc'>パワーのある人と働きたいです。"
        thirdText="ドリームビジョンは会長や社長との距離が近いので、現場の声や環境の変化への対応が早い会社です。熱意と行動力があれば、どんな人にもチャンスがあり、どこまでも成長、改革をしていけると思います。自分の希望の仕事を選んで進むのもよし、心に温めていた「やりたいこと」をやるのもよし。<br>これから入社する方には、今現在の能力やキャリアなどは関係なしに、熱意や志を持って入社してきてほしいなと思います。新しい風が入ってくることで、既存の社員たちにも刺激になり、会社全体の成長になりますので、エネルギッシュなパワーで入社してきてください！"
        class="vol1"
      />
      <DetailMovie
        movieUrl="https://www.youtube.com/embed/33M132t1kuw"
        class="vol1"
      />

      <ThePeopleSlider
        url="/people_index"
        class="vol1"
        title="一覧に戻る"
      />

    </div>

  </main>
</template>

<script>
  import DetailKeyVisual from '../components/People/DetailKeyVisual'
  import DetailInfo from '../components/People/DetailInfo'
  import DetailContent from '../components/People/DetailContent'
  import DetailMovie from '../components/People/DetailMovie'
  import ThePeopleSlider from '../components/layouts/ThePeopleSlider'

  export default {
    components: { DetailKeyVisual, DetailInfo, DetailContent, DetailMovie, ThePeopleSlider }
  }
</script>

<style lang="scss" scoped>
  .peopleDetail {
    background: #f7f7f7;
  }

</style>
