<template>
  <div class="tab-bar-item text-center">
    <slot name="icon"></slot>
    <div class="tab-bar-item-text">
      <slot name="text" class="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .tab-bar-item {
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