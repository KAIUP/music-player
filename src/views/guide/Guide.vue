<template>
  <div id="guide">
    <search-box ref="search" @isSearchList="isSearchList"/>
    <hot-params :hot-params="hotParams" @isParamsList="isParamsList"/>
    <div class="best-fit" v-if="songList.length !== 0">最佳匹配</div>
    <song-list :song-list="songList"/>
  </div>
</template>

<script>
import SearchBox from './childComps/SearchBox'
import HotParams from './childComps/HotParams'
import SongList from 'components/content/songlist/SongList'
import {getHotParams} from 'network/guide'

export default {
  name: 'Guide',
  components: {
    SearchBox,
    HotParams,
    SongList
  },
  data() {
    return {
      hotParams: [],
      songList: []
    }
  },
  created() {
    this._getHotParams()
  },
  methods: {
    _getHotParams() {
      getHotParams().then(res => {
        this.hotParams = res.data.result.hots
      })
    },
    isParamsList(hot) {
      this.songList = hot
    },
    isSearchList(searchList) {
      this.songList = searchList
    }
  }
}
</script>

<style>
  .best-fit {
    font-size: 14px;
    color: #666;
    margin: 0 0 10px 10px;
  }
</style>