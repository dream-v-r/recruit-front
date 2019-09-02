<template>
  <div>
    <nuxt-link
      v-if="!blank && !aLink"
      :to="url"
      class="section-mainBtn"
      :class="{ disable: disable }"
    >
      Read More
    </nuxt-link>
    <a
      v-if="blank"
      :href="url"
      class="section-mainBtn"
      target="_blank"
    >
      Read More
    </a>
    <a
      v-if="aLink"
      :href="url"
      class="section-mainBtn"
    >
      Read More
    </a>
  </div>
</template>

<script>
  export default {
    name: 'SectionMainBtn',
    props: {
      url: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        blank: false,
        disable: false,
        aLink: false
      }
    },
    created() {
      if (this.url === 'http://www.dream-v.co.jp/company/outline.html') {
        this.blank = true
      }
      if (this.url === 'http://www.dream-v.co.jp/recruit/seminar/') {
        this.aLink= true
      }
    }
  }
</script>

<style scoped lang="scss">
  .section-mainBtn {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(to right, #0275ae, #1445a3);
    font-size: 13px;
    text-align: center;
    padding: 15px 0;
    border-radius: 30px;
    transition: 0.3s;
    &.disable {
      background: #ccc;
      pointer-events: none;
      &:hover {
        opacity: 1;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
</style>
