<template>
  <div id="app">
    <nav-bar ref="nav" v-if="isShow"/>
    <tab-bar ref="tab" v-if="isShow"/>
    <loading/>
    <router-view/>
    <play-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabBar from 'components/common/tabbar/TabBar'
import PlayBar from 'components/content/playbar/PlayBar'
import Loading from 'components/common/loading/Loading'

export default {
  name: 'App',
  components: {
    NavBar,
    TabBar,
    PlayBar,
    Loading
  },
  data() {
    return {
      isShow: true,
    }
  },
  watch: {
    '$route'(to, from) {
      if(to.path == '/play'||to.path == '/comment'||to.path == '/playlist') {
        this.isShow = false
      }else {
        this.isShow = true
      }
    }
  }
}
</script>

<style>
@import '~assets/css/base.css';
</style>
