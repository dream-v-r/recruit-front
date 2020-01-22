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
  @include _mqmax() {
    font-size: 10px;
	margin-left: 10px;
  }
  > .title {
	> .title2{
	display:block;
	font-size:13px;
	font-weight: normal;
	@include _mqmax() {
		font-size: 10px;
	}
	}
  }
}
</style>
