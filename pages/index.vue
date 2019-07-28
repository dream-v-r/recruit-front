<template>
  <main>
    <div class="top-main">
      <SectionMain class="section" />
      <TheColumnBanner />
    </div>
  </main>
</template>

<script>
  import SectionMain from '../components/Top/SectionMain'
  import TheColumnBanner from '../components/layouts/TheColumnBanner'

  export default {
    components: { TheColumnBanner, SectionMain }
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
