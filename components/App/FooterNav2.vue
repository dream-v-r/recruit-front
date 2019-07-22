<template>
  <ul class="footer-nav2">
    <li class="nav-item -first">
      <nuxt-link
        to="about"
        class="link -first"
      >
        会社概要
      </nuxt-link>
    </li>
    <li class="nav-item -second">
      <nuxt-link
        to="privacy"
        class="link -second"
      >
        プライバシーポリシー
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FooterNav2'
}
</script>

<style scoped lang="scss">
.footer-nav2 {
  display: flex;
  .nav-item {
    margin-right: 31px;
    position: relative;
    &.-second {
      @include _mqmax(){
        margin: 0;
      }
    }
    &.-first {
      @include _mqmax(){
        margin-right: 23px;
      }
    }
  }
  .link {
    color: #fff;
    text-decoration: none;
    font-size: 11px;
    padding-right: 18px;
    display: block;
    @include _mqmax(){
      padding-right: 45px;
    }
    &::before,&::after {
      content: '';
      position: absolute;
    }
    &::before {
      background-color: #ccc;
      width: 8px;
      height: 8px;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 25px;
    }
    &::after {
      width: 8px;
      height: 8px;
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      top: -4px;
      bottom: 0;
      margin: auto;
      right: 23px;
    }
    &.-first {
      @include _mqmax(){
        border-right: 1px solid #fff;
      }
    }
    @include _mqmax(){

    }
  }
}
</style>
