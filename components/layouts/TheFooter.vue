<template>
  <footer class="site-footer">
    <div class="l-inner">
      <div class="footer-top">
        <AppLogo />
        <FooterNav />
      </div>
    </div>
  </footer>
</template>

<script>
import AppLogo from '../App/AppLogo'
import FooterNav from '../App/FooterNav'
export default {
  name: 'TheFooter',
  components: { FooterNav, AppLogo }
}
</script>

<style scoped lang="scss">
.site-footer {
  background-color: #333;
}
.footer-top {
  padding: 30px 0 0;
  display: flex;
  justify-content: space-between;
}
</style>
