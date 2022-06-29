<template>
  <swiper :modules="modules" class="mySwiper"
  
  effect="cube"
  navigation
  :pagination="{ clickable: true }"
  >
    <swiper-slide><img src="~assets/img/home/advertisement.png" alt=""></swiper-slide>
    <swiper-slide><img src="~assets/img/home/advertisement2.png" alt=""></swiper-slide>
    <swiper-slide><img src="~assets/img/home/advertisement3.png" alt=""></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, EffectCube, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, EffectCube, Autoplay],
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

.mySwiper img {
  width: 345px;
  height: 120px;
}

.swiper .swiper-pagination-bullet-active {
  background: red;
}

.swiper-pagination-bullet {
  background: black;
  opacity: 1;
}
</style>