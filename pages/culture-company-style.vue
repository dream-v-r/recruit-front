<template>
  <main>
    <div>
      <KeyVisual class="companyStyle" />
      <linkNav01 class="companyStyle" />
      <Culture01 class="companyStyle" />
      <CultureVoice class="companyStyle" />
    </div>
  </main>
</template>

<script>
  import KeyVisual from '../components/Culture/KeyVisual'
  import linkNav01 from '../components/Culture/linkNav01'
  import Culture01 from '../components/Culture/Culture01'
  import CultureVoice from '../components/Culture/CultureVoice'

  export default {
    components: { KeyVisual, linkNav01, Culture01, CultureVoice }
  }
</script>

<style lang="scss" scoped>
</style>
