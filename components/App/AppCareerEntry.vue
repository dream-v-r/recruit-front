<template>
  <a
    href="https://en-gage.net/dream-v_career/work_932284/?via_recruit_page=1"
    class="entry-link"
    target="_blank"
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
  position: relative;
    &::before {
      content: '';
      background-color: #fff;
      height: 50px;
      position: absolute;
      top: 20px;
      margin: auto;
      right: 115px;
      border: solid 1px #fff;
    }
    @include _mqmax() {
    font-size: 10px;
    margin: 0 1px;
    &::before {
      display:none;
    }
  }
  > .title {
    position: relative;
    &::before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 8px;
    height: 8px;
    top: 20px;
    bottom: 0;
    margin: auto;
    right: -4px;
      @include _mqmax() {
        top: -34px;
        right: -2px;
      }
    }
    &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    top: 15px;
    bottom: 0;
    margin: auto;
    right: -6px;
      @include _mqmax() {
        top: -38px;
        right: -4px;
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
