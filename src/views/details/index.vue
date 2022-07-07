<template>
  <top-title></top-title>
  <swiper :banners="banners"></swiper>
  <product-info v-if="detailObj" :product="detailObj" class="product-info"></product-info>
  <gift-detail v-if="detailObj" :product="detailObj" class="detail"></gift-detail>
  <detail-tab-bar></detail-tab-bar>
</template>

<script>
import TopTitle from 'components/TopTitle.vue'
import Swiper from 'components/swiper/Swiper.vue'
import ProductInfo from './ProductInfo.vue'
import GiftDetail from './GiftDetail.vue'
import DetailTabBar from './DetailTabBar.vue'
import { request } from 'network/request.js'
export default {
  data() {
    return {
      banners: [],
      detailObj: null
    }
  },
  components: {
    TopTitle,
    Swiper,
    ProductInfo,
    GiftDetail,
    DetailTabBar
  },
  created() {
    request({
      url: `https://hps-data.blankpage.site/wxapp/hush-uat/product_${this.$route.params.id}.json`
    })
    .then(res => {
      this.detailObj = res.data
      console.log(this.detailObj);
      return res.data
    })
    .then(data => {
      // 轮播图
      let arr = []
      let bannerObj = {
        url: '',
        img: data.thumbUrl
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
.swiper {
  width: 375px;
  height: 375px;
}
.swiper :deep(img) {
  width: 375px;
  height: 375px;
}
.product-info {
  padding-top: 20px;
  padding-bottom: 37px;
  background-color: #fff;
}
.detail {
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 49px;
}
</style>