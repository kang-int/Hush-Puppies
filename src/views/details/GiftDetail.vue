<template>
  <div>
    <p class="title">礼物详情</p>
    <div v-html="desc"></div>
  </div>
</template>

<script>
import { parseHTML } from '@/helpers/index.js'
export default {
  props: {
    product: Object
  },
  computed: {
    desc() {
      return parseHTML(this.product.desc)
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  color: #c06251;
  padding: 23px 0 23px 20px;
}
</style>
