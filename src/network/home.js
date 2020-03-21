import { request } from './request'

export function getBanner() {
  return request({
    url: '/banner'
  })
}

export function getPlayList(limit, offset, cat) {
  return request({
    url: '/top/playlist',
    params: {
      limit,
      offset,
      cat,
    }
  })
}

export function getNewSong() {
  return request({
    url: 'personalized/newsong',
  })
}