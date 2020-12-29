<template>
  <div class="main-wrapper">
    <img class="background" src="../../assets/bg-img-8.jpg" alt="">
    <router-view name="header"></router-view>
    <router-view name="content" ></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main-wrapper
   background-color #545c64
    background-image ''
    width 50%
    margin 0 auto

  .background
      position absolute
      top 0
      left 0
      right 0
      width 100%
      height 140%
      z-index -11
</style>
