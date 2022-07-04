<template>
  <div class="tab-bar-item text-center" @click="itemClick">
    <slot v-if="isActive" name="icon-active"></slot>
    <slot v-else name="icon"></slot>
    <div class="tab-bar-item-text" :style="activeStyle">
      <slot name="text" class="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    // 父组件要传activeColor值
    activeColor: {
      type: String,
      default: '#A52C2B'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item {
    cursor: pointer;
    flex: 1;
    font-size: 9px
  }
  .tab-bar-item img {
    width: 22px;
    height: 22px;
  }
  .tab-bar-item-text {
    padding-top: 4px
  }
</style>