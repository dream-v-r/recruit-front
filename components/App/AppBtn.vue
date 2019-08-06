<template>
  <button
    type="button"
    class="hamburger-menu"
    :class="{ active: hamburger }"
    @click="handleClick"
  >
    <span class="icon1" />
    <span class="icon2" />
    <span class="icon3" />
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
  background-color: $mainColor;
  &.active {
    > .icon1 {
      opacity: 0;
    }
    > .icon2 {
      transform: rotate(45deg) translate(13px, 12px);
    }
    > .icon3 {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }
  position: relative;
  > .icon1,
  .icon2,
  .icon3 {
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
    transition: 0.2s;
  }
  > .icon2 {
    margin-top: 13px;
  }
  > .icon3 {
    margin-bottom: 13px;
  }
}
</style>
