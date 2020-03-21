<template>
  <div class="playlist-desc">
    <div class="playlist-top">
      <img src="~assets/img/playlist/back.png" alt="" @click="backClick">
      <span>歌单</span>
    </div>
    <div class="playlist-info" v-if="Object.keys(playlist).length!==0">
      <div>
        <img :src="playlist.coverImgUrl" alt="" class="cover">
      </div>
      <div class="info-right">
        <h4>{{playlist.name}}</h4>
        <div class="creator">
          <img :src="playlist.creator.avatarUrl" alt="" class="avatar"/>
          <span class="name">{{playlist.creator.nickname}}</span>
        </div>
        <div class="tags">
          <span v-for="(item,index) in playlist.tags" :key="index" class="tag">{{item}}</span>
        </div>
        <p class="desc">{{playlist.description}}</p>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'playlistDesc',
  props: {
    playlist: {
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
  .playlist-top {
    height: 45px;
    background-color: #D43C33;
    padding: 0 15px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  .playlist-top img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  
  .playlist-info {
    display: flex;
    padding: 15px 15px;
    overflow: hidden;
  }

  .playlist-info .cover {
    width: 130px;
    height: 130px;
    border-radius: 5px;
  }

  .playlist-info .info-right {
    margin-left: 15px;
    padding: 2px 0;
  }

  .info-right h4,.info-right .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .info-right .creator {
    display: flex;
    align-items: center;
    margin: 8px 0;
  }

  .info-right .tags {
    font-size: 13px;
    margin-bottom: 6px;
  }

  .info-right .desc {
    font-size: 12px;
    color: #888;
  }

  .creator .avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .creator .name {
    font-size: 13px;
  }

  .tag {
     color: #888;
    font-size: 12px;
    padding: 1px 5px;
    margin-right: 5px;
    border-radius: 10px;
    border: 1px solid #eee;
  }
</style>