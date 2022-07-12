<template>
  <div class="nav-item">
    <slot name="img"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-item {
  width: 85px;
  height: 85px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.16);
  border-radius: 10px;
}
</style>