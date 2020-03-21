<template>
  <div id="play">
    <play-nav-bar :song-info ="songInfo"/>
    <play-content :song-info ="songInfo"/>
    <control-panel :song-info ="songInfo"/>
    <!-- <lyric :song-info ="songInfo"/> -->
  </div>
</template>

<script>
import PlayNavBar from './childComps/PlayNavBar'
import PlayContent from './childComps/PlayContent'
import ControlPanel from './childComps/ControlPanel'
// import lyric from './childComps/lyric'

export default {
  name: 'Play',
  components: {
    PlayNavBar,
    PlayContent,
    ControlPanel,
    // lyric
  },
  data() {
    return {
      songInfo:{},
    }
  },
  created() {
    this.songInfo = this.$store.state.songInfo
  }
}
</script>

<style scoped>
  #play {
    position: fixed;
    left: 0;
    right: 0;
    height: 100vh;
    background: url('~assets/img/playdetail/bg.jpg');
  }
</style>