// 登陆
export function doLogin(params) {
  return new Promise((resolve, reject) => {
    const url = '/usercenter/user/login'
    $get(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
