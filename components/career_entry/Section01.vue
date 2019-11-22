<template>
<section class="section01">
    <div class="career_entry_filter career_entry_filter_pc">
        <div class="career_entry_filter_pc_inner">
            <h3>JOB CATEGORY SEARCH<span>職種で探す</span></h3>
            <div class="row">
                <div 
                    class="trigger active" 
                    data-filter="all"
                >
                    <span>すべて表示</span>
                </div>
                <div 
                    class="trigger" 
                    data-filter="network"
                >
                    <span>ネットワークエンジニア</span>
                </div>
                <div 
                    class="trigger" 
                    data-filter="server"
                >
                    <span>サーバエンジニア</span>
                </div>
                <div 
                    class="trigger" 
                    data-filter="pmpl"
                >
                    <span>PM/PL</span>
                </div>
                <div 
                    class="trigger" 
                    data-filter="development"
                >
                    <span>開発エンジニア</span>
                </div>
                <div 
                    class="trigger" 
                    data-filter="frontend"
                >
                    <span>フロントエンドエンジニア</span>
                </div>
            </div>
        </div>
    </div>

    <div class="career_entry_filter career_entry_filter_sp">
        <h3>JOB CATEGORY SEARCH<span>職種で探す</span></h3>
        <div class="row">
            <div>
                <a class="trigger active" data-filter="all" href="#" v-scroll-to="{el:'#narrowing_result'}">すべて表示</a>
            </div>
            <div>
                <a class="trigger" data-filter="network" href="#" v-scroll-to="{el:'#narrowing_result'}">ネットワークエンジニア</a>
            </div>
            <div>
                <a class="trigger" data-filter="server" href="#" v-scroll-to="{el:'#narrowing_result'}">サーバエンジニア</a>
            </div>
            <div>
                <a class="trigger" data-filter="pmpl" href="#" v-scroll-to="{el:'#narrowing_result'}">PM/PL</a>
            </div>
            <div>
                <a class="trigger" data-filter="development" href="#" v-scroll-to="{el:'#narrowing_result'}">開発エンジニア</a>
            </div>
            <div>
                <a class="trigger" data-filter="frontend" href="#" v-scroll-to="{el:'#narrowing_result'}">フロントエンドエンジニア</a>
            </div>
        </div>
    </div>

</section>
</template>

<style scoped lang="scss">
.section01 {
    background-color: #f7f7f7;
}
.career_entry_filter {
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: #f7f7f7;
  h3 {
    margin: 0 auto 1em;
    text-align: center;
    line-height: 1.4;
    font-size: 24px;
    span {
      font-size: 16px;
      font-weight: normal;
      display: block;
    }
  }
  .row {
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    div {
      padding: 10px 0;
      cursor: pointer;
      width: 33.6%;
      margin: -1px -1%;
      text-align: center;
      border: #029ae4 solid 2px;
      color: #029ae4;
      font-size: 16px;
      font-weight: bold;
      background: #fff;
      &:hover {
        color: #fff;
        background: #029ae4;
      }
      a {
        color: #029ae4;
        text-decoration: none;
        display: block;
        padding: 10px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .career_entry_filter .row {
    flex-direction: column;
  }
}
@media screen and (max-width: 767px) {
  .career_entry_filter .row div {
    width: 100%;
    margin: -1px 0;
    padding: 0;
  }
}
@media screen and (max-width: 767px) {
  .career_entry_filter .row div:hover {
    color: #fff;
    background: #029ae4;
  }
}
.career_entry_filter_pc {
  display: block;
}
@media screen and (max-width: 767px) {
  .career_entry_filter_pc {
    display: none;
  }
}
.career_entry_filter_pc_inner {
  width: 1000px;
  margin: 0 auto;
}
.career_entry_filter_sp {
  display: none;
}
@media screen and (max-width: 767px) {
  .career_entry_filter_sp {
    display: block;
    width: 100%;
    margin: 0;
  }
}
</style>
