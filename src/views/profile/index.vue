<template>
  <profile-header>
    <template v-slot:photo>
      <img src="~assets/img/profile/profile-photo@2x.png" alt="">
    </template>
    <template v-slot:name>
      神经蛙
    </template>
    <template v-slot:id>
      ID:12312312312
    </template>
    <template v-slot:point>
      <p>2,3123</p>
    </template>
  </profile-header>
  <main-tab-bar></main-tab-bar>
</template>

<script>
import MainTabBar from '@/components/home/MainTabBar.vue'
import ProfileHeader from './ProfileHeader'
export default {
  components: {
    ProfileHeader,
    MainTabBar
  }
}
</script>

<style>

</style>