<template>
  <section class="section01">
    <div class="sec-head">
      <ul class="sec-list">
        <li class="sec-item"><a href="#" v-scroll-to="{
          el: '#company'
        }">会社概要</a></li>
        <li class="sec-item"><a href="#" v-scroll-to="{
          el: '#service'
        }">サービス紹介</a></li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section01 {
    line-height: 1;
  }
  .sec-head {
    background-color: #f7f7f7;
    padding: 60px 0 70px;
    @include _mqmax(){
      padding: 40px 20px;
    }
  }
  .sec-list {
    display: flex;
    align-items: center;
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;
    @include _mqmax(){
      flex-wrap: wrap;
      max-width: none;
    }
  }
  .sec-item {
    width: 485px;
    border: 2px solid #029ae4;
    background-color: #fff;
    @include _mqmax(){
      width: 100%;
      border: 1px solid #029ae4;
    }
    > a {
      display: block;
      color: #029ae4;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      padding: 24px 0;
      position: relative;
      @include _mqmax(){
        font-size: 15px;
        padding: 19px 0;
      }
      &:hover {
        color: #fff;
        background-color: #029ae4;
      }
      &:before {
        content: '';
        width: 50px;
        height: 50px;
        background-color: #e5f5fc;
        position: absolute;
        top: 0;
        right: 8px;
        bottom: 0;
        margin: auto;
        @include _mqmax(){
          width: 35px;
          height: 35px;
          right: 10px;
        }
      }
      &:after {
        content: '';
        width: 12px;
        height: 12px;
        border-top: 3px solid #029ae4;
        border-right: 3px solid #029ae4;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        position: absolute;
        top: 50%;
        right: 26px;
        margin-top: -8px;
        @include _mqmax(){
          width: 9px;
          height: 9px;
          border-top: 2px solid #029ae4;
          border-right: 2px solid #029ae4;
          right: 23px;
          margin-top: -7px;
        }
      }
    }
    &:first-child {
      margin-right: 15px;
      @include _mqmax(){
        margin-right: 0;
        margin-bottom: 19px;
      }
    }
    &:last-child {
      margin-left: 15px;
      @include _mqmax(){
        margin-left: 0;
      }
    }
  }
</style>
