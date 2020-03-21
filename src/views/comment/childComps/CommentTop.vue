<template>
  <div class="comment-top">
    <div class="stop-collapse">
      <div class="comment-total">
        <img src="~assets/img/comment/back.png" alt="" class="back" @click="backClick">
        <span class="title">评论(9999+)</span>
      </div>
    </div>
    <div class="current-song">
      <img :src="songInfo.picUrl" alt="" class="cover">
      <div>
        <div class="song-name">{{songInfo.name}}</div>
        <span class="song-arname">{{songInfo.arname}}</span>
      </div>
      <img src="~assets/img/comment/r-arrow.png" alt="" class="enter" @click="enterClick">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentTop',
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
    },
    enterClick() {
      this.$router.go(-1)
    }
  }
  
}
</script>

<style scoped>
  .stop-collapse {
    height: 50px;
  }

  .comment-total {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 14px 17px;
    display: flex;
    align-items: center;
    background: #fff;
    z-index: 9;
  }

  .comment-total .back{
    width: 22px;
    height: 22px;
  }

  .comment-total .title {
    padding: 0 15px;
    font-size: 17px;
  }

  .current-song {
    position: relative;
    display: flex;
    align-items: center;
    padding: 15px 15px;
    border-bottom: 6px solid #eee;
  }

  .current-song .cover {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin-right: 15px;
  }

  .current-song .song-name {
    font-size: 15px;
    margin-bottom: 5px;
  }

  .current-song .song-arname {
    font-size: 13px;
    color: royalblue;
  }

  .current-song .enter {
    position: absolute;
    right: 15px;
    top: 43px;
    width: 18px;
    height: 18px;
  }
</style>