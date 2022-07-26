<template>
  <div class="nav-flex text-center">
    <div class="nav-bar">
      <div
        class="nav-bar-item"
        v-for="item in navBarItems"
        :id="item.id"
        :class="{active: currentTab === item.id}"
        @click="itemClick"
      >{{item.title}}</div>
    </div>

    <div class="nav-bar-item select">
      按积分
      <img src="~assets/img/point-mall/triangle@2x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'All',
      navBarItems: [
        {
          id: 'All',
          title: '全部'
        },
        {
          id: 'Bags',
          title: '包配'
        },
        {
          id: 'Housewares',
          title: '家居'
        },
        {
          id: 'Shoes',
          title: '鞋袜'
        },
        {
          id: 'Others',
          title: '其他'
        },
      ]
    }
  },
  methods: {
    itemClick(event) {
      this.currentTab = event.target.id
      // 发出toggleComp事件给父组件
      this.$emit('toggleComp', event.target.id)
    }
  }
}
</script>

<style scoped>
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

.nav-bar-item {
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