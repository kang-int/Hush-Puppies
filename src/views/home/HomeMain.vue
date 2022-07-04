<template>
  <div class="main">
    <Reward></Reward>
    <link-menu></link-menu>
    <swiper></swiper>
  </div>
</template>

<script>
import Reward from 'components/home/Reward'
import LinkMenu from './LinkMenu'
import Swiper from 'components/swiper/Swiper'
export default {
  components: {
    Reward,
    LinkMenu,
    Swiper
  }
}
</script>

<style>
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

.swiper img {
  width: 345px;
  height: 120px;
}
</style>