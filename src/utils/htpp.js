/*
 * FileName: htpp.js  axios做些封装处理，用于ajax请求
 * Project: 
 * File Created: 2018-05-12
 * Author: chenhong
 */

import axios from 'axios'
import Qs from 'qs'
import Vue from 'vue'
import {
  baseURL
} from '@/assets/js/ip-config'
// import { Message } from 'element-ui'
import {
  log
} from '@/utils/utils'
import {
  head
} from 'shelljs'
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
export function $post(url, data = {}, status) {
  return request(url,'POST', data, status)
  // return new Promise((resolve, reject) => {
  //   var contentType = status ? status : 'application/json'
  //   var params = status ? Qs.stringify(data) : data
  //   axios
  //     .post(url, params, {
  //       headers: {
  //         'Content-Type': contentType
  //       }
  //     }, )
  //     .then(response => {
  //       if (response.data.success) {
  //         response.data.sessionId = response.headers.sessionid ? response.headers.sessionid : ''
  //         resolve(response.data)
  //       } else {
  //         alert(response.data.message)
  //       }
  //     })
  //     .catch(err => {
  //       reject(err)
  //     })
  // })
}

/**
 * GET请求
 *
 * @export
 * @param {any} url 请求地址
 * @param {any} [data={}] 请求参数
 * @returns
 */
export function $get(url, data = {}) {
  return request(url, 'GET', data, 'application/x-www-form-urlencoded')
  // return new Promise((resolve, reject) => {
  //   axios
  //     .get(url, {
  //       params: data,
  //       headers: {
  //         'sessionId': sessionStorage.getItem('sessionId')
  //       }
  //     })
  //     .then(response => {
  //       if (response.status == 200 && response.data.success == true) {
  //         resolve(response.data)
  //       } else {
  //         reject(response.data)
  //       }
  //     })
  //     .catch(error => {
  //       console.error("error", error);
  //       alert(error.response.message);
  //       reject(error)
  //     })
  // }
  // )
}

/**
 * 
 */
function request(url, methods, data = {}, status) {
  return new Promise((resolve, reject) => {
    var contentType = status ? status : 'application/json'
    var params = status ? Qs.stringify(data) : data
    console.info("222")
    console.info(methods)
    console.info(contentType)
    console.info(status)
    console.info(params)
    axios
      .request({
        url: url,
        methods: methods,
        headers: {
          'sessionId': sessionStorage.getItem('sessionId'),
          'Content-Type': contentType
        },
        params: params,
        timeout: 1000
      })
      .then(response => {
        if (response.status == 200 && response.data.success == true) {
          resolve(response.data)
        } else {
          reject(response.data)
        }
      })
      .catch(error => {
        console.error("error", error)
        reject(error)
      })
  })
}


export function $put(url, data = {}, status) {
  return request(url,'PUT', data, status)
}
export function $delete(url, data = {}) {
  return request(url,'DELETE', data, 'application/x-www-form-urlencoded')
}


