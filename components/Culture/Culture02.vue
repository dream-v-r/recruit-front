<template>
  <section class="culture">
    <div class="inner">
      <div class="title">
        <h3>
          充實！福利厚生
        </h3>
      </div>
      <ul class="cultureTile">
        <li class="cultureTileItem">
          <img
            src="~/assets/img/culture/img_culture_01.jpg"
            alt="ドリームビジョンに入社を決めた理由は？ 「会長・社長の人柄」 福利厚生が整っている 新しいことに挑戦したかった 現場を選ぶのに営業に相談できる 技術者が仕事を選べる 未経験からでも安心して技術を身につけられると思った 休みがしっかりある"
          >
        </li>
        <li class="cultureTileItem">
          <img
            src="~/assets/img/culture/img_culture_02.jpg"
            alt="ドリームビジョンを一言でいうと？ 仕事と遊びのメリハリはきちんとしている アットホーム チーム 交流が多い 風通しが良い 愉快な会社！ 社員の帰属意識が強い"
          >
        </li>
        <li class="cultureTileItem">
          <img
            src="~/assets/img/culture/img_culture_03.jpg"
            alt="上司・先輩はどんな人？ 個性的で優しい 頼りになる人ばかり 陽気な人 見かけによらず熱い人達 社員想い 人間味あふれる人たち 真面目で面倒見がいい 相談しやすい"
          >
        </li>
        <li class="cultureTileItem">
          <img
            src="~/assets/img/culture/img_culture_04.jpg"
            alt="休暇は何をしていますか？ 家族と過ごす 旅行 買い物・映画鑑賞 友達とでかける 睡眠"
          >
        </li>
        <li class="cultureTileItem">
          <img
            src="~/assets/img/culture/img_culture_05.jpg"
            alt="福利厚生で特にいいと思うのは？ 食事補助(チケットレストラン)30％ 書籍購入費
            23.3％ アニバーサリー休暇＆アニバーサリー手当20％ 懇親会費16.7％ ベネフィットワン(外部福利厚生)10％ 資格取得8％ トレーナー制度6％"
          >
        </li>
        <li class="cultureTileItem">
          <img
            src="~/assets/img/culture/img_culture_06.jpg"
            alt="現在のジブの仕事はやりがいがある 非常にそう思う46.7％ ややそう思う26.7％ わからない16.7％ やや思わない00.0％ 思わない00.0％"
          >
        </li>
        <li class="cultureTileItem">
          <img
            src="~/assets/img/culture/img_culture_07.jpg"
            alt="ランチはどうしていますか？ お弁当持参 職場の人と食べる チケットレストランが使えるコンビニで買っています 現場近くで外食 仕事において一番大事にしていることは？ 責任感 確認すること 人間関係(コミュニケーション) 品質担保 意見をもつこと、聞くこと お客様目線"
          >
        </li>
        <li class="cultureTileItem">
          <img
            src="~/assets/img/culture/img_culture_08.jpg"
            alt="総合的にみて現在の会社、業務、環境に満足していると思いますか？ 非常にそう思う33.3％ ややそう思う40％ わからない16.7％ やや思わない10％ 思わない00.0％ 年間休日125日 月平均残業時間12.5時間 有給消化率91.7％"
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">

  .culture {
    background: url(~assets/img/culture/bg_culture_pc.jpg) no-repeat top center;
    background-size: cover;
    background-attachment: fixed;
    padding: 0 0 160px;
    @include _mqmax(){
      padding: 0 0 80px;
    }
    .inner {
      max-width: 1000px;
      margin: 0 auto;
      padding: 1px 0 0;
      @include _mqmax(){
        max-width: 90%;
      }
      .title {
        margin: -35px 0 50px;
        @include _mqmax(){
          margin: -24px 0 50px;
        }
        h3 {
          background: #FFF;
          border-bottom: 4px solid #029ae4;
          width: 570px;
          margin: 0 auto;
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          line-height: 70px;
          height: 70px;
          position: relative;
          &:before {
            content: "";
            position: absolute;
            bottom: -22px;
            left: 50%;
            margin-left: -15px;
            border: 12px solid transparent;
            border-top: 12px solid #FFF;
            z-index: 2;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: -30px;
            left: 50%;
            margin-left: -17px;
            border: 14px solid transparent;
            border-top: 14px solid #029ae4;
            z-index: 1;
          }
          @include _mqmax(){
            font-size: 20px;
            line-height: 48px;
            height: 48px;
            width: 100%;
          }
        }
      }
      .cultureTile {
        overflow: hidden;
        &Item {
          float: left;
          width: 490px;
          margin: 0 20px 20px 0;
          @include _mqmax(){
            float: none;
            width: 100%;
            margin: 0 0 20px;
            img {
              width: 100%;
            }
          }
          &:nth-child(2n) {
            margin: 0 0 20px;
          }
        }
      }
    }
  }
</style>
