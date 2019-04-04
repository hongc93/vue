import * as types from './mutation-types'

const mutations = {
  [types.TEST](state,data){
    state.test = data
  },
  [types.USERINFO](state,data){
    state.userInfo = data
  }
}
export default mutations