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
    }
    .section01 & {
      > .comment {
        top: 50px;
        left: 28px;
        @include _mqmax() {
          width: 69.85074%;
          left: auto;
          right: 0;
        }
      }
      > .title {
        @include _mqmax() {
          max-width: 135px;
        }
      }
    }
    .section02 & {
      >.comment {
        top: 70px;
        right: 0;
        @include _mqmax() {
          top: 13px;
          max-width: 190px;
          right: auto;
          left: 41.09589%;
        }
      }
      >.title {
        @include _mqmax(){
          max-width: 139px;
        }
      }
    }
    .section03 & {
      > .comment {
        top: 52px;
        left: 112px;
      }
    }
  }

</style>
