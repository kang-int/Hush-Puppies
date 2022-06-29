<template>
  <div class="header">
    <p class="header-title">暇步士微信步数</p>
    <Canvas></Canvas>
    <aside-info></aside-info>
    <move-anim class="building-white building"
    :imgUrl="imgUrl" :imgWidth="imgWidth" :animDuration="animDuration"></move-anim>

  </div>
</template>

<script>
import Canvas from 'components/content/Canvas'
import AsideInfo from 'components/content/AsideInfo'
import MoveAnim from 'components/content/MoveAnim'

export default {
  data() {
    return {
      imgUrl: 'assets/img/home/rear-building@2x.png',
      imgWidth: 1145,
      animDuration: 100
    }
  },
  components: {
    Canvas,
    AsideInfo,
    MoveAnim
  }
}
</script>

<style>
  .header {
    position: relative;
    height: 478px;
    padding-top: 77px;
    background: url(assets/img/home/header-bg@2x.png) no-repeat;
    background-size: contain;
    overflow: hidden;
  }
  .header-title {
    position: absolute;
    left: 15px;
    top: 29px;
    width: 105px;
    line-height: 21px;
    font-size: 15px;
    font-weight: bold;
    color: #000;
  }
  .building {
    width: 2290px;
    height: 200px;
    position: absolute;
    bottom: 125px;
    left: 0;
  }
  .building-white {
    left: -50%
  }
</style>