<template>
  <section class="movie">
    <div class="inner">
      <div class="titleMovie">
        <h3>
          REAL VOICE
        </h3>
      </div>
      <div class="movieBox">
        <iframe
          :src="movieUrl"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    props: {
      movieUrl: {
        type: String,
        default: ''
      }
    }
  }

</script>

<style scoped lang="scss">

  .movie {
    padding: 0 0 150px;
    .inner {
      max-width: 1000px;
      margin: 0 auto;
      padding: 90px 0 0;
      @include _mqmax() {
        max-width: 90%;
      }
      .titleMovie {
        margin: 0 0 50px;
        text-align: center;
        h3 {
          display: inline-block;
          font-family: 'Lato', sans-serif;
          font-size: 32px;
          font-weight: 900;
          padding: 0 0 10px;
          position: relative;
          @include _mqmax(){
            font-size: 20px;
            padding: 0 0 5px;
          }
          &:after {
            background: #029ae4;
            content: "";
            display: block;
            width: 100%;
            height: 4px;
            position: absolute;
            bottom: 0;
            left: left;
            @include _mqmax(){
              height: 2px;
            }
          }
        }
        &Movie {
        }
      }
      .movieBox {
        iframe {
          width: 100%;
          height: 562.5px;
          @include _mqmax(){
            height: 189px;
          }
        }
      }

    }
  }


</style>