<template>
  <top-title>积分商城</top-title>
  <swiper></swiper>
  <nav-bar @toggle-comp="showComp"></nav-bar>
  <component :is="currentTab"></component>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
import TopTitle from 'components/TopTitle'
import Swiper from 'components/swiper/Swiper'
import NavBar from './NavBar'
import All from './All'
import Bags from './Bags'
import Housewares from './Housewares'
import Shoes from './Shoes'
import Others from './Others'
export default {
  data() {
    return {
      currentTab: 'All'
    }
  },
  components: {
    TopTitle,
    Swiper,
    NavBar,
    All, Bags, Housewares, Shoes, Others,
  },
  methods: {
    showComp(id) {
      this.currentTab = id
    }
  }
}
</script>

<style>
.swiper {
  width: 345px;
  height: 173px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 15px;
}

.swiper img {
  width: 345px;
  height: 173px;
}

.nav-flex {
  margin: 16px 15px;
}
</style>