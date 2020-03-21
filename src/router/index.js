import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () =>
      import ('views/home/Home')
  },
  {
    path: '/guide',
    component: () =>
      import ('views/guide/Guide')
  },
  {
    path: '/found',
    component: () =>
      import ('views/found/Found')
  },
  {
    path: '/profile',
    component: () =>
      import ('views/profile/Profile')
  },
  {
    path: '/play',
    component: () =>
      import ('views/play/Play')
  },
  {
    path: '/comment',
    component: () =>
      import ('views/comment/Comment')
  },
  {
    path: '/playlist',
    component: () =>
      import ('views/playlist/PlayList')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router