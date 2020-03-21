<template>
  <div class="song-list">
    <div v-for="(item,index) in songList" :key="index" @click="playMusic(item,index)" class="song-list-item">
      <song-list-item :song-list="item"/>
    </div>
  </div>
</template>

<script>
import SongListItem from './SongListItem'
import {getDataMixin} from 'common/mixin'

export default {
  name: 'SongList',
  components: {
    SongListItem
  },
  props: {
    songList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mixins: [getDataMixin]
}
</script>

<style scoped>
  .song-list-item {
    position: relative;
    margin: 0 10px;
    padding: 10px 0;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
  }

  .song-list-item:hover {
    background: rgba(204, 201, 201, 0.3);
  }
</style>