<template>
  <div id="comment">
    <comment-top :song-info="songInfo"/>
    <comment-main :comment="comment"/>
  </div>
</template>

<script>
import CommentTop from './childComps/CommentTop'
import CommentMain from './childComps/CommentMain'

export default {
  name: 'Comment',
  components: {
    CommentTop,
    CommentMain
  },
  data() {
    return {
      songInfo: {},
      comment: []
    }
  },
  created() {
    this.songInfo = this.$store.state.songInfo
    this.comment = this.songInfo.comment
  }
}

</script>

<style>
  #comment {
    animation: enter .5s ease-in;
  }
  
  @keyframes enter {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>