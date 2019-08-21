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
      target="_blank"
      class="link"
    >
      <div class="title2">
        {{ title2 }}
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'HeaderNavItemSp',
    props: {
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
        disable: false
      }
    },
    created() {
      if (this.url === 'http://www.dream-v.co.jp/company/outline.html') {
        this.blank = true
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
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 10px 0;
    color: #fff;
    &.disable {
      opacity: .5;
      pointer-events: none;
    }
    > .title2 {
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 0.2em;
    }
  }
}
</style>
