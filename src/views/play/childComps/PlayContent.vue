<template>
  <div class="play-content">
    <div class="song-cover" @click.prevent="forbidClick">
      <img v-if="Object.keys(songInfo).length!==0" :src="songInfo.picUrl" :class="{turn:isPlay}" alt="">
      <img v-else src="~assets/img/playdetail/disc-ip6.png" alt="">
    </div>
    <div class="lyric"></div>
  </div>
</template>

<script>

export default {
  name: 'Playcontent',
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
      isPlay: false,
    }
  },
  created() {
    this.isPlay = this.$store.state.isPlay
  }
}
</script>

<style>
  .play-content {
    height: 65vh;
    position: relative;
  }

  .song-cover {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .song-cover img {
    width: 210px;
    height: 210px;
    border-radius: 50%;
  }
  
  .turn {
    animation: turn 8s linear infinite;
  }

  @keyframes turn {
     0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
</style>