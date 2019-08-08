<template>
  <main>
    <div>
      <KeyVisual class="careerup" />
      <Requirements02 class="careerup" />
      <System03 class="careerup" />
      <System04 class="careerup" />
      <System05 class="careerup" />
    </div>
  </main>
</template>

<script>
  import KeyVisual from '../../components/Job/KeyVisual'
  import Requirements02 from '../../components/Job/Requirements02'
  import System03 from '../../components/Job/System03'
  import System04 from '../../components/Job/System04'
  import System05 from '../../components/Job/System05'

  export default {
    components: { KeyVisual, Requirements02, System03, System04, System05 }
  }
</script>


<style lang="scss" scoped>
  .careerup {
    color: #333;
  }
</style>
