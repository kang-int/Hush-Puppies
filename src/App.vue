<template>
  <tab-bar>
    <tab-bar-item>
      <template v-slot:icon>
        <img src="~assets/img/tab-bar/home-icon@2x.png" alt="">
      </template>
      <template v-slot:text>
        <div slot="text">首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:icon>
        <img src="~assets/img/tab-bar/point-mall-icon@2x.png" alt="">
      </template>
      <template v-slot:text>
        <div slot="text">积分商城</div>
      </template>
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:icon>
        <img src="~assets/img/tab-bar/profile-icon@2x.png" alt="">
      </template>
      <template v-slot:text>
        <div slot="text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tab-bar/TabBar'
import TabBarItem from 'components/common/tab-bar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import url(assets/css/base.css);
</style>