<template>
  <section class="site-news">
    <div class="inner news-inner">
    <h2 class="title">NEWS</h2>
    <ul class="list">
      <li class="item news-item">
        <time datetime="0000.00.00" class="date">0000.00.00</time>
        <p class="text">記事のタイトルが入ります。記事のタイトルが入ります。記事のタイトルが入ります。記事のタイトルが入ります。記事のタイトルが入ります。記事のタイト...</p>
      </li>
      <li class="item news-item">
        <time datetime="0000.00.00" class="date">0000.00.00</time>
        <p class="text">記事のタイトルが入ります。記事のタイトルが入ります。記事のタイトルが入ります。記事のタイトルが入ります。記事のタイトルが入ります。記事のタイト...</p>
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
  align-items: flex-start;
  padding-top: 35px;
  padding-bottom: 35px;
  > .date {
    font-size: 15px;
    color: $mainColor;
    margin-right: 35px;
  }
  > .text {
    font-size: 14px;
    color: #ccc;
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
  padding-bottom: 64px;
  > .inner {
    max-width: 750px;
    margin: auto;
  }
}
  .news-inner {
    > .title {
      line-height: 1;
      color: #fff;
      padding-bottom: 15px;
      border-bottom: 1px solid #fff;
    }
  }
</style>
