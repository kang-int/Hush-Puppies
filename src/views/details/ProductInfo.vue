<template>
  <div>
    <p class="name">{{ product.name }}</p>
    <div class="info">
      <img src="~assets/img/details/star@2x.png" alt="">
      <p class="point">1599</p>
      <del class="price">￥{{ product.price }}</del>
      <p class="rest-count">剩余&nbsp;{{ product.rescount }}&nbsp;个</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }

}
</script>

<style scoped>
.name {
  width: 345px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 7px;

}

.info {
  display: flex;
  align-items: flex-end;
  width: 345px;
  margin: 0 auto;
}

.info img {
  width: 33px;
  height: 33px;
}

.point {
  font-size: 28px;
  font-weight: bold;
  color: #354052;
  margin-left: 10px;
}

del {
  color: #ACB0B7;
  font-size: 12px;
  margin-left: 10px;
}

.rest-count {
  font-size: 12px;
  color: #999;
  margin-left: auto;
}
</style>