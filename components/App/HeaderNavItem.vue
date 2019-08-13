<template>
  <li class="nav-item">
    <nuxt-link
      v-if="!blank"
      :to="`/${url}`"
      class="link"
    >
      <div class="title1">
        {{ title1 }}
      </div>
      <div class="title2">
        {{ title2 }}
      </div>
    </nuxt-link>
    <a
      v-if="blank"
      :href="url"
      target="_blank"
      class="link"
    >
      <div class="title1">
        {{ title1 }}
      </div>
      <div class="title2">
        {{ title2 }}
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'HeaderNavItem',
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
      blank: false
    }
  },
  created() {
    if (this.url === 'http://www.dream-v.co.jp/company/outline.html') {
      this.blank = true
    }
  }
}
</script>

<style scoped lang="scss">
.nav-item {
  > .link {
    display: block;
    border-left: 2px solid #fff;
    padding: 5px 40px 5px 14px;
    text-decoration: none;
    color: #fff;
    > .title1 {
      font-size: 13px;
    }
    > .title2 {
      font-size: 10px;
      text-transform: uppercase;
    }
  }
}
</style>
