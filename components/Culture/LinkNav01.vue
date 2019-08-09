<template>
  <section class="linkNav">
    <nav>
      <ul>
        <li>
          <span>社員アンケートから<br>ひも解く社風</span>
        </li>
        <li>
          <a href="/culture-welfare">
            福利厚生
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped lang="scss">

  .linkNav {
    @include _mqmax(){
    }
    nav {
      background: #f7f7f7;
      padding: 60px 0 130px;
      @include _mqmax(){
        padding: 40px 5% 70px;
      }
      ul {
        border: 2px solid #029ae4;
        overflow: hidden;
        max-width: 1000px;
        margin: 0 auto;
        li {
          display: block;
          float: left;
          width: 50%;
          span {
            background: #029ae4;
            color: #FFF;
            display: block;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            line-height: 66px;
            height: 66px;
            @include _mqmax(){
              font-size: 15px;
              height: 64px;
              line-height: 1.5;
              padding: 10px 0 0;
            }
            br {
              display: none;
              @include _mqmax(){
                display: block;
              }
            }
          }
          a {
            color: #029ae4;
            display: block;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            line-height: 66px;
            height: 66px;
            text-decoration: none;
            @include _mqmax(){
              font-size: 15px;
              height: 64px;
              line-height: 64px;
            }
            &:hover {
              background: #029ae4;
              color: #FFF;
            }
          }
        }
      }
    }
  }

</style>
