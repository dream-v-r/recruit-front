<template>
  <div class="sns-block">
    <p class="sns-title">
      FOLLOW US ON
    </p>
    <ul class="sns-list">
      <li class="sns-item item">
        <a
          href="#"
          class="sns-link link"
        >
          <img
            src="~/assets/img/icon_facebook.png"
            alt="facebook"
          >
        </a>
      </li>
      <li class="sns-item item">
        <a
          href="#"
          class="sns-link link"
        >
          <img
            src="~/assets/img/icon_twitter.png"
            alt="twitter"
          >
        </a>
      </li>
      <li class="sns-item item">
        <a
          href="#"
          class="sns-link link"
        >
          <img
            src="~/assets/img/icon_insta.png"
            alt="instagram"
          >
        </a>
      </li>
      <li class="sns-item item">
        <a
          href="#"
          class="sns-link link"
        >
          <img
            src="~/assets/img/icon_line.png"
            alt="line@"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterSns'
}
</script>

<style scoped lang="scss">
.sns-block {
  display: flex;
  align-items: center;
}
.sns-title {
  color: #fff;
  font-size: 12px;
}
.sns-list {
  display: flex;
  > .item {
    margin-left: 20px;
  }
}
.sns-item {
  > .link {
    width: 30px;
    height: 30px;
  }
}
.sns-link {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
