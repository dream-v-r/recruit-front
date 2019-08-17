<template>
  <li class="nav-item">
    <nuxt-link
      v-if="!blank"
      :to="`/${url}`"
      class="link"
      :class="{ disable: disable }"
    >
      <div class="title2">
        {{ title2 }}
      </div>
    </nuxt-link>
    <a
      v-if="blank"
      :href="url"
      class="link"
      target="_blank"
    >
      <div class="title2">
        {{ title2 }}
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'FooterNavItem',
  props: {
    title1: {
      type: String,
      default: ''
    },
    title2: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      blank: false,
      disable:  false
    }
  },
  created() {
    if (this.url === 'http://www.dream-v.co.jp/company/outline.html') {
      this.blank = true
    }
    if (this.url === 'seminar') {
      this.disable = true
    }
    if (this.url === 'seminar') {
      this.disable = true
    }
  }
}
</script>

<style scoped lang="scss">
.nav-item {
  > .link {
    font-size: 10px;
    color: #ccc;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    &.disable {
      opacity: .5;
      pointer-events: none;
    }
    @include _mqmax() {
      font-size: 14px;
      padding: 10px 0;
      display: block;
    }
  }
}
</style>
