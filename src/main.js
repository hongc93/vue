/*
 * @Description: 
 * @Author: ChenHong
 * @Date: 2019-06-18 14:44:48
 * @LastEditTime: 2020-03-08 18:40:35
 * @LastEditors: ChenHong
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWaypoint from 'vue-waypoint'
import VueSession from 'vue-session'
import MyIcon from '@/components/common/my-icon/my-icon.vue'
import './assets/stylus/index.styl'
import './assets/js/element-import-config.js'
import VueProgressBar from 'vue-progressbar'
import {$get,$post,$put,$delete} from './utils/htpp'
import {ips} from '@/assets/js/ip-config.js'
Vue.config.productionTip = false
Vue.prototype.$post = $post
Vue.prototype.$get = $get
Vue.prototype.$put = $put
Vue.prototype.$delete = $delete

//进度条配置
Vue.use(VueProgressBar,{
  color:'#02c1de',
  failedColor:'red',
  height:'2px',
  autoFinish:false
})
Vue.use(MyIcon)
Vue.use(VueWaypoint)
Vue.use(VueSession)
Vue.component('my-icon',MyIcon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
