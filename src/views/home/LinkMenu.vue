<template>
  <div class="link-menu">
    <ul>
      <li><a href=""><img src="~assets/img/home/point-store@2x.png" alt=""></a></li>
      <li><a href=""><img src="~assets/img/home/offline-store@2x.png" alt=""></a></li>
      <li><a href=""><img src="~assets/img/home/flagship-store@2x.png" alt=""></a></li>
      <li><a href=""><img src="~assets/img/home/check-in@2x.png" alt=""></a></li>
    </ul>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
.link-menu {
    width: 345px;
    height: 95px;
    margin: 0 auto;
    margin-top: 32px;
    padding: 15px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
}

.link-menu ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
}

.link-menu img {
    width: 64px;
    height: 64px;
}
</style>