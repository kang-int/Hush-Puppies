<template>
  <top-title>积分商城</top-title>
  <Carousel
    :banners="banners"
    height="173px"
    trigger="click"
    arrow="never"
  ></Carousel>
  <nav-bar @toggle-comp="showComp"></nav-bar>
  <div class="placeholder">
    <component :is="currentTab"></component>
  </div>
  <main-tab-bar></main-tab-bar>
  <div class="bottom-placeholder"></div>
</template>

<script>
import TopTitle from 'components/TopTitle'
import Carousel from 'components/Carousel.vue'
import NavBar from './NavBar'
import All from './All'
import Bags from './Bags'
import Housewares from './Housewares'
import Shoes from './Shoes'
import Others from './Others'
import MainTabBar from '@/components/home/MainTabBar.vue'
import ProductService from 'network/ProductService'
export default {
  data() {
    return {
      currentTab: 'All',
      banners: []
    }
  },
  components: {
    TopTitle,
    Carousel,
    NavBar,
    All,
    Bags,
    Housewares,
    Shoes,
    Others,
    MainTabBar
  },
  methods: {
    showComp(id) {
      this.currentTab = id
    }
  },
  created() {
    ProductService.getBanner().then((res) => {
      let arr = []
      let bannerObj = {
        url: res.data[0].url,
        img: res.data[0].img
      }
      for (let i = 0; i < 5; i++) {
        arr.push(bannerObj)
      }
      this.banners = arr
    })
  }
}
</script>

<style scoped>
.el-carousel {
  width: 345px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 15px;
}
.el-carousel :deep(img) {
  width: 345px;
  height: 173px;
}

.nav-flex {
  margin: 16px 15px;
}

.placeholder {
  height: 776px;
}
.bottom-placeholder {
  height: 49px;
}
</style>
