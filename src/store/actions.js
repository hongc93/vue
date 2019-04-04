import * as types from './mutation-types'
import { saveUser, clearUser } from '@/assets/js/cache'


// 保存用户信息
export const saveUserInfo = function( {commit } ,userInfo){
  commit(type.SET_USERINFO,saveUser(userInfo))
}

export const clearUserInfo = function({ commit }){
  commit(types.SET_USERINFO,clearUser())
}
