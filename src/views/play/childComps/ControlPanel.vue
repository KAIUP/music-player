<template>
  <div class="control-panel">
    <div class="fun-zone">
      <div class="show-like" @click="showLike">
        <img v-if="isLike" src="~assets/img/playdetail/like.png" alt="">
        <img v-else src="~assets/img/playdetail/dislike.png" alt="">
      </div>
      <img src="~assets/img/playdetail/download.png" alt="" @click="downLoad">
      <img src="~assets/img/playdetail/mes.png" alt="" @click="showComment">
      <img src="~assets/img/playdetail/more.png" alt="" @click="showPopup">
    </div>
    <div class="progress-bar">
      <div class="current-time time">{{$store.state.currentTime}}</div>
      <div class="progress" ref="progress">
        <span class="slider" ref="slider"></span>
      </div>
      <div class="total-time time">{{$store.state.totalTime}}</div>
    </div>
    <div class="control">
      <img src="~assets/img/playdetail/next.png" alt="">
      <img v-if="isPlay" src="~assets/img/playdetail/pause.png" alt="" @click="toggleClick">
      <img v-else src="~assets/img/playdetail/play.png" alt="" @click="toggleClick">
      <img src="~assets/img/playdetail/next.png" alt="" class="reversal">
    </div>
    <van-popup v-model="show" position="bottom" round :style="{ height: '36%',padding:'15px 25px' }">
      <more-info :song-info="songInfo"/>
    </van-popup>
  </div>
</template>

<script>
import MoreInfo from './MoreInfo'
import { Popup } from 'vant'
import { getComment } from 'network/common'

export default {
  name: 'ControlPanel',
  components: {
    [Popup.name]: Popup,
    MoreInfo
  },
  props: {
    songInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      show: false,
      isLike: false,
      isPlay: false,
    }
  },
  created() {
    this.isPlay = this.$store.state.isPlay
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    downLoad() {
      this.$toast('该歌曲暂不支持下载');
    },
    showLike() {
      this.isLike = !this.isLike
    },
    showComment() {
      this.$router.push({
        path: '/comment'
      })
    },
    toggleClick() {
      this.isPlay = !this.isPlay
    }
  }
}
</script>

<style>
  .control-panel {
    position: relative;
  }
  .fun-zone,.control,.progress-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .fun-zone .show-like{
    font-size: 0;
  }

  .fun-zone img {
    width: 25px;
    height: 25px;
  }

  .progress-bar {
    margin: 30px 10px;
  }

  .progress-bar .progress {
    position: relative;
    width: 260px;
    height: 2px;
    background-color: #aaa;
    margin: 0 3px;
    border-radius: 2px;
  }

  .progress-bar>.progress>.slider {
    position: absolute;
    top: -2px;
    left: 0;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    transform: translate3d(0,0,0);
  }

  .progress-bar .time {
    color: #aaa;
    font-size: 12px;
  }

  .control {
    padding: 0 60px;
  }

  .control img{
    width: 35px;
    height: 35px;
  }

  .reversal {
    transform: rotate(180deg);
  }
</style>