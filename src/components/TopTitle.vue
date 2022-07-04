<template>
  <div class="title">
    <div class="title-text text-center"><slot></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .title {
    width: 375px;
    height: 64px;
    padding-top: 29px;
    background-color: #C06251;
  }
  .title-text {
    font-size: 17px;
    color: #fff;
  }
</style>