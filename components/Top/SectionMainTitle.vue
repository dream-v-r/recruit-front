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
        :class="{pc: sp}"
      >
      <img
        v-if="sp"
        :src="commmentImgPathSp"
        :alt="comment"
        class="sp"
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
      },
      sp: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      titleImgPath: function() {
        return require(`~/assets/img/top/section${this.number}_title.png`)
      },
      commentImgPath: function() {
        return require(`~/assets/img/top/section${this.number}_comment.png`)
      },
      commmentImgPathSp: function() {
        return require(`~/assets/img/top/section${this.number}_comment_sp.png`)
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
        @include _mqmax(){
          top: 17px;
          max-width: 191px;
        }
      }
      > .title {
        @include _mqmax(){
          max-width: 103px;
        }
      }
    }
    .section04 & {
      >.comment {
        @include _mqmax() {
          max-width: 175px;
          left: 40.8%;
          top: 25px;
        }
      }
      >.title {
        @include _mqmax() {
          max-width: 135px;
        }
      }
    }
    .section05 & {
      > .comment {
        left: 206px;
        top: 56px;
      }
      > .title {

      }
    }
  }

</style>
