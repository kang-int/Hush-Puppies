<template>
  <div class="tab-bar">
    <router-link :to="{ name: 'home-page' }">
      <div class="tab-bar-item">
        <img src="~assets/img/details/home-icon@2x.png" alt="" />
        <p>首页</p>
      </div>
    </router-link>
    <div class="tab-bar-item">
      <img src="~assets/img/details/share-icon@2x.png" alt="" />
      <p>分享</p>
    </div>
    <button class="detail-button" @click="$emit('exchange')">立即兑换</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tab-bar {
  display: flex;
  height: 58px;
  width: 375px;
  margin: 0 auto;
  padding-top: 8px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.07);
  padding-left: 11px;
  padding-right: 15px;
}

.tab-bar-item {
  padding: 0 11px;
}

.tab-bar-item img {
  width: 25px;
  height: 25px;
  vertical-align: bottom;
}

.tab-bar-item p {
  font-size: 10px;
  color: #cb453c;
  margin-top: 3px;
}

.detail-button {
  width: 159px;
  height: 40px;
  margin-left: auto;
  background-color: #cb453c;
  color: #fff;
  font-weight: bold;
  border-radius: 1000px;
}
</style>
