<template>
  <main>
    <div>
      <KeyVisual class="welfare" />
      <linkNav02 class="welfare" />
      <Culture02 class="welfare" />
      <CultureVoice class="welfare" />
    </div>
  </main>
</template>

<script>
  import KeyVisual from '../components/Culture/KeyVisual'
  import linkNav02 from '../components/Culture/linkNav02'
  import Culture02 from '../components/Culture/Culture02'
  import CultureVoice from '../components/Culture/CultureVoice'

  export default {
    components: { KeyVisual, linkNav02, Culture02, CultureVoice }
  }
</script>

<style lang="scss" scoped>
</style>
