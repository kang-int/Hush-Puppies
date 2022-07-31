<template>
  <div class="aside">
    <div class="point-rule-flex">
      <div class="point">
        <p>{{ totalPoint }}</p>
      </div>
      <div class="rule">
        <a href="">规则</a>
      </div>
    </div>
    <div class="bubble">
      <a href="" class="bubble-link1"
        ><img
          src="~assets/img/home/challenge-bubble2x.png"
          alt="早期挑战 2积分"
      /></a>
      <a href="" class="bubble-link2"
        ><img src="~assets/img/home/give-bubble@2x.png" alt="赠送气泡 2积分"
      /></a>
      <a href="" class="bubble-link3"
        ><img src="~assets/img/home/step-bubble@2x.png" alt="步数奖励 2积分"
      /></a>
    </div>
    <div class="side-link">
      <a href="" class="ranking"
        ><img src="~assets/img/home/ranking@2x.png" alt="排行榜"
      /></a>
      <a href="" class="shopping"
        ><img src="~assets/img/home/shopping@2x.png" alt="花积分"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalPoint() {
      let num = this.$store.state.totalPoint
      let pointStr = num
        .toString()
        .replace(/\d{1,3}(?=(\d{3})+$)/g, (match) => {
          return match + ','
        })
      return pointStr
    }
  }
}
</script>

<style>
.point-rule-flex {
  position: absolute;
  top: 68px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.aside .point {
  margin-left: 10px;
  background: url(assets/img/home/star@2x.png) no-repeat
    rgba(255, 255, 255, 0.75);
  background-size: 30px 30px;
  height: 29px;
  border-radius: 24px;
}

.aside .point p {
  font-size: 12px;
  font-weight: bold;
  color: #535353;
  margin-left: 34px;
  line-height: 29px;
  padding-right: 21px; /* 设置为21px是为了使.point元素的宽度为95px */
}

.aside .rule {
  width: 42px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.71);
  border-radius: 1000px 0 0 1000px;
}

.rule a {
  display: block;
  width: 24px;
  line-height: 24px;
  margin-left: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #6a6a6a;
}

.bubble img {
  width: 48px;
  height: 48px;
}

.bubble-link1 img {
  position: absolute;
  top: 168px;
  left: 23px;
}

.bubble-link2 {
  position: absolute;
  top: 236px;
  left: 47px;
}

.bubble-link3 {
  position: absolute;
  top: 236px;
  right: 58px;
}

.side-link img {
  width: 40px;
  height: 47px;
}

.side-link .ranking {
  position: absolute;
  top: 124px;
  right: 14px;
}

.side-link .shopping {
  position: absolute;
  top: 184px;
  right: 14px;
}
</style>
