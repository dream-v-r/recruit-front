<template>
  <div class="site-entry">
    <div class="title">
      <img
        src="~/assets/img/text_entry.png"
        alt="Entry"
      >
    </div>
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
  >.title {
    text-align: center;
  }
  >.btn {
    width: 250px;
    margin: auto;
  }
}
</style>
