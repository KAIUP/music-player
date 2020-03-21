<template>
  <van-search placeholder="搜索歌曲、歌手、专辑" shape="round" v-model="value" @search="isSearch"/>
</template>

<script>
import { Search } from 'vant';
import {getSearchSong} from 'network/guide'

export default {
  name: 'Search',
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    //用户输入内容确认时触发
    isSearch(value) {
        //根据用户输入的value搜索歌曲
        getSearchSong(value).then(res => {
          //保存搜索的歌单列表
          let searchList = res.data.result.songs
          //发出自定义事件，将这些值传给父组件
          this.$emit('isSearchList',searchList)
        })
      
    },
  }
}
</script>

<style>
  .van-search {
    border-bottom: 1px solid #eee;
  }
</style>