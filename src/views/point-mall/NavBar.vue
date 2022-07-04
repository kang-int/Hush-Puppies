<template>
  <div class="nav-flex text-center">
    <div class="nav-bar" @click="itemClick">
      <div class="nav-bar-item item active" id="All">全部</div>
      <div class="nav-bar-item item" id="Bags">包配</div>
      <div class="nav-bar-item item" id="Housewares">家居</div>
      <div class="nav-bar-item item" id="Shoes">鞋袜</div>
      <div class="nav-bar-item item" id="Others">其他</div>
    </div>
    <div class="item select">按积分
      <img src="~assets/img/point-mall/triangle@2x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  methods: {
    itemClick(event) {
      // 动态样式
      let items = document.querySelectorAll('.nav-bar-item')
      let len = items.length
      for (let i = 0; i < len; i++) {
        items[i].classList.remove('active')
      }
      event.target.classList.add('active')
      // 发出toggleComp事件给父组件
      this.$emit('toggleComp', event.target.id)
    }
  }
}
</script>

<style>
.nav-flex {
  display: flex;
  cursor: pointer;
}
.nav-bar {
  width: 255px;
  height: 35px;
  display: flex;
  justify-content: space-between;
}
.item {
  width: 45px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  line-height: 35px;
  font-size: 12px;
  font-weight: bold;
  color: #333;
}
.select {
  width: 75px;
  margin-left: 15px;
}
.select img {
  width: 11px;
  height: 9px;
}
.active {
  background-color: #CB453C;
  color: #fff;
}
</style>