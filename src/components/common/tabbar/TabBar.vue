<template>
  <div class="tab-bar">
    <router-link to="/home" class="tab-title">推荐</router-link>
    <router-link to="/found" class="tab-title">发现</router-link>
    <router-link to="/guide" class="tab-title">搜索</router-link>
    <router-link to="/profile" class="tab-title">我的</router-link>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
}
</script>

<style>
  .tab-bar {
    position: sticky;
    top: 70px;
    left: 0;
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eee;
    background: #fff;
    z-index: 9;
  }

  .tab-title{
    padding: 9px 5px;
    border-bottom: 2px solid #fff;
  }

  .router-link-active {
    color: #CD2626;
    border-color: #CD2626;
  }
</style>