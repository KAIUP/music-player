import axios from 'axios'
import store from '../store/index'

export function request(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    store.commit('loadStatus', true)
    return config
  }, err => {
    return err
  })

  //响应拦截
  instance.interceptors.response.use(result => {
    if (result.status === 200) {
      store.commit('loadStatus', false)
      return result
    }
  }, err => {
    return err
  })

  return instance(config)
}