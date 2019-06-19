/*
 * @Description: 
 * @Author: ChenHong
 * @Date: 2019-06-18 14:44:48
 * @LastEditTime : 2020-02-13 00:09:17
 * @LastEditors  : ChenHong
 */
import { $get, $post } from '@/utils/htpp'
// 登陆
export function doLogin(params,contentType) {
  return new Promise((resolve, reject) => {
    const url = '/manage/login'
    $post(url, params, contentType)
      .then(res => {
        sessionStorage.setItem("sessionId", res.sessionId); 
        resolve(res.data)
      })
      .catch(err => {
        alert(err.response.status + ":" + err.response.message);
        reject(err)
      })
  })
}
