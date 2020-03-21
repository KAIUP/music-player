<template>
  <div class="play-navbar">
    <div class="back-btn" @click="backClick">
      <img src="~assets/img/playdetail/back.png" alt="">
    </div>
    <div class="song-info" v-if="Object.keys(songInfo).length!==0">
      <div class="song-name">{{songInfo.name}}</div>
      <span class="singer-name">{{songInfo.arname}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PlayNavBar',
  props: {
    songInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .play-navbar {
    height: 50px;
    display: flex;
    color: #fff;
  }
  .back-btn {
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .back-btn img{
    width: 30px;
    height: 30px;
  }

  .song-info {
    padding: 10px 0;
  }

  .song-info .singer-name {
    color: #d6d2d2;
    font-size: 13px;
  }
</style>