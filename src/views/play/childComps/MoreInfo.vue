<template>
  <div class="more-info">
    <div class="introd">
      <div class="song-name">{{songInfo.name}}</div>
      <span class="vip">开通VIP享千万曲库下载</span>
    </div>
    <div class="info-decs">
      <img src="~assets/img/playdetail/singer.png" alt="">
      <span>歌手：{{songInfo.arname}}</span>
    </div>
    <div class="info-decs">
      <img src="~assets/img/playdetail/alb.png" alt="">
      <span>专辑：{{songInfo.name}}</span>
    </div>
    <div class="info-decs">
      <img src="~assets/img/playdetail/add.png" alt="">
      <span>收藏到歌单</span>
    </div>
    <div class="info-decs">
      <img src="~assets/img/playdetail/MV.png" alt="">
      <span>MV</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MoreInfo',
  props: {
    songInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .more-info img{
    width: 25px;
    height: 25px;
  }

  .introd {
    margin-bottom: 20px;
  }

  .vip {
    color: #999;
    font-size: 12px;
  }

  .info-decs {
    font-size: 14px;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }

  .info-decs span {
    width: 100%;
    margin: 5px 0 0 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
  }
</style>