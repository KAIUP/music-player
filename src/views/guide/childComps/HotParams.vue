<template>
  <div class="hot-params">
    <div class="title" v-if="Object.keys(hotParams).length!==0">热门搜索</div>
    <div class="params-list">
      <div v-for="(item,index) in hotParams" :key="index" @click="hotClick(item.first)" class="params">{{item.first}}</div>
    </div>
  </div>
</template>

<script>
import { getSearchSong } from 'network/guide'

export default {
  name: 'HotParams',
  props: {
    hotParams: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    hotClick(s) {
      getSearchSong(s).then(res => {
       let hot = res.data.result.songs
        this.$emit('isParamsList',hot)
      })
    }
  }
}
</script>

<style>
  .hot-params {
    padding: 20px 10px;
  }

  .title {
    font-size: 14px;
    color: #666;
  }

  .params-list {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .params {
    padding: 6px 10px;
    border: 1px solid #eee;
    border-radius: 20px;
    margin: 0 5px 8px 0;
  }
</style>