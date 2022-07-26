<template>
  <div class="header">
    <p class="header-title">暇步士微信步数</p>
    <Canvas></Canvas>
    <div class="building pale-building"></div>
    <div class="building dark-building"></div>
    <div class="road"></div>
    <aside-info></aside-info>
    <div class="riding"></div>
  </div>
</template>

<script>
import Canvas from 'components/home/Canvas'
import AsideInfo from 'components/home/AsideInfo'

export default {
  data() {
    return {

    }
  },
  components: {
    Canvas,
    AsideInfo,
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

@keyframes slide {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -1145px 0;
  }
}

.pale-building {
  left: 50%;
  background: url('assets/img/home/rear-building@2x.png') repeat-x;
  background-size: contain;
  animation: slide 100s linear infinite;
}

.dark-building {
  background: url('assets/img/home/front-building@2x.png') repeat-x;
  background-size: contain;
  animation: slide 60s linear infinite;
}

@keyframes road-slide {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -1145px 0;
  }
}

.road {
  width: 1746px;
  height: 144px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: url('assets/img/home/road@2x.png');
  background-size: contain;
  animation: road-slide 60s linear infinite;
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