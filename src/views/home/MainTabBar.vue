<template>
  <tab-bar>
    <tab-bar-item routeName="home-page">
      <template #icon>
        <img src="~assets/img/tab-bar/home-icon@2x.png" alt="">
      </template>
      <template #icon-active>
        <img src="~assets/img/tab-bar/home-icon-active@2x.png" alt="">
      </template>
      <template #text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item routeName="point-mall">
      <template #icon>
        <img src="~assets/img/tab-bar/point-mall-icon@2x.png" alt="">
      </template>
      <template #icon-active>
        <img src="~assets/img/tab-bar/point-mall-icon-active@2x.png" alt="">
      </template>
      <template #text>
        <div>积分商城</div>
      </template>
    </tab-bar-item>
    <tab-bar-item routeName="profile">
      <template v-slot:icon>
        <img src="~assets/img/tab-bar/profile-icon@2x.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/tab-bar/profile-icon-active@2x.png" alt="">
      </template>
      <template v-slot:text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/tab-bar/TabBar'
import TabBarItem from 'components/tab-bar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>