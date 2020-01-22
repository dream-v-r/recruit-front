<template>
  <div class="site-entry">
    <h2 class="title">
      <img
        src="~/assets/img/text_entry.png"
        alt="新卒採用Entry"
      >
    </h2>
    <a
      href="https://rikunabi-direct.jp/2020/corporation/detail/rd00036185"
      class="btn" target="_blank"
    >
    新卒採用エントリーはこちら
    </a>
    <a
      href="https://www.dream-v.co.jp/recruit/career_entry/"
      class="btn2"
    >
    キャリア採用エントリーはこちら
    </a>
  </div>
</template>

<script>
  export default {
    name: 'TheEntry'
  }
</script>

<style scoped lang="scss">
.site-entry {
  background: url("~assets/img/bg_entry.png"),
  linear-gradient(to right,rgba(#0276ae, 1),rgba(#1445a3, 1));
  padding-top: 73px;
  padding-bottom: 83px;
  position: relative;
  background-size: cover;
  @include _mqmax(){
    padding-top: 38px;
    padding-bottom: 38px;
    background-position: center;
  }
  >.title {
    text-align: center;
    @include _mqmax(){
      max-width: 260px;
      margin: auto;
    }
  }
  >.btn {
    width: 250px;
    margin: 20px auto;
    color: #fff;
    background-color: #f58a00;
    font-size: 15px;
    border-radius: 30px;
    padding: 14px 0;
    display: block;
    text-align: center;
    text-decoration: none;
    transition: .3s;
    &:hover {
      opacity: 0.8;
    }
    @include _mqmax() {
      width: 200px;
      margin-top: 17px;
      font-size: 12px;
      padding: 9px 0;
    }
  }
   >.btn2 {
    width: 250px;
    margin: auto;
    color: #fff;
    background-color: #f58a00;
    font-size: 15px;
    border-radius: 30px;
    padding: 14px 0;
    display: block;
    text-align: center;
    text-decoration: none;
    transition: .3s;
    &:hover {
      opacity: 0.8;
    }
    @include _mqmax() {
      width: 200px;
      margin-top: 17px;
      font-size: 12px;
      padding: 9px 0;
    }
  }
}
</style>
