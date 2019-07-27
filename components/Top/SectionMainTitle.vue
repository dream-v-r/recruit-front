<template>
  <div class="section-title">
    <h2 class="title">
      <img
        :src="titleImgPath"
        :alt="title"
      >
    </h2>
    <p class="comment">
      <img
        :src="commentImgPath"
        :alt="comment"
      >
    </p>
  </div>
</template>

<script>
  export default {
    name: 'SectionMainTitle',
    props: {
      number: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      comment: {
        type: String,
        default: ''
      }
    },
    computed: {
      titleImgPath: function() {
        return require(`~/assets/img/top/section${this.number}_title.png`)
      },
      commentImgPath: function() {
        return require(`~/assets/img/top/section${this.number}_comment.png`)
      }
    }
  }
</script>

<style scoped lang="scss">
.section-title {
  position: relative;
  > .comment {
    position: absolute;
    top: 50px;
    left: 28px;
  }
}
</style>
