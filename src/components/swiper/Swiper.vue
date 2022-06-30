<template>
  <swiper
  :modules="modules"
  :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }"
  effect="fade"
  :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="item in banners">
      <a :href="item.url"><img :src="item.img" alt="轮播图"></a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { request } from "network/request.js";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, EffectFade, Autoplay} from "swiper";

export default {
  data() {
    return {
      banners: []
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    request({
      url: '/home_banner.json'
    })
    .then(res => {
      const arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push(res.data[0])
      }
      // console.log(res);
      // console.log(arr);
      this.banners = arr;
    })
  },
  setup() {
    return {
      modules: [Pagination,  Autoplay],
    };
  },
};
</script>

<style>
.swiper {
  width: 345px;
  height: 120px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 12px;
}

.swiper img {
  width: 345px;
  height: 120px;
}

.swiper .swiper-pagination-bullet-active {
  background: #000;
  opacity: 1;
}

.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
}
</style>