<template>
  <div id="container">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/home/MainTabBar'
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