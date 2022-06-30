<template>
  <div class="building-white"></div>
</template>

<script>
export default {

}
</script>

<style>
  .building-white {
    left: 50%;
    background: url('assets/img/home/rear-building@2x.png') repeat-x;
    background-size: contain;
    animation: slide 100s linear infinite;
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