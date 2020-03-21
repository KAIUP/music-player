import { request } from './request'

export function getFoundSong(type) {
  return request({
    url: '/top/song',
    params: {
      type
    }
  })
}