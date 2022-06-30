<template>
  <div class="building-dark"></div>
</template>

<script>
export default {

}
</script>

<style>
  .building-dark {
    background: url('assets/img/home/front-building@2x.png') repeat-x;
    background-size: contain;
    animation: slide 60s linear infinite;
  }

  @keyframes slide {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -1145px 0;
    }
  }
</style>