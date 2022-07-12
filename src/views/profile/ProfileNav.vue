<template>
  <div class="container text-center">
    <p class="title">我 的 福 利</p>
    <div class="nav-bar">
      <nav-item>
        <template v-slot:img><img src="~assets/img/profile/my-point@2x.png" alt=""></template>
        <template v-slot:text><p>我的积分</p></template>
      </nav-item>
      <nav-item>
        <template v-slot:img><img src="~assets/img/profile/my-exchange@2x.png" alt=""></template>
        <template v-slot:text><p>我的兑换</p></template>
      </nav-item>
      <nav-item>
        <template v-slot:img><img src="~assets/img/profile/sign-in@2x.png" alt=""></template>
        <template v-slot:text><p>每日签到</p></template>
      </nav-item>
    </div>
    <p class="title membership">会 员 服 务</p>
    <div class="nav-bar">
      <nav-item>
        <template v-slot:img><img src="~assets/img/profile/local@2x.png" alt=""></template>
        <template v-slot:text><p>附近门店</p></template>
      </nav-item>
      <nav-item>
        <template v-slot:img><img src="~assets/img/profile/treaty@2x.png" alt=""></template>
        <template v-slot:text><p>隐私&条款</p></template>
      </nav-item>
      <nav-item>
        <template v-slot:img><img src="~assets/img/profile/service@2x.png" alt=""></template>
        <template v-slot:text><p>规则与客服</p></template>
      </nav-item>
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
  components: {
    NavItem,
  }
}
</script>

<style scoped>
.container {
  width: 345px;
  height: 370px;
  background-color: #fff;
  border-radius: 15px;
  margin: 0 auto;
}
.title {
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding: 27px 0;
}
.membership {
  padding: 34px 0 15px 0;
}
.nav-bar {
  display: flex;
  width: 287px;
  height: 85px;
  justify-content: space-between;
  margin: 0 auto;
}
.nav-bar img{
  width: 36px;
  height: 34px;
  margin: 19px 0 8px 0;
  vertical-align: bottom;
}
.nav-bar p {
  font-size: 11px;
  font-weight: bold;
  color: #DC6159;
}
</style>