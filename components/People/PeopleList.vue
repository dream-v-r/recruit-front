<template>

  <section class="people">
    <div class="inner">
      <ul class="peopleList">
        <li class="peopleListItem peopleListItem--vol1">
          <nuxt-link to="/people_vol1">
            <div class="info">
              <span class="post">インフラエンジニアリーダー</span>
              <span class="category">経験者</span>
              <span class="name">S.T.</span>
              <span class="year">2016年入社 | 中途採用</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol2">
          <nuxt-link to="/people_vol2">
            <div class="info">
              <span class="post">開発エンジニアリーダー</span>
              <span class="category">経験者</span>
              <span class="name">O.T.</span>
              <span class="year">2017年入社 | 中途採用</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol3">
          <nuxt-link to="/people_vol3">
            <div class="info">
              <span class="post">開発エンジニア</span>
              <span class="category">経験者</span>
              <span class="name">O.H.</span>
              <span class="year">2016年入社 | 中途採用</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol4">
          <nuxt-link to="/people_vol4">
            <div class="info">
              <span class="post">インフラエンジニア</span>
              <span class="category">未経験者</span>
              <span class="name">M.M.</span>
              <span class="year">2017年入社 | 中途採用</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol5">
          <nuxt-link to="/people_vol5">
            <div class="info">
              <span class="post">開発エンジニア</span>
              <span class="category">未経験(新卒)</span>
              <span class="name">Y.A.</span>
              <span class="year">2017年入社 | 新卒採用</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol6">
          <nuxt-link to="/people_vol6">
            <div class="info">
              <span class="post">ITサポート</span>
              <span class="category">未経験者</span>
              <span class="name">K.A.</span>
              <span class="year">2018年入社 | 中途採用</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol7">
          <nuxt-link to="/people_vol7">
            <div class="info">
              <span class="post">営業</span>
              <span class="category">経験者(営業)</span>
              <span class="name">N.Y.</span>
              <span class="year">2016年入社</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol8">
          <nuxt-link to="/people_vol8">
            <div class="info">
              <span class="post">インフラエンジニア</span>
              <span class="category">未経験者</span>
              <span class="name">H.R.</span>
              <span class="year">2018年入社</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol9">
          <nuxt-link to="/people_vol9">
            <div class="info">
              <span class="post">インフラエンジニア</span>
              <span class="category">経験者</span>
              <span class="name">K.Y.</span>
              <span class="year">2020年入社</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol10">
          <nuxt-link to="/people_vol10">
            <div class="info">
              <span class="post">インフラエンジニア</span>
              <span class="category">未経験者</span>
              <span class="name">N.N.</span>
              <span class="year">2017年入社</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol11">
          <nuxt-link to="/people_vol11">
            <div class="info">
              <span class="post">開発エンジニア</span>
              <span class="category">未経験者</span>
              <span class="name">O.T.</span>
              <span class="year">2019年入社</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
        <li class="peopleListItem peopleListItem--vol12">
          <nuxt-link to="/people_vol12">
            <div class="info">
              <span class="post">ITサポート</span>
              <span class="category">未経験者</span>
              <span class="name">S.S.</span>
              <span class="year">2018年入社</span>
              <span class="more">READ MORE</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>

</template>

<style scoped lang="scss">

  .people {
    background: url(~assets/img/people/bg_peoplelist.jpg) repeat;
    .inner {
      width: 1280px;
      margin: 0 auto;
      padding: 90px 0 110px;
      @include _mqmax(){
        max-width: 90%;
        padding: 50px 0;
      }
      .peopleList {
        display: flex;
        flex-wrap: wrap;
        @include _mqmax(){
          display: block;
          flex-wrap: inherit;
        }
        &Item {
          width: 380px;
          margin: 0 70px 0 0;
          @include _mqmax(){
            margin: 0 0 40px;
            width: 100%;
          }
          &:nth-child(2) {
            margin: 40px 70px 0 0;
            @include _mqmax(){
              margin: 0 0 40px;
            }
          }
          &:nth-child(3) {
            margin: 80px 0 0;
            @include _mqmax(){
              margin: 0 0 40px;
            }
          }
          &:nth-child(5) {
            margin: 40px 70px 0 0;
            @include _mqmax(){
              margin: 0 0 40px;
            }
          }
          &:nth-child(6) {
            margin: 80px 0 0;
            @include _mqmax(){
              margin: 0 0 40px;
            }
          }
          /*
          &:nth-child(7) {
            margin: 0;
            @include _mqmax(){
              margin: 0;
            }
          }*/
          &:nth-child(8) {
            margin: 40px 70px 0 0;
            @include _mqmax(){
              margin: 0 0 40px;
            }
          }
          &:nth-child(9) {
            margin: 80px 0 0;
            @include _mqmax(){
              margin: 0 0 40px;
            }
          }
          &:nth-child(11) {
            margin: 40px 70px 0 0;
            @include _mqmax(){
              margin: 0 0 40px;
            }
          }
          &:nth-child(12) {
            margin: 80px 0 0;
            @include _mqmax(){
              margin: 0 0 40px;
            }
          }
          a {
            display: block;
            text-decoration: none;
            padding: 240px 0 0;
            position: relative;
            @include _mqmax(){
              padding: 170px 0 0;
            }
            &:before {
              content: "";
              display: block;
              width: 380px;
              height: 274px;
              position: absolute;
              top: 0;
              left: 0;
              @include _mqmax(){
                width: 100%;
                height: 100%;
              }
            }
            .info {
              background: #FFF;
              width: 300px;
              height: 150px;
              margin: 0 auto;
              padding: 1px 30px 0;
              position: relative;
              @include _mqmax(){
                width: 90%;
              }
              .post {
                color: #FFF;
                background: linear-gradient(to right, #0275ae, #1445a3);
                display: block;
                font-size: 13px;
                font-weight: bold;
                line-height: 36px;
                text-align: center;
                width: 208px;
                height: 36px;
                margin: -18px auto 18px;
                @include _mqmax(){
                  font-size: 12px;
                  height: 24px;
                  line-height: 24px;
                  margin: -12px 0 10px;
                }
              }
              .category {
                border: 1px solid #029ae4;
                color: #029ae4;
                display: inline-block;
                padding: 0 12px;
                font-size: 12px;
                font-weight: bold;
                line-height: 20px;
                height: 20px;
                margin: 0 0 8px;
              }
              .name {
                color: #333;
                display: block;
                font-size: 20px;
                font-weight: bold;
                margin: 0 0 6px;
              }
              .year {
                color: #999;
                display: block;
                font-size: 12px;
              }
              .more {
                color: #029ae4;
                display: block;
                position: absolute;
                font-family: 'Lato', sans-serif;
                font-size: 12px;
                font-weight: 900;
                padding: 0 40px 0 0;
                bottom: 12px;
                right: -16px;
                &:after {
                  background: url(~assets/img/people/ico_more_arrow.png) no-repeat;
                  content: "";
                  display: block;
                  width: 29px;
                  height: 10px;
                  position: absolute;
                  top: 1px;
                  right: 0;
                }
              }
            }
          }
          &--vol1 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_01_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_01_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol2 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_02_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_02_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol3 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_03_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_03_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol4 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_04_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_04_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol5 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_05_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_05_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol6 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_06_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_06_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol7 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_07_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_07_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol8 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_08_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_08_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol9 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_09_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_09_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol10 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_10_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_10_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol11 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_11_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_11_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
          &--vol12 {
            a {
              &:before {
                background: url(~assets/img/people/img_people_list_12_pc.png) no-repeat;
                @include _mqmax(){
                  background: url(~assets/img/people/img_people_list_12_sp.png) no-repeat;
                  background-size: 100%;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
