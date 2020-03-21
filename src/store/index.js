import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    songInfo: JSON.parse(localStorage.getItem('songInfo')) || {},
    isPlay: false,
    currentTime: '00:00',
    totalTime: '00:00'

  },
  mutations: {
    loadStatus(state, flag) {
      state.loading = flag
    },
    playMusic(state, payload) {
      state.songInfo = payload
      state.isPlay = true
      localStorage.setItem('songInfo', JSON.stringify(state.songInfo)) //H5本地存储
    },
    rotateStart(state) {
      state.isPlay = true
    },
    rotateEnd(state) {
      state.isPlay = false
    },
    toggleClick(state) {
      state.isPlay = !state.isPlay
    },
    canPlay(state, payload) {
      state.totalTime = payload
    },
    timeupdate(state, payload) {
      state.currentTime = payload
    }
  },
  getters: {
    songInfo(state) {
      return state.songInfo
    }
  },
  actions: {},
  modules: {}
})