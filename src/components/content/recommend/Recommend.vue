<template>
  <div class="recommend">
    <div class="recomd-playlist" v-for="(item,index) in playlists" :key="index" @click="showPlaylist(item)">
      <img :src="item.coverImgUrl" alt="">
      <div class="playlist-desc">{{item.name}}</div>
      <div class="play-count">
        <img src="~assets/img/home/hd-icon.png" alt="">
        <span class="count">{{item.playCount | playCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Recommend',
  props: {
    playlists: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    playCount(count) {
      if(count >= 10000 && count < 100000000) {
        return (count/10000).toFixed(1) + '万'
      }else if(count >= 100000000) {
        return (count/100000000).toFixed(1) + '亿'
      }else {
        return count
      }
    }
  },
  methods: {
    showPlaylist(item) {
      this.$router.push({
        path: '/playlist',
        query: {
          id: item.id
        }
      })
    }
  }
  
}
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .recomd-playlist {
    width: 33%;
    position: relative;
    padding-bottom: 28px;
    margin-bottom: 15px;
  }
  
  .recomd-playlist img {
    width: 100%;
    height: 115px;
  }

  .playlist-desc {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 28px;
    font-size: 13px;
    padding: 0 5px;
    overflow: hidden;
  }

  .play-count {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .play-count img {
    width: 18px;
    height: 18px;
    margin-top: -2px;
  }
</style>