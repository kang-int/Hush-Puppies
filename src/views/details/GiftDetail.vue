<template>
  <div>
    <p class="title">礼物详情</p>
    <div v-html="desc"></div>
  </div>
</template>

<script>
import {decodeEmoji, parseHTML} from '@/helper/index.js'
export default {
  props: {
    product: Object,
  },
  computed: {
    desc() {
      return parseHTML(this.product.desc).toString()
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  color: #C06251;
  padding: 23px 0 23px 20px;
}
</style>