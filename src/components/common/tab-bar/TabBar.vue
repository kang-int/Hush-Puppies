<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #tab-bar {
    display: flex;
    height: 49px;
    padding-top: 6px;
    background-color: #fff;
    box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.07);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0
  }
</style>