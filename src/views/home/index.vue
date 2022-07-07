<template>
  <home-header></home-header>
  <home-main></home-main>
  <p class="goods-title">热门兑换</p>
  <hot-goods></hot-goods>
  <div class="placeholder"></div>
  <main-tab-bar></main-tab-bar>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeMain from './HomeMain'
import HotGoods from './HotGoods'
import MainTabBar from 'components/home/MainTabBar.vue'
export default {
  components: {
    HomeHeader,
    HomeMain,
    HotGoods,
    MainTabBar,
  }
}
</script>

<style scoped>
.goods-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;
  color: #616161;
  margin: 20px 0 0 15px;
  letter-spacing: 2px;
}
.goods-list {
  margin-top: 10px;
}
.placeholder {
  height: 49px;
}
</style>