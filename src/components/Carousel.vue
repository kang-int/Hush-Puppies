<template>
  <el-carousel>
    <el-carousel-item v-for="item in banners">
      <a :href="item.url"><img :src="item.img" alt="轮播图"></a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    banners: Array,
  }
}
</script>

<style>
.el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.39);
  opacity: 1;
}

.is-active .el-carousel__button {
  background: #000;
}
</style>