<template>
  <section class="example">
    <div class="read">
      <p class="mb">経営層との距離がが近いため、<br>意見や提案をしやすい環境になっています。<br>ドリームビジョンは自分の「なりたい」や<br>「やりたい」を全力でサポートします。</p>
      <p>インセンティブ制度を設けていますので、<br>チームが大きくなった際はしっかりと評価いたします。</p>
    </div>
    <div class="title">
      <h3>
        参画プロジェクト事例
      </h3>
    </div>
    <div class="inner">
      <p>経験や技術レベルに応じた活躍のステージを用意しています。<br>高い能力を持つ人材は、自分の裁量の大きいプロジェクトや先端技術領域に<br>積極的に抜擢していきます。</p>

      <ul class="categoryList">
        <li class="categoryListItem categoryListItem--cate01">
          <h3>
            インフラエンジニア
          </h3>
          <ul>
            <li>大手通信業界のネットワーク環境設計・構築</li>
            <li>大手メーカーへのクラウド環境導入支援（AWS）</li>
            <li>サーバシステム導入時のインフラ・ ネットワーク設計・導入支援</li>
            <li>某大手プラットフォームサービスの仮想化構築</li>
            <li>官公庁のサーバ構築</li>
            <li>大手証券会社向けサーバ構築等</li>
          </ul>
        </li>
        <li class="categoryListItem categoryListItem--cate02">
          <h3>
            開発エンジニア
          </h3>
          <ul>
            <li>金融決済システム開発、ポイントシステム開発</li>
            <li>ECサイト、コンシューマー向けサイト開発</li>
            <li>ソーシャルゲーム・ナビサイト・キュレーションサイトの開発</li>
            <li>ios・Androidアプリ開発等</li>
            <li>金融</li>
            <li>インターネット広告代理店向けSNS開発</li>
            <li>AI営業支援システム開発</li>
            <li>EC</li>
          </ul>
        </li>
        <li class="categoryListItem categoryListItem--cate03">
          <h3>
            Webエンジニア
          </h3>
          <ul>
            <li>世界的スポーツメーカーECサイト運営</li>
            <li>旅行関連予約サイト構築</li>
            <li>アーティストの公式ファンサイト制作</li>
            <li>大手ポータルサイトの運営</li>
            <li>人気動画コンテンツサイト制作</li>
            <li>Facebookアプリ/ソーシャルゲーム運営等</li>
          </ul>
        </li>
      </ul>
    </div>

  </section>
</template>

<style scoped lang="scss">
  .example {
    background: #f7f7f7;
    padding: 0 0 100px;
    .read {
      background: url(~assets/img/job/bg_example_ttl_pc.jpg) no-repeat center center;
      background-size: cover;
      height: 524px;
      padding: 100px 0 0;
      @include _mqmax(){
        background: url(~assets/img/job/bg_example_ttl_sp.jpg) no-repeat center center;
        background-size: cover;
        height: 395px;
        padding: 60px 0 0;
      }
      p {
        color: #FFF;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        line-height: 2.2;
        &.mb {
          margin: 0 0 30px;
        }
        @include _mqmax(){
          font-size: 18px;
          width: 90%;
          margin: 0 auto;
          text-align: justify;
          line-height: 2;
          br {
            display: none;
          }
          &.mb {
            margin: 0 auto;
          }
        }
      }
    }
    .title {
      margin: -35px 0 50px;
      @include _mqmax(){
        margin: -24px 0 50px;
      }
      h3 {
        background: #FFF;
        border-bottom: 4px solid #029ae4;
        width: 370px;
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
          width: 250px;
        }
      }
    }
    .inner {
      max-width: 1000px;
      margin: 0 auto;
      @include _mqmax(){
        max-width: 90%;
      }
      > p {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.8;
        text-align: center;
        margin: 0 0 50px;
        @include _mqmax(){
          font-size: 18px;
          text-align: left;
          margin: 0 0 30px;
          br {
            display: none;
          }
        }
      }
      .categoryList {
        display: flex;
        @include _mqmax(){
          display: block;
        }
        &Item {
          background: #FFF;
          width: 31%;
          margin: 0 3.5% 0 0;
          @include _mqmax(){
            width: 100%;
            margin: 0 0 40px;
          }
          &:last-child {
            margin: 0;
          }
          h3 {
            color: #FFF;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            line-height: 50px;
            height: 50px;
            margin: 0 0 40px;
            @include _mqmax(){
              font-size: 16px;
              line-height: 38px;
              height: 38px;
              margin: 0 0 30px;
            }
          }
          ul {
            padding: 0 26px 30px;
            li {
              position: relative;
              font-size: 14px;
              line-height: 1.8;
              padding: 0 0 0 1.5em;
              text-align: justify;
              margin: 0 0 5px;
              &:last-child {
                margin: 0;
              }
              &:before  {
                content: "";
                display: block;
                position: absolute;
                width: 12px;
                height: 12px;
                top: 6px;
                left: 0;
                @include _mqmax(){
                  top: 6px;
                }
              }
            }
          }
          &--cate01 {
            h3 {
              background: #029AE4;
            }
            ul {
              li {
                &:before {
                  background: #029AE4;
                }
              }
            }
          }
          &--cate02 {
            h3 {
              background: #1445A3;
            }
            ul {
              li {
                &:before {
                  background: #1445A3;
                }
              }
            }
          }
          &--cate03 {
            h3 {
              background: #333;
            }
            ul {
              li {
                &:before {
                  background: #333;
                }
              }
            }
          }
        }
      }
    }
  }
  </style>
