<template>
  <div class="container text-center">
    <img class="dog" src="~assets/img/details/dog-fail@2x.png" alt="">
    <p class="title">真遗憾，兑换失败</p>
    <p class="hint">您的积分不足，看看其他商品吧~</p>
    <Button class="popup-btn">查看其他商品</Button>
    <img @click="$emit('cancel')" class="cancel-icon" src="~assets/img/details/cancel-icon@2x.png" alt="">
  </div>
</template>

<script>
import Button from 'components/Button.vue'
export default {
  components: {
    Button,
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
  height: 225px;
  background-color: #fff;
  border-radius: 20px;
}
.container .dog {
  display: block;
  width: 114px;
  height: 142px;
  margin: -82px 0 0 75px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 10px 0 13px 0;
}
.hint {
  font-size: 14px;
  color: #333;
  margin-bottom: 25px;
}
.popup-btn {
  width: 160px;
  height: 40px;
}
.cancel-icon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -75px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>