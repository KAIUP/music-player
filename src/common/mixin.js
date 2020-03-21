import { getSongUrl } from 'network/common'
import { getComment } from 'network/common'

export const getDataMixin = {
  data() {
    return {
      songUrl: '',
      arname: '',
      albname: '',
      picUrl: ''
    }
  },
  methods: {
    playMusic(item) {
      let id = item.id
        //获取对应歌曲播放地址
      getSongUrl(id).then(res => {
        if (res.data.data[0].url == null) {
          this.$toast('该歌曲为收费歌曲，暂不支持播放')
        } else {
          this.songUrl = res.data.data[0].url
        }

        //获取歌曲评论
        getComment(0, id).then(res => {
          let comment = res.data.hotComments

          //过滤数据
          if (item.song) {
            this.arname = item.song.artists["0"].name
            this.albname = item.song.album.name
          } else if (item.ar) {
            this.arname = item.ar["0"].name
            this.albname = item.al.name
          } else {
            this.arname = item.artists["0"].name
            this.albname = item.album.name
          }
          if (item.album) {
            this.picUrl = item.album.picUrl
          } else if (item.al) {
            this.picUrl = item.al.picUrl
          } else {
            this.picUrl = item.picUrl
          }

          //定义变量保存数据
          let songInfo = {}
          songInfo.songUrl = this.songUrl
          songInfo.name = item.name
          songInfo.arname = this.arname
          songInfo.albname = this.albname
          songInfo.picUrl = this.picUrl
          songInfo.comment = comment

          //使用vuex保存数据
          this.$store.commit('playMusic', songInfo)
        })
      })

    }
  }
}