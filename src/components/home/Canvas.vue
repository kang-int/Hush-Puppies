<template>
  <div class="canvas-container">
    <canvas id="canvas"></canvas>
    <div class="canvas text-center">
      <p class="canvas-text1">今日步数</p>
      <strong>19877</strong>
      <p class="canvas-text2">满1000可兑换</p>
      <Button class="canvas-btn">点击兑换</Button>
      <p class="canvas-text3">每天24点清零</p>
    </div>
  </div>
</template>

<script>
import Button from 'components/Button'
export default {
  components: {
    Button
  },
  mounted() {
    let canvas = document.querySelector('#canvas')
    let c = canvas.getContext('2d')
    // 为了使画的图不模糊
    let dpr = window.devicePixelRatio
    canvas.width = 176 * dpr
    canvas.height = 176 * dpr
    c.scale(dpr, dpr)
    // 画灰色的线
    c.beginPath()
    c.lineWidth = 8
    c.strokeStyle = 'rgba(168, 168, 168, 0.46)'
    c.setLineDash([1, 5])
    c.arc(88, 88, 84, 0, 2 * Math.PI)
    c.stroke()
    c.closePath()
    // 画红色的线
    c.beginPath()
    c.lineWidth = 8
    c.strokeStyle = '#D42B2A'
    c.setLineDash([2, 4])
    c.lineDashOffset = 0
    c.arc(88, 88, 84, 0.5 * Math.PI, 1.75 * Math.PI)
    c.stroke()
    c.closePath()
  }
}
</script>

<style scoped>
.canvas-container {
  position: relative;
  width: 196px;
  height: 196px;
  margin: 0 auto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  z-index: 1;
}

#canvas {
  width: 176px;
  height: 176px;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: -1;
}

.canvas {
  width: 176px;
  height: 176px;
  color: #707070;
  border-radius: 50%;
  padding-top: 22px;
}

.canvas-text1 {
  line-height: 14px;
  font-size: 10px;
  font-weight: bold;
}

.canvas-text2 {
  line-height: 11px;
  color: #707070;
  font-size: 8px;
  margin-top: -4px;
}

.canvas-text3 {
  line-height: 11px;
  font-size: 8px;
  color: #999;
}

.canvas strong {
  line-height: 56px;
  font-size: 40px;
  color: #000;
  margin-top: 5px;
}

.canvas-btn {
  font-size: 11px;
  width: 93px;
  height: 29px;
  margin: 5px 0;
}
</style>