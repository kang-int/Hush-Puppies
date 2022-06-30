<template>
  <div class="header">
    <p class="header-title">暇步士微信步数</p>
    <Canvas></Canvas>
    <white-building class="building"></white-building>
    <dark-building class="building"></dark-building>
    <road></road>
    <aside-info></aside-info>

  </div>
</template>

<script>
import Canvas from 'components/Canvas'
import AsideInfo from 'components/AsideInfo'
import WhiteBuilding from 'components/WhiteBuilding'
import DarkBuilding from 'components/DarkBuilding'
import Road from 'components/Road'

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

</style>