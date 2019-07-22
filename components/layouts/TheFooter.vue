<template>
  <footer class="site-footer">
    <div class="footer-inner inner">
      <div class="top">
        <AppLogo class="logo" />
        <FooterNav />
      </div>
      <div class="middle">
        <FooterSns />
        <FooterNav2 class="nav2" />
      </div>
    </div>
    <AppLogo class="logo2" />
    <div class="bottom">
      <div class="footer-inner">
        <p class="copyright">
          Copyright(c) DreamVision Co.,Ltd.All Rights
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  import AppLogo from '../App/AppLogo'
  import FooterNav from '../App/FooterNav'
  import FooterNav2 from '../App/FooterNav2'
  import FooterSns from '../App/FooterSns'

  export default {
    name: 'TheFooter',
    components: { FooterSns, FooterNav2, FooterNav, AppLogo }
  }
</script>

<style scoped lang="scss">

.logo {
  @include _mqmax() {
    display: none;
  }
}

.logo2 {
  display: none;
  @include _mqmax(){
    display: block;
    margin-top: 20px;
    max-width: 150px;
    margin-right: auto;
    margin-left: auto;
  }
}
.site-footer {
  background-color: #333;
  > .inner {
    @include inner;
  }
  > .bottom {
    padding-top: 40px;
    padding-bottom: 145px;
    border-top: 1px solid #666;
    margin-top: 60px;
    @include _mqmax(){
      margin-top: 26px;
      padding-top: 0;
      padding-bottom: 20px;
      border: none;

    }
    .copyright {
      color: #ccc;
      font-size: 12px;
      text-align: center;
    }
  }
}

.footer-inner {
  > .top {
    padding: 30px 0 0;
    display: flex;
    justify-content: space-between;
  }
  > .middle {
    display: flex;
    flex-flow: row-reverse;
    justify-content: space-between;
    @include _mqmax(){
      display: block;
      > .nav2 {
        margin-top: 38px;
        justify-content: center;
      }
    }
  }
}



</style>
