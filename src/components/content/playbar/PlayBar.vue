<template>
  <div class="audio-box" v-show="isSkip" v-if="Object.keys(songInfo).length!==0">
    <audio :src="songInfo.songUrl" preload="auto" @timeupdate="timeupdate" @canplay="canPlay" @play="isPlaying" @pause="isPaused" loop ref="audio"></audio>
    <div class="play-bar">
      <div class="play-info" @click="detailClick">
        <img :src="songInfo.picUrl" alt="" class="song-img" onerror="this.src='~assets/img/common/record.png'"/>
        <div class="current-info">
          <div class="song-name ">{{songInfo.name}}</div>
          <span class="singer-name">{{songInfo.arname}}</span>
        </div>
      </div>
      <img v-if="isShow" src="~assets/img/common/isplay.png" alt="" @click="PlayClick" class="play-icon">
      <img v-else src="~assets/img/common/pause.png" alt="" @click="PlayClick" class="play-icon">
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { formatDate } from 'common/utils'

export default {
  name: 'PlayBar',
  data() {
    return {
      isShow: true,
      isSkip: true,
    }
  },
  computed: {
    ...mapGetters(['songInfo']),
  },
  methods: {
    PlayClick() {
      if(this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.isShow = false
      }else {
        this.$refs.audio.pause()
        this.isShow = true
      }
    },
    detailClick() {
      this.$router.push({
        path: '/play'
      })
    },
    isPlaying() {
      this.$bus.$emit('currentTime',this.$refs.audio.currentTime)
      this.$store.commit('rotateStart')
    },
    isPaused() {
      this.$store.commit('rotateEnd')
    },
    formatDate(time) {
      const date = new Date(time*1000)
      return formatDate(date,'mm:ss')
    },
    canPlay() {
      let totalTime = this.formatDate(this.$refs.audio.duration)
      this.$store.commit('canPlay',totalTime)
    },
    timeupdate() {
      let curTime = this.formatDate(this.$refs.audio.currentTime)
      this.$store.commit('timeupdate',curTime)
    }
  },
  watch: {
    'songInfo.songUrl': {
      handler() {
        this.$nextTick(() => {
          if(this.$store.state.isPlay == true){
            this.$refs.audio.load()
            this.$refs.audio.play()
            // this.isShow = false
          }
        })
      },
      deep: true,
      immediate: true
    },
    '$route'(to, from) {
      if(to.path == '/play'||to.path == '/comment') {
        this.isSkip = false
      }else {
        this.isSkip = true
      }
    }
  }
}
</script>

<style scoped>
  .audio-box {
    height: 55px;
  }

  .play-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 8px 10px;
    background: #fff;
    z-index: 9;
  }

  .play-info {
    padding-right: 45px;
    display: flex;
    align-items: center;
  }

  .play-bar .song-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .play-bar .current-info {
    padding: 0 8px;
  }

  .current-info .song-name {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .current-info .singer-name {
    font-size: 12px;
    color: #999;
  }

  .play-icon {
    position: absolute;
    top: 13px;
    right: 20px;
    width: 28px;
    height: 28px;
  }
</style>