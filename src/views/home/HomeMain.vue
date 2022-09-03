<template>
  <div class="main">
    <Reward></Reward>
    <link-menu></link-menu>
    <Carousel
      :banners="banners"
      height="345px"
      trigger="click"
      arrow="never"
    ></Carousel>
  </div>
</template>

<script>
import Reward from '@/views/home/Reward'
import LinkMenu from './LinkMenu'
import Carousel from 'components/Carousel.vue'
import ProductService from 'network/ProductService'

export default {
  data() {
    return {
      banners: []
    }
  },
  components: {
    Reward,
    LinkMenu,
    Carousel
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
.main {
  background-color: #fff;
  padding-bottom: 27px;
}

.el-carousel {
  width: 345px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 12px;
}

.el-carousel :deep(img) {
  width: 345px;
  height: 345px;
}
</style>
