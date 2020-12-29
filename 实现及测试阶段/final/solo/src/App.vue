<template>
  <div id="app">
    
    <transition name="fade" mode="out-in">
      <!-- <keep-alive> -->
      <router-view v-if="isRouterAlive"></router-view>
      <!-- 全局布置刷新方法 -->
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  provide () {
        return {
            reload: this.reload
        }
    },
    data () {
        return {
            isRouterAlive: true
        }
    },
     methods: {
        reload () {
            this.isRouterAlive = false
            this.$nextTick(function () {
            this.isRouterAlive = true
        })
    }
    },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

</style>
