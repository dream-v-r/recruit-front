<template>
  <div>
    <SectionMain01 class="section01" />
    <SectionMain02 class="section02" />
    <SectionMain03 class="section03" />
  </div>
</template>
<script>


  import SectionMain01 from './SectionMain01'
  import SectionMain02 from './SectionMain02'
  import SectionMain03 from './SectionMain03'
  export default {
    name: 'SectionMain',
    components: { SectionMain02, SectionMain01, SectionMain03 },
  }
</script>
<style scoped lang="scss">
  .feature-content {
    > .title {
      font-size: 24px;
      @include _mqmax(){
        font-size: 20px;
      }
    }
    > .detail {
      margin-top: 14px;
      font-size: 15px;
      @include _mqmax(){
        font-size: 14px;
      }
    }
    > .btn {
      margin-top: 38px;
      max-width: 205px;
      @include _mqmax(){
        margin-top: 17px;
        margin-left: auto;
        max-width: 156px;
      }
    }
  }
</style>
