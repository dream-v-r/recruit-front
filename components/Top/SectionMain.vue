<template>
  <div>
    <SectionMain01
      v-observe-visibility="visibilityChanged1"
      class="section01 section-area"
      :class="{active: isVisible1}"
    />
    <SectionMain02
      v-observe-visibility="visibilityChanged2"
      class="section02 section-area"
      :class="{active: isVisible2}"
    />
    <SectionMain03
      v-observe-visibility="visibilityChanged3"
      class="section03 section-area"
      :class="{active: isVisible3}"
    />
    <SectionMain04
      v-observe-visibility="visibilityChanged4"
      class="section04 section-area"
      :class="{active: isVisible4}"
    />
    <SectionMain05
      v-observe-visibility="visibilityChanged5"
      class="section05 section-area"
      :class="{active: isVisible5}"
    />
  </div>
</template>
<script>
  import SectionMain01 from './SectionMain01'
  import SectionMain02 from './SectionMain02'
  import SectionMain03 from './SectionMain03'
  import SectionMain04 from './SectionMain04'
  import SectionMain05 from './SectionMain05'
  export default {
    name: 'SectionMain',
    components: { SectionMain02, SectionMain01, SectionMain03, SectionMain04, SectionMain05 },
    data(){
      return {
        isVisible1: true,
        isVisible2: true,
        isVisible3: true,
        isVisible4: true,
        isVisible5: true
      }
    },
    methods: {
      visibilityChanged1(isVisible) {
        this.isVisible1 = isVisible;
      },
      visibilityChanged2(isVisible) {
        this.isVisible2 = isVisible;
      },
      visibilityChanged3(isVisible) {
        this.isVisible3 = isVisible;
      },
      visibilityChanged4(isVisible) {
        this.isVisible4 = isVisible;
      },
      visibilityChanged5(isVisible) {
        this.isVisible5 = isVisible;
      }
    },
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
  .section-area {
    opacity: 0;
    transition-delay: 0.2s;
    transition-duration: 1s;
    transition-timing-function: ease-out;
    &.active {
      opacity: 1;
    }
  }
</style>
