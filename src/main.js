// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyIcon from '@/components/common/my-icon/my-icon.vue'
import './assets/stylus/index.styl'
import './assets/js/element-import-config.js'
import VueProgressBar from 'vue-progressbar'
Vue.config.productionTip = false


Vue.use(VueProgressBar,{
  color:'#02c1de',
  failedColor:'red',
  height:'2px',
  autoFinish:false
})
Vue.use(MyIcon)
Vue.component('my-icon',MyIcon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
