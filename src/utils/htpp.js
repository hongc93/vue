/*
 * FileName: htpp.js  axios做些封装处理，用于ajax请求
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

import axios from 'axios'
import Vue from 'vue'
import { baseURL } from '@/assets/js/config'
// import { Message } from 'element-ui'
import { log } from '@/utils/utils'
// axios.defaults.timeout = 10000
axios.defaults.baseURL = baseURL

//request拦截器，设置全局请求
axios.interceptors.request.use(config => {
  // config.data = JSON.stringify(config.data)
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  // config.headers = {

  // }
  return config
})

//response拦截器，做些错误处理
axios.interceptors.response.use(
  response => {
    const data = response.data
    if (data.success) {
      const resultCode = data.resultCode
      switch (resultCode) {
        case 0: //请求错误
          //做些处理
          break
        case -1: //需要重新登录
          //做些处理
          break
      }
      console.log('success::', data)
      return response
    } else {
      Vue.prototype.$message.error(data.msg)
      return Promise.reject(data)
    }
  },
  error => {
    // Message.error('数据请求错误')
    console.log(error)
    return Promise.reject(error.response)
  }
)
/**
 * POST请求
 *
 * @export
 * @param {any} url 请求地址
 * @param {any} [data={}] 请求数据
 * @returns
 */
export function $post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * GET请求
 *
 * @export
 * @param {any} url 请求地址
 * @param {any} [params={}] 请求参数
 * @returns
 */
export function $get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
