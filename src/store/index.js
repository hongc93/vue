import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import state from './state'

import Logger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV != 'production'

vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state,
  strict:debug,
  plugins:debug?[Logger()]:[]
})