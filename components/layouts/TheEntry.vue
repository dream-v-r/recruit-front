<template>
  <div class="site-entry">
    <h2 class="title">
      <img
        src="~/assets/img/text_entry.png"
        alt="Entry"
      >
    </h2>
    <BaseBtn
      title="エントリーはこちら"
      url="entry"
      class="btn"
    />
  </div>
</template>

<script>
  import BaseBtn from '../Base/BaseBtn'
  export default {
    name: 'TheEntry',
    components: { BaseBtn }
  }
</script>

<style scoped lang="scss">
.site-entry {
  background: url("~assets/img/bg_entry.png"),
  linear-gradient(to right,rgba(#0276ae, 1),rgba(#1445a3, 1));
  padding-top: 73px;
  padding-bottom: 83px;
  position: relative;
  background-size: cover;
  @include _mqmax(){
    padding-top: 38px;
    padding-bottom: 38px;
    background-position: center;
  }
  >.title {
    text-align: center;
    @include _mqmax(){
      max-width: 260px;
      margin: auto;
    }
  }
  >.btn {
    width: 250px;
    margin: auto;
    @include _mqmax() {
      width: 183px;
      margin-top: 17px;
    }
  }
}
</style>
