<template>
  <div class="container text-center">
    <img class="dog" src="~assets/img/details/dog-success@2x.png" alt="">
    <p class="title">恭喜，兑换成功</p>
    <p class="hint">商品已兑换成功，请进入我的兑换查看</p>
    <button class="popup-btn check">查看我的兑换</button>
    <button class="popup-btn">领取优惠券</button>
    <img @click="$emit('cancel')" class="cancel-icon" src="~assets/img/details/cancel-icon@2x.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
  height: 275px;
  background-color: #fff;
  border-radius: 20px;
}

.container .dog {
  display: block;
  width: 137px;
  height: 153px;
  margin: -96px 0 0 78px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 6px;
}

.hint {
  font-size: 14px;
  color: #333;
  margin-top: 13px;
}

.popup-btn {
  width: 146px;
  height: 40px;
  margin: 0 auto;
  background-color: #CB453C;
  color: #fff;
  font-weight: bold;
  border-radius: 1000px;
}

.check {
  margin: 25px 0 15px 0;
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