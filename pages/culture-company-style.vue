<template>
  <main>
    <div>
      <KeyVisual class="companyStyle" />
      <LinkNav01 class="companyStyle" />
      <Culture01 class="companyStyle" />
      <CultureVoice class="companyStyle" />
    </div>
  </main>
</template>

<script>
  import KeyVisual from '../components/Culture/KeyVisual'
  import LinkNav01 from '../components/Culture/LinkNav01'
  import Culture01 from '../components/Culture/Culture01'
  import CultureVoice from '../components/Culture/CultureVoice'

  export default {
    components: { KeyVisual, LinkNav01, Culture01, CultureVoice }
  }
</script>

<style lang="scss" scoped>
</style>
