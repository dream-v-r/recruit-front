<template>
  <main>
    <div>
      <KeyVisual class="welfare" />
      <LinkNav02 class="welfare" />
      <Culture02 class="welfare" />
      <Culture03 class="welfare" />
    </div>
  </main>
</template>

<script>
  import KeyVisual from '../components/Culture/KeyVisual'
  import LinkNav02 from '../components/Culture/LinkNav02'
  import Culture02 from '../components/Culture/Culture02'
  import Culture03 from '../components/Culture/Culture03'

  export default {
    components: { KeyVisual, LinkNav02, Culture02, Culture03 }
  }
</script>

<style lang="scss" scoped>
</style>
