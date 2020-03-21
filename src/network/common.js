import { request } from './request'

export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}

export function getComment(type, id) {
  return request({
    url: '/comment/hot',
    params: {
      type,
      id
    }
  })
}