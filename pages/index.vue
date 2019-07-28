<template>
  <main>
    <div class="top-main">
      <SectionMain class="section" />
    </div>
  </main>
</template>

<script>
  import SectionMain from '../components/Top/SectionMain'

  export default {
    components: { SectionMain }
  }
</script>

<style lang="scss" scoped>
  p {
    color: $mainColor;
  }
  .top-main {
    .section {
      margin-top: 120px;
      border-bottom: 1px solid #999;
    }
  }
</style>
