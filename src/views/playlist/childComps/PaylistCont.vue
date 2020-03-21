<template>
  <div class="playlist-cont">
    <div class="title" v-if="Object.keys(playlist).length!==0">歌曲列表</div>
    <song-list :song-list="playlist.tracks"/>
  </div>
</template>

<script>
import SongList from 'components/content/songlist/SongList'

export default {
  name: 'PlaylistCont',
  components: {
    SongList
  },
  props: {
    playlist: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      curtIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.curtIndex = index
    }
  }
}
</script>

<style>
  .title {
    font-size: 13px;
    padding: 3px 15px;
    color: #666;
    background: #eeeff0;
  }

</style>