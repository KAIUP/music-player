<template>
  <div class="category">
    <span v-for="(item,index) in title" :key="index" class="title" :class="{active:currentIndex==index}" @click="totleList(index)">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'category',
  data() {
    return {
      title: ['全部','华语','欧美','日本','韩国'],
      currentIndex: 0
    }
  },
  methods: {
    totleList(index) {
      this.currentIndex = index
      this.$emit('totleList',index)
    }
  }
}
</script>

<style scoped>
  .category {
    height: 40px;
    position: sticky;
    right: 0;
    left: 0;
    top: 70px;
    background-color: #fff;
    z-index: 9;
  }

  .title {
    display: inline-block;
    width: 20%;
    line-height: 40px;
    text-align: center;
    background-color: rgba(178,34,34,.8);
    color: silver;
  }

  .active {
    color: #fff;
  }
</style>