<template>
  <p class="goods-title">热门兑换</p>
  <div class="goods-list">
    <div class="item" v-for="item in goods">
      <a :href="'https://hps-data.blankpage.site/wxapp/hush-uat/product_'+item.ID+'.json'">
        <img :src="item.ThumbUrl" alt="">
        <p class="goods-name">暇步士商品</p>
        <p class="goods-point">4000积分</p>
      </a>
    </div>
  </div>
</template>

<script>
import { request } from 'network/request.js'
export default {
  data() {
    return {
      goods: [],
    }
  },
  created() {
    request({
      url: '/home_hotGoods.json'
    })
    .then(res => {
      this.goods = res.data;
    })
  }
}
</script>

<style>
  .goods-title {
    font-size: 16px;
    font-weight: bold;
    line-height: 23px;
    color: #616161;
    margin: 20px 0 0 15px;
    letter-spacing: 2px;
  }
  .goods-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
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
    color: #CB453C;
    padding: 5px 0 26px 5px;
  }
</style>