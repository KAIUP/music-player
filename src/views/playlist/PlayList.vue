<template>
  <div id="playlist">
    <playlist-desc :playlist="playlist"/>
    <playlist-cont :playlist="playlist"/>
  </div>
</template>

<script>
import PlaylistDesc from './childComps/PlaylistDesc'
import PlaylistCont from './childComps/PaylistCont'
import {getPlayListDetail} from 'network/playlist'

export default {
  name: 'PlayList',
  components: {
    PlaylistDesc,
    PlaylistCont
  },
  data() {
    return {
      playlist: {},
    }
  },
  created() {
    let id = this.$route.query.id
    this._getPlayListDetail(id)
    
  },
  methods: {
    _getPlayListDetail(id) {
      getPlayListDetail(id).then(res => {
        this.playlist = res.data.playlist
      })
    }
  }
}
</script>

<style>

</style>