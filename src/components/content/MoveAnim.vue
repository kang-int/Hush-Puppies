<template>
  <div class="mov-item" :style="animStyle"></div>
</template>

<script>

export default {
  props: {
    imgUrl: String,
    imgWidth: Number,
    animDuration: Number
  },
  mounted() {
    console.log('this.imgUrl: ',this.imgUrl);
    console.log('animStyle: ', this.animStyle)
  },
  computed: {
    doubleImgWidth() {
      return this.imgWidth * 2
    },
    animStyle() {
      return {
        width: this.doubleImgWidth + 'px',
        backgroundImage: `url(${this.imgUrl})`,
        animationDuration: this.animDuration + 's'
      }
    }
  }
}
</script>

<style>
  .mov-item {
    /* background-image: url('assets/img/home/rear-building@2x.png'); */
    background-size: contain;
    background-repeat: repeat-x;
    animation: slide linear infinite;

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