<template>
  <section class="site-news">
    <div class="inner news-inner">
      <h2 class="title">
        NEWS
      </h2>
      <ul class="list">
        <!--li class="item news-item">
          <time
            datetime="2020-03-04"
            class="date"
          >2020.03.04</time>
          <p class="text">
            <a href="https://www.dream-v.co.jp/recruit/seminar/">
            3月30日（月）21新卒採用会社説明会開催決定！
            </a>
          </p>
        </li-->
        <li class="item news-item">
          <time
            datetime="2020-03-01"
            class="date"
          >2020.03.01</time>
          <p class="text">
            <a href="https://rikunabi-direct.jp/2021/corporation/detail/rd00036185" target="_balank">
            2021新卒採用のエントリーを開始しました。
            </a>
          </p>
        </li>
        <li class="item news-item">
          <time
            datetime="2019-08-19"
            class="date"
          >2019.08.19</time>
          <p class="text">
            採用サイトを公開しました。
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'TheNews'
  }
</script>

<style scoped lang="scss">
.news-item {
  display: flex;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 18px;
  @include _mqmax(){
    padding-top: 21px;
    display: block;
  }
  > .date {
    font-size: 15px;
    color: $mainColor;
    margin-right: 35px;
    line-height: 1;
    display: block;
    @include _mqmax(){
      margin-right: 0;
      margin-bottom: 8px;
    }
  }
  > .text {
  font-size: 14px;
  color: #ccc;
  a {
    font-size: 14px;
    color: #ccc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
  + .news-item {
    border-top: 1px solid #ccc;
  }
}

.site-news {
  background-color: #333;
  max-width: 1000px;
  margin: auto;
  padding-top: 64px;
  padding-bottom: 33px;
  @include _mqmax(){
    padding-top: 29px;
    padding-bottom: 0;
  }
  > .inner {
    max-width: 750px;
    margin: auto;
    @include _mqmax(){
      padding-right: 20px;
      padding-left: 20px;
    }
  }
}
  .news-inner {
    > .title {
      line-height: 1;
      color: #fff;
      padding-bottom: 15px;
      border-bottom: 1px solid #fff;
      @include _mqmax(){
        font-size: 20px;
      }
    }
  }
</style>
