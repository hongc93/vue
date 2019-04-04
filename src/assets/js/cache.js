import storage from 'good-storage'

const USERINFO = '_isight_userInfo_'

/** 
 * 获取缓冲的用户信息
 * 
 * @export 
 * @return
 */
export function loadUser(){
  return storage.get(USERINFO,null)
}

/** 
 * 保存用户信息
 * 
 * @export 
 * @param  {*}用户信息
 * @return
 */
export function saveUser(userInfo) {
  storage.set(USERINFO, userInfo)
  return userInfo
}

/**
 *清除用户登录的信息
 *
 * @export
 * @returns
 */
export function clearUser() {
  storage.remove(USERINFO)
  return null
}