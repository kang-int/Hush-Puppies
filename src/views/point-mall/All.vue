<template>
  <div class="goods-list">
    <router-link
      :to="{ name: 'details', params: { id: item.ID } }"
      class="item"
      v-for="item in goods"
      :key="item.ID"
    >
      <img :src="item.ThumbUrl" alt="" />
      <p class="goods-name">暇步士商品</p>
      <p class="goods-point">5000积分</p>
    </router-link>
  </div>
</template>

<script>
import ProductService from 'network/ProductService'

export default {
  data() {
    return {
      goods: []
    }
  },
  created() {
    ProductService.getHotGoods().then((res) => {
      this.goods = res.data
    })
  }
}
</script>

<style>
.goods-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 15px;
}
.goods-list .item {
  background-color: #fff;
  width: 165px;
  height: 245px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 14px;
}
.goods-list img {
  width: 165px;
  height: 165px;
}
.goods-name {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #333;
  padding-top: 14px;
  padding-left: 5px;
}
.goods-point {
  font-size: 12px;
  line-height: 17px;
  color: #cb453c;
  padding: 5px 0 26px 5px;
}
</style>
