<template>
  <main>
    <div>
      <KeyVisual class="people" />
      <PeopleList class="people" />
    </div>
  </main>
</template>

<script>
  import KeyVisual from '../components/People/KeyVisual'
  import PeopleList from '../components/People/PeopleList'

  export default {
    components: { KeyVisual, PeopleList }
  }
</script>

<style lang="scss" scoped>
</style>
