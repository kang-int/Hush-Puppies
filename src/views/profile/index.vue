<template>
  <div class="container">
    <profile-header>
      <template v-slot:photo>
        <img src="~assets/img/profile/profile-photo@2x.png" alt="" />
      </template>
      <template v-slot:name> 神经蛙 </template>
      <template v-slot:id> ID:12312312312 </template>
      <template v-slot:point>
        <p>{{ totalPoint }}</p>
      </template>
    </profile-header>
    <profile-nav class="nav"></profile-nav>
  </div>
  <main-tab-bar></main-tab-bar>
</template>

<script>
import MainTabBar from 'components/home/MainTabBar.vue'
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav.vue'
export default {
  components: {
    ProfileHeader,
    MainTabBar,
    ProfileNav
  },
  computed: {
    totalPoint() {
      let num = this.$store.state.totalPoint
      return num.toLocaleString()
    }
  }
}
</script>

<style scoped>
.container {
  padding-bottom: 120px;
}
.nav {
  position: relative;
  top: -29px;
}
</style>
