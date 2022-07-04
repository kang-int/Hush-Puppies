<template>
  <div class="road"></div>
</template>

<script>
export default {

}
</script>

<style>
  .road {
    width: 1746px;
    height: 144px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url('assets/img/home/road@2x.png');
    background-size: contain;
    animation: slide 60s linear infinite;
  }
  @keyframes slide {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -873px 0;
    }
  }
</style>