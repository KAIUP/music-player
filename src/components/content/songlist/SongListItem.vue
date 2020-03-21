<template>
    <div class="list-info">
      <div class="song-name">{{songList.name}}</div>
      <div class="other-info">
        <span>{{singer}}</span>
        <span>-{{album}}</span>
      </div>
      <img src="~assets/img/common/play.png" alt="" class="play-icon">
    </div>
</template>

<script>
  export default {
    name: 'SongListItem',
    props: {
      songList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      singer() {
        if (this.songList.song) {
            return this.songList.song.artists["0"].name
          } else if(this.songList.ar){
            return this.songList.ar["0"].name
          }else {
            return this.songList.artists["0"].name
          }
      },
      album() {
        if(this.songList.song) {
          return this.songList.song.album.name
        }else if(this.songList.al){
          return this.songList.al.name
        }else {
          return this.songList.album.name
        }
      }
    }
}
</script>

<style>
  .list-info {
    padding-right: 40px;
  }

  .song-name, .other-info {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .other-info {
    font-size: 13px;
    color: #999;
    margin-top: 7px;
  }

  .play-icon {
    position: absolute;
    top: 16px;
    right: 0;
    width: 30px;
    height: 30px;
  }
</style>