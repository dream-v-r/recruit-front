<template>
  <main>
    <div class="peopleDetail">
      <DetailKeyVisual class="vol3" />
      <DetailInfo
        number="03"
        title="やりたいことを全力で突き詰めていく、自分のステップアップに繋がる。"
        year="2016年入社 | 中途採用"
        name="大津 裕之"
        ruby="OHTSU HIROYUKI"
        post="開発エンジニア"
        class="vol3"
      />
      <DetailContent
        firstTitle="エンジニアとしての仕事に<br class='pc'>魅力を感じました"
        firstText="前職ではコールセンターのオペレーターの方のシフト調整や進捗管理等を行っていました。転職を考えたきっかけは、シフト調整や管理を「更に効率的に早くできないか」と考えてExcelを使用して簡単なツールを作成したのがきっかけです。ツールを一つ作成しておくだけで、日々の細かい業務がスムーズに処理でき、時間に余裕ができて感動したのを覚えています。<br>がむしゃらに業務に向かうだけでなく、システム自体を作ることに魅力を感じ、転職をする前にプログラミングスクールに通ってスキルをみにつけました。こうして今は念願の職種に就くことができ、日々楽しく仕事をしています。"
        secondTitle="周りのサポートや良い<br class='pc'>人間関係のおかげで<br class='pc'>経験が浅くても自信を持てた"
        secondText="プログラミングスクールに通っていたとはいえ、実際にエンジニアとしての実務経験はなかったため為、最初は不安でいっぱいでした。しかし先輩社員や仲間、会社のサポートもあり、特に抵抗なく業界に溶け込んでいくことが出来たと思います。<br>またドリームビジョンは社員の成長には援助を惜しまない会社で、勉強のための書籍代なども補助してもらえました。経験が浅い方でも確実にステップアップできるような環境を整えてくれているので、成長を感じながら仕事をすることが出来ます。"
        thirdTitle="技術的に不安があっても、<br class='pc'>まずは、飛び込んできてほしい"
        thirdText="ドリームビジョンはステップアップや教育体制、そして福利厚生が整っている会社です。未経験もしくは経験が浅い人でもやる気があれば是非とも飛び込んできて挑戦してほしいです。未経験分野に転職をすると、今までの知識やスキルが通用しないので、躊躇してしまう方が多いと思います。しかしドリームビジョンであれば大丈夫です。<br>私自身も助けられた側の人間ですので、未経験の方に精一杯サポートしていきます。社員も助け合えるような環境や雰囲気となっています。さらに順序を追った教育体制(研修体制)で、自分のペースで進んでいくことが出来るので、何も心配はいりません。「プログラミングに挑戦してみたい」「ネットを使って社会に貢献したい」など熱意溢れる方をお待ちしております。"
        class="vol3"
      />
      <ThePeopleSlider class="vol3" />
    </div>
  </main>
</template>

<script>
  import DetailKeyVisual from '../components/People/DetailKeyVisual'
  import DetailInfo from '../components/People/DetailInfo'
  import DetailContent from '../components/People/DetailContent'
  import ThePeopleSlider from '../components/layouts/ThePeopleSlider'

  export default {
    components: { DetailKeyVisual, DetailInfo, DetailContent, ThePeopleSlider }
  }
</script>

<style lang="scss" scoped>
  .peopleDetail {
    background: #f7f7f7;
  }
</style>
