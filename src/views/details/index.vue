<template>
  <top-title></top-title>
  <Carousel
    :banners="banners"
    height="375px"
    trigger="click"
    arrow="never"
  ></Carousel>
  <product-info
    v-if="detailObj"
    :product="detailObj"
    class="product-info"
    ref="productInfo"
  ></product-info>
  <gift-detail
    v-if="detailObj"
    :product="detailObj"
    class="detail"
  ></gift-detail>
  <detail-tab-bar @exchange="onExchange"></detail-tab-bar>
  <div id="mask" v-if="isMaskShow">
    <popup-success
      @cancel="isMaskShow = !isMaskShow"
      v-if="isPopupSuccessShow"
    ></popup-success>
    <popup-fail @cancel="isMaskShow = !isMaskShow" v-else></popup-fail>
  </div>
</template>

<script>
import TopTitle from 'components/TopTitle.vue'
import Carousel from 'components/Carousel.vue'
import ProductInfo from './ProductInfo.vue'
import GiftDetail from './GiftDetail.vue'
import DetailTabBar from './DetailTabBar.vue'
import PopupSuccess from './PopupSuccess.vue'
import PopupFail from './PopupFail.vue'
import ProductService from 'network/ProductService'

export default {
  data() {
    return {
      banners: [],
      detailObj: null,
      isMaskShow: false,
      isPopupSuccessShow: false
    }
  },
  props: {
    id: String
  },
  components: {
    TopTitle,
    Carousel,
    ProductInfo,
    GiftDetail,
    DetailTabBar,
    PopupSuccess,
    PopupFail
  },
  computed: {
    totalPoint() {
      return this.$store.state.totalPoint
    }
  },
  methods: {
    onExchange() {
      this.isMaskShow = !this.isMaskShow
      let productPoint = this.$refs.productInfo.productPoint
      if (this.totalPoint >= productPoint) {
        this.isPopupSuccessShow = true
        this.$store.dispatch('consume', productPoint)
      } else {
        this.isPopupSuccessShow = false
      }
    }
  },
  created() {
    ProductService.getProductDetail(this.id)
      .then((res) => {
        this.detailObj = res.data
        return res.data
      })
      .then((data) => {
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
.el-carousel {
  height: 375px;
  z-index: 0;
}
.el-carousel :deep(img) {
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
#mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>
