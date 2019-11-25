<template>
  <a
    href="https://www.dream-v.co.jp/recruit/career_entry/"
    class="entry-link"
  >
    <span class="title"><span class="title2">キャリア採用</span>entry</span>
  </a>
</template>

<script>
export default {
  name: 'AppCareerEntry'
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
  font-weight: bold;
  @include _mqmax() {
    font-size: 10px;
    margin: 0 1px;
  }
  > .title {
    position: relative;
    &::before {
    content: '';
    background-color: #fff;
    height: 50px;
    position: absolute;
    top: 0;
    margin: auto;
    right: 99px;
    border: solid 1px #fff;
      @include _mqmax() {
        display: none;
      }
    }
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
