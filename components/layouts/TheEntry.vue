<template>
  <div class="site-entry">
    <h2 class="title">
      <img
        src="~/assets/img/text_entry.png"
        alt="新卒採用Entry"
      >
    </h2>
	<div class="btn_wrap">
    <a
      href="https://rikunabi-direct.jp/2021/corporation/detail/rd00036185"
      class="btn" target="_blank"
    >
    新卒採用エントリーはこちら
    </a>
    <a
      href="https://www.dream-v.co.jp/recruit/career_entry/"
      class="btn2"
    >
    キャリア採用エントリーはこちら
    </a>
	</div>
  </div>
</template>

<script>
  export default {
    name: 'TheEntry'
  }
</script>

<style scoped lang="scss">
.site-entry {
  background: url("~assets/img/bg_entry.png"), linear-gradient(to right, rgba(#0276ae, 1), rgba(#1445a3, 1));
  padding-top: 73px;
  padding-bottom: 83px;
  position: relative;
  background-size: cover;

  .title {
    text-align: center;
  }

  .btn_wrap {
    display: flex;
    width: 700px;
    margin: 20px auto 0;
    flex-direction: row;
    align-items: center;
  }

  .btn {
    position: relative;
    width: 300px;
    margin: 20px auto;
    color: #fff;
    background-color: #f58a00;
    font-size: 15px;
    border-radius: 30px;
    padding: 14px 0;
    display: block;
    text-align: center;
    text-decoration: none;
    transition: .3s;

    &:hover {
      opacity: 0.8;
    }

    &::before, &::after {
      content: '';
      position: absolute;
    }

    &::before {
      background-color: #fff;
      width: 8px;
      height: 8px;
      top: -1px;
      bottom: 0;
      margin: auto;
      right: 37px;
    }
@include _mqmax(){
		&::before {
		right: 23px;
		top: 0;
		}
	}
    &::after {
      width: 8px;
      height: 8px;
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      top: -5px;
      bottom: 0;
      margin: auto;
      right: 35px;
    }
@include _mqmax(){
    &::after {
		right: 21px;
		top: -4px;
		}
	}
}
  .btn2 {
    width: 300px;
    margin: auto;
    color: #fff;
    background-color: #f58a00;
    font-size: 15px;
    border-radius: 30px;
    padding: 14px 0;
    display: block;
    text-align: center;
    text-decoration: none;
    transition: .3s;

    &:hover {
      opacity: 0.8;
    }
  }
}

@include _mqmax(){
  .site-entry {
    padding-top: 38px;
    padding-bottom: 38px;
    background-position: center;

    .title {
      max-width: 260px;
      margin: auto;
    }

    .btn_wrap {
      flex-direction: column;
      width: 100%;
    }

    .btn {
      margin: 0 auto;
      width: 230px;
      margin-top: 17px;
      font-size: 12px;
      padding: 9px 0;
    }

    .btn2 {
      width: 230px;
      margin-top: 17px;
      font-size: 12px;
      padding: 9px 0;
    }
  }
}
</style>
