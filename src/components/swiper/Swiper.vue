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

// import required modules
import { Pagination, Autoplay} from "swiper";

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
.swiper .swiper-pagination-bullet-active {
  background: #000;
  opacity: 1;
}

.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
}
</style>