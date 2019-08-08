<template>
  <main>
    <div>
      <KeyVisual class="newgrads" />
      <Requirements01 class="newgrads" />
      <System01 class="newgrads" />
      <System02 class="newgrads" />
    </div>
  </main>
</template>

<script>
  import KeyVisual from '../../components/Job/KeyVisual'
  import Requirements01 from '../../components/Job/Requirements01'
  import System01 from '../../components/Job/System01'
  import System02 from '../../components/Job/System02'

  export default {
    components: { KeyVisual, Requirements01, System01, System02 }
  }
</script>


<style lang="scss" scoped>
  .newgrads {
    color: #333;
  }
</style>
