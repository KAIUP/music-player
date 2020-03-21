import { request } from './request'

export function getHotParams() {
  return request({
    url: '/search/hot'
  })
}

export function getSearchSong(keywords) {
  return request({
    url: '/search',
    params: {
      keywords,
    }
  })
}