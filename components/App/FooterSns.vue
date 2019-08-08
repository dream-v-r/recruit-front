<template>
  <div class="sns-block">
    <p class="sns-title title">
      FOLLOW US ON
    </p>
    <ul class="sns-list">
      <li class="sns-item item">
        <a
          href="https://www.facebook.com/dreamvision.pr/"
          class="sns-link link"
          target="_blank"
        >
          <img
            src="~/assets/img/icon_facebook.png"
            alt="facebook"
          >
        </a>
      </li>
      <li class="sns-item item">
        <a
          href="https://twitter.com/dv_co_jp"
          class="sns-link link"
          target="_blank"
        >
          <img
            src="~/assets/img/icon_twitter.png"
            alt="twitter"
          >
        </a>
      </li>
      <li class="sns-item item">
        <a
          href="https://www.instagram.com/dreamvision_pr"
          class="sns-link link"
          target="_blank"
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
  @include _mqmax(){
    justify-content: center;
    flex-wrap: wrap;
  }
}
.sns-title {
  color: #ccc;
  font-size: 12px;
  @include _mqmax(){
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }
}
.sns-list {
  display: flex;
  > .item {
    margin-left: 20px;
    @include _mqmax(){
      margin-right: 10px;
      margin-left: 10px;
    }
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
