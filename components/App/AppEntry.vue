<template>
  <a
    href="http://www.dream-v.co.jp/recruit/entry/"
    class="entry-link"
  >
    <span class="title">entry</span>
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
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  @include _mqmax() {
    font-size: 10px;
  }
  > .title {
    position: relative;
    &::before {
      content: '';
      width: 24px;
      height: 2px;
      background-color: #fff;
      right: -42px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      @include _mqmax() {
        display: none;
      }
    }
    &::after {
      content: '';
      background-color: #fff;
      width: 9px;
      height: 2px;
      position: absolute;
      transform: rotate(45deg);
      top: -6px;
      bottom: 0;
      margin: auto;
      right: -42px;
      @include _mqmax() {
        display: none;
      }
    }
  }
}
</style>
