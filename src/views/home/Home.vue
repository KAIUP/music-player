<template>
  <div id="home">
    <swipe :banner="banner"/>
    <tab-control v-if="playlists.length!==0">
      <div>推荐歌单</div>
    </tab-control>
    <Recommend :playlists="playlists"/>
    <tab-control v-if="newSong.length!==0">
      <div>最新音乐</div>
    </tab-control>
    <song-list :song-list="newSong"/>
  </div>
</template>

<script>
import Swipe from 'components/common/swipe/Swipe'
import TabControl from 'components/common/tabcontrol/TabControl'
import Recommend from 'components/content/recommend/Recommend'
import SongList from 'components/content/songlist/SongList'
import {getBanner, getPlayList, getNewSong} from 'network/home'

export default {
  name: 'Home',
  components: {
    Swipe,
    TabControl,
    Recommend,
    SongList,
  },
  data() {
    return {
      banner: [],
      playlists: [],
      newSong: []
    }
  },
  created() {
    this._getBanner()
    this._getPlayList(6, 0, '全部')
    this._getNewSong()
  },
  methods: {
    _getBanner() {
      getBanner().then(res => {
        this.banner = res.data.banners
      })
    },
    _getPlayList(limit, offset, cat) {
      getPlayList(limit, offset, cat).then(res => {
        this.playlists = res.data.playlists
      })
    },
    _getNewSong() {
      getNewSong().then(res => {
        this.newSong = res.data.result
      })
    }
  }
}
</script>

<style>

</style>