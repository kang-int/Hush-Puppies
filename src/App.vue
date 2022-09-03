<template>
  <div id="container">
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from '@/views/home/MainTabBar.vue'
export default {
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import url(assets/css/base.css);
  #container {
    width: 375px;
    margin: 0 auto;
  }
</style>