<template>
  <div class="main">
    <Reward></Reward>
    <link-menu></link-menu>
    <swiper :banners="banners"></swiper>
  </div>
</template>

<script>
import Reward from 'components/home/Reward'
import LinkMenu from './LinkMenu'
import Swiper from 'components/swiper/Swiper'
import { request } from 'network/request.js'
export default {
  data() {
    return {
      banners: []
    }
  },
  components: {
    Reward,
    LinkMenu,
    Swiper
  },
  created() {
    request({
      url: '/home_banner.json'
    }).then(res => {
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
.main {
  background-color: #fff;
  padding-bottom: 27px;
}

.swiper {
  width: 345px;
  height: 120px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 12px;
}

.swiper :deep(img) {
  width: 345px;
  height: 120px;
}
</style>