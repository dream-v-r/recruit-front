<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <AppLogo />
        <FooterNav />
      </div>
      <div class="footer-middle">
        <FooterNav2 />
        <FooterSns />
      </div>
    </div>
    <div class="footer-bottom bottom">
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
.footer-inner {
  @include inner;
}

.site-footer {
  background-color: #333;
}

.footer-top {
  padding: 30px 0 0;
  display: flex;
  justify-content: space-between;
}

.footer-middle {
  display: flex;
  justify-content: space-between;
}

.footer-bottom {
  padding-top: 40px;
  padding-bottom: 145px;
  border-top: 1px solid #666;
  margin-top: 60px;
  .copyright {
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
}
</style>
