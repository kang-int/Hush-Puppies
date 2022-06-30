<template>
  <div class="main">
    <Reward></Reward>
    <link-menu></link-menu>
    <Swiper></Swiper>
  </div>
</template>

<script>
import Reward from 'components/Reward'
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
</style>