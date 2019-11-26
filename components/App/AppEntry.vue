<template>
  <a
    href="https://rikunabi-direct.jp/2020/corporation/detail/rd00036185" target="_blank"
    class="entry-link"
  >
    <span class="title"><span class="title2">新卒採用</span>entry</span>
  </a>
</template>

<script>
export default {
  name: 'AppEntry'
}
</script>

<style scoped lang="scss">
.entry-link {
  background-color: #f58a00;
  color: #fff;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  font-weight: bold;

  .title {
    &::before, &::after {
      content: '';
      position: absolute;
    }

    &:before {
      background-color: #fff;
      width: 8px;
      height: 8px;
      top: 20px;
      bottom: 0;
      margin: auto;
      right: 138px;
    }

    &::after {
      width: 8px;
      height: 8px;
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      top: 15px;
      bottom: 0;
      margin: auto;
      right: 136px;
    }

    .title2 {
      display: block;
      font-size: 13px;
      font-weight: normal;
    }
  }
}

@include _mqmax() {
  .entry-link {
    font-size: 10px;
    margin-left: 10px;
  }
}

@include _mqmax() {
  .entry-link .title:before {
    top: -33px;
  }
}

@include _mqmax() {
  .entry-link .title::after {
    top: -38px;
  }
}

@include _mqmax() {
  .entry-link .title .title2 {
    font-size: 10px;
  }
}
</style>
