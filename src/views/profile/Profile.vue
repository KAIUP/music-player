<template>
  <div id="profile">
    <login-button/>
    <service/>
    <tab-control v-if="playlists.length!==0">
      <div>热门歌单</div>
    </tab-control>
    <Recommend :playlists="playlists"/>
  </div>
</template>

<script>
import LoginButton from './childComps/LoginButton'
import Service from './childComps/Service'
import TabControl from 'components/common/tabcontrol/TabControl'
import Recommend from 'components/content/recommend/Recommend'
import {getPlayList} from 'network/home'

export default {
  name: 'Profile',
  components: {
    LoginButton,
    Service,
    TabControl,
    Recommend,
  },
  data() {
    return {
      playlists: []
    }
  },
  created() {
    this._getPlayList(6, 0, '流行')
  },
  methods: {
    _getPlayList(limit, offset, cat) {
      getPlayList(limit, offset, cat).then(res => {
        this.playlists = res.data.playlists
      })
    },
  }
}
</script>

<style>

</style>