<template>
  <div class="lyric">
  </div>
</template>

<script>
export default {
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
    //  ccc: []
    }
  },
  created() {
    let lrc = this.songInfo.lyric.split("\n")
    // console.log(lrc)
    this.getLrc(lrc)
  },
  methods: {
    getLrc(lrc) {
      let timeReg = /\[\d{2}:\d{2}\.\d{3}\]/g; //匹配时间的正则表达式
      let lrcArr = [];
      for (let i = 0; i < lrc.length; i++) {
        let time = lrc[i].match(timeReg); //获取歌词里的时间
        let value = lrc[i].replace(timeReg, ""); //获取纯歌词文本

        for (let j = 0; j < time.length; j++) {
          let t = time[j].slice(1, -1).split(":"); //t[0]分钟，t[1]秒
          let timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
          console.log(timeArr);
          
          lrcArr.push([timeArr, value]); //以[时间(秒)，歌词]的形式存进result
        }
      }
      setInterval(showLrc, 200) //设置定时，每200毫秒更新一下
    },
    showLrc() {
      let curTime = myAudio.currentTime; //获取当前的播放时间
      for (var i = 0; i < lrcArr.length; i++) {
        if ((curTime > lrcArr[i][0]) && (curTime < lrcArr[i + 1][0])) {
          //播放时间大于对应歌词时间小于下一句歌词时间就显示当前歌词
          document.getElementById("lyric").innerHTML = lrcArr[i][1];
          break; //找到对应歌词就停，不停的话，呵呵。。。
        }
      }
    }
  }
}
</script>

<style>

</style>