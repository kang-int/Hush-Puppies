<template>
  <div class="profile-header">
    <img src="~assets/img/profile/dog-title@2x.png" alt="">
    <div class="pos-center profile-photo">
      <slot name="photo"></slot>
    </div>
    <div class="pos-center profile-name">
      <slot name="name"></slot>
    </div>
    <div class="pos-center profile-id">
      <slot name="id"></slot>
    </div>
    <div class="pos-center profile-point">
      <slot name="point"></slot>
    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
export default {

}
</script>

<style>
.pos-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.profile-header {
  position: relative;
  height: 338px;
  background-color: #BF6050;
}

.profile-header>img {
  position: absolute;
  left: 15px;
  top: 24px;
  width: 121px;
  height: 28px;
}

.profile-photo img {
  width: 65px;
  height: 65px;
}
.profile-photo {
  top: 86px;
}
.profile-name {
  top: 155px;
  font-size: 17px;
  color: #fff;
  font-weight: bold;
}
.profile-id {
  top: 189px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  opacity: 0.4;
}
.profile-point {
  top: 228px;
  height: 50px;
  border: 2px solid rgba(255,255,255,0.35);
  border-radius: 26px;
  background: url(assets/img/profile/star-icon@2x.png) no-repeat;
  background-size: 39px 39px;
  background-position: left center;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  padding-left: 48px;
}
</style>