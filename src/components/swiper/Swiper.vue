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
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay} from "swiper";

export default {
  props: {
    banners: Array
  },
  components: {
    Swiper,
    SwiperSlide,
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