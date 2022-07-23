<template>
  <router-link :to="{ name: routeName }" class="tab-bar-item text-center">
    <slot v-if="isActive" name="icon-active"></slot>
    <slot v-else name="icon"></slot>
    <div class="tab-bar-item-text" :style="activeStyle">
      <slot name="text" class="tab-bar-text"></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    routeName: String,
    // 父组件要传activeColor值
    activeColor: {
      type: String,
      default: '#A52C2B'
    }
  },
  computed: {
    isActive() {
      return this.$route.name.indexOf(this.routeName) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  cursor: pointer;
  flex: 1;
  font-size: 9px
}

.tab-bar-item :deep(img) {
  width: 22px;
  height: 22px;
}

.tab-bar-item-text {
  padding-top: 4px;
  color: #000;
}
</style>