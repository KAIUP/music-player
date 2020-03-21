<template>
  <div id="found">
    <div class="foundtop">
      <div class="toppic"></div>
    </div>
    <category @totleList="totleList"/>
    <song-list :song-list="songlist"/>
  </div>
</template>

<script>
import Category from './childComps/Category'
import SongList from 'components/content/songlist/SongList'
import {getFoundSong} from 'network/found'

export default {
  name: 'Found',
  components: {
    Category,
    SongList
  },
  data() {
    return {
      songlist: [],
      type: '0'
    }
  },
  created() {
    this._getFoundSong(this.type)
  },
  methods: {
    _getFoundSong(type) {
      getFoundSong(type).then(res => {
        this.songlist = res.data.data
      })
    },
    totleList(index) {
      switch(index) {
        case 0:
          this.type = '0'
          break
        case 1:
          this.type = '7'
          break
        case 2:
          this.type = '96'
          break
        case 3:
          this.type = '8'
          break
        case 4:
          this.type = '16'
          break
      }
    }
  },
  watch: {
    type() {
      this._getFoundSong(this.type)
    }
  }
}
</script>

<style>
  .foundtop {
  background-color: rgba(178,34,34,.8);
  }
  .toppic {
   height: 145px;
   font-size: 0;
   padding-left: 25px;
    background:url('~assets/img/found/index_icon.png') no-repeat;
    background-size: 166px 97px;
    background-position: -10px 15px;
  }
</style>