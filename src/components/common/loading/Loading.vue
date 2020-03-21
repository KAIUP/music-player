<template>
  <div class="loading-box" v-show="this.$store.state.loading">
      <van-loading color="#D43C33">努力加载中...</van-loading>
    </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
  .loading-box {
    text-align: center;
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 99;
  }
</style>