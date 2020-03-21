<template>
  <div class="nav-bar">
    <img src="~assets/img/home/logo.png" alt="" class="logo">
    <div class="logo-text">悦听音乐</div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 70px;
    background:#d43c33;
    padding: 0 10px;
    z-index: 9;
  }

  .nav-bar .logo {
    width: 32px;
    height: 32px;
  }

  .nav-bar .logo-text {
    color: #fff;
    font-size: 20px;
    padding-left: 8px;
  }
</style>