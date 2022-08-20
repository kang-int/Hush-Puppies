<template>
  <div class="profile-header">
    <img src="~assets/img/profile/dog-title@2x.png" alt="" />
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
      <img src="~assets/img/profile/star-icon@2x.png" alt="" class="star-img" />
      <div class="point"><slot name="point"></slot></div>
      <img
        src="~assets/img/profile/arrow-icon@2x.png"
        alt=""
        class="star-arrow"
      />
    </div>
  </div>
</template>

<script>
export default {}
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
  background-color: #bf6050;
}

.profile-header > img {
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

.star-img {
  width: 39px;
  height: 39px;
}

.profile-point {
  top: 228px;
  display: flex;
  align-items: center;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-radius: 26px;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
}

.profile-point .point {
  margin: 0 18px 0 9px;
}

.star-arrow {
  width: 6px;
  height: 9px;
  margin-right: 11px;
}
</style>
