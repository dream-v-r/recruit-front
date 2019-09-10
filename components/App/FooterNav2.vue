<template>
  <ul class="footer-nav2">
    <li class="nav-item -first">
      <a
        href="http://www.dream-v.co.jp/"
        class="link -first"
        target="_blank"
      >
        コーポレートサイト
      </a>
    </li>
    <li class="nav-item -second">
      <a
        href="http://www.dream-v.co.jp/privacy/"
        class="link -second"
        target="_blank"
      >
        プライバシーポリシー
      </a>
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
    display: flex;
    align-items: center;
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
      padding-right: 35px;
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
      right: 0;
      @include _mqmax(){
        right: 17px;
      }
    }
    &::after {
      width: 8px;
      height: 8px;
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      top: -4px;
      bottom: 0;
      margin: auto;
      right: -3px;
      @include _mqmax(){
        right: 15px;
      }
    }
    &.-first {
      @include _mqmax(){
        border-right: 1px solid #fff;
      }
    }
  }
}
</style>
