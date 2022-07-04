<template>
  <div class="canvas-container">
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

  .canvas {
    width: 178px;
    height: 178px;
    color: #707070;
    border: 8px dashed #CB453C;
    border-radius: 50%;
    padding-top: 18px;
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