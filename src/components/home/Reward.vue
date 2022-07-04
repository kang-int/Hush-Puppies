<template>
  <div class="reward">
    <div class="reward-flex">
      <p class="reward-text1">组队走路 每日加成</p>
      <a href="">我的好友 &gt;</a>
    </div>
    <p class="reward-text2">今日已邀请 3 人 当前加成 +3%</p>
    <Button class="reward-btn">每邀请1人 奖励5个积分</Button>
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

<style>
.reward {
  color: #000;
  position: relative;
  width: 345px;
  height: 83px;
  margin: 0 auto;
  margin-top: -38px;
  padding: 13px 10px 0 16px;
  background-color: #fff;
  z-index: 1;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
}

.reward-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reward-text1 {
  font-size: 12px;
  font-weight: bold;
  line-height: 17px;
}

.reward a {
  line-height: 14px;
  font-size: 10px;
  color: #000;
}

.reward-text2 {
  margin-top: 6px;
  font-size: 11px;
  line-height: 15px;
}

.reward-btn {
  position: absolute;
  left: 82px;
  top: 60px;
  width: 181px;
  height: 34px;
  font-size: 13px;
  box-shadow: 0px 10px 10px rgba(196, 32, 32, 0.2);
}
</style>