<template>
  <ul class="footer-nav2">
    <li class="nav-item">
      <nuxt-link
        to="about"
        class="nav-link"
      >
        会社概要
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link
        to="privacy"
        class="nav-link"
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
  }
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 11px;
  padding-right: 18px;
}
</style>
