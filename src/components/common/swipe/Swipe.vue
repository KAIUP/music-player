<template>
  <van-swipe class="my-swipe" :autoplay="3000">
  <van-swipe-item v-for="(item,index) in banner" :key="index">
    <img :src="item.imageUrl" class="swipe-img"/>
  </van-swipe-item>
</van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  name: 'Swipe',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .swipe-img {
    width: 100%;
    height: 200px;
  }
</style>