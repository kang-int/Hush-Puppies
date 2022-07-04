<template>
  <div class="header">
    <p class="header-title">暇步士微信步数</p>
    <Canvas></Canvas>
    <white-building class="building"></white-building>
    <dark-building class="building"></dark-building>
    <road></road>
    <aside-info></aside-info>
    <div class="riding"></div>

  </div>
</template>

<script>
import Canvas from 'components/home/Canvas'
import AsideInfo from 'components/home/AsideInfo'
import WhiteBuilding from 'components/home/WhiteBuilding'
import DarkBuilding from 'components/home/DarkBuilding'
import Road from 'components/home/Road'

export default {
  data() {
    return {

    }
  },
  components: {
    Canvas,
    AsideInfo,
    WhiteBuilding,
    DarkBuilding,
    Road
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

.riding {
  width: 180px;
  height: 136px;
  position: absolute;
  left: 82px;
  bottom: 58px;
  background: url(assets/img/home/riding@2x.png) no-repeat;
  background-size: contain;
}
</style>