<template>
  <button type="button" class="hamburger-menu" @click="handleClick">
    <span class="icon"></span>
  </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'AppBtn',
  computed: {
    ...mapGetters(['hamburger'])
  },
  methods: {
    ...mapMutations({
      hamburgerChange: 'hamburgerChange'
    }),
    handleClick: function() {
      this.hamburgerChange()
    }
  }
}
</script>

<style scoped lang="scss">
.hamburger-menu {
  width: 55px;
  height: 55px;
  position: relative;
  > .icon {
    width: 25px;
    height: 2px;
    background-color: #fff;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 0;
    left: 0;
    &::before,
    &::after {
      content: '';
      width: 25px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
    }
    &::before {
      top: -12px;
    }
    &::after {
      bottom: -12px;
    }
  }
}
</style>
