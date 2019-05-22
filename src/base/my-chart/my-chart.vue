/*
 * Filename: my-chart.vue
 * Remark: my-chart.vue
 * Project: purchase-sell-stock
 * File Created: 2019-05-15 11:44:39 am
 * Last Modified: 2019-05-15 11:44:44 am
 * Author: CC
 */
 <template>
  <div class="my-chart"
    ref="myChart">
    <my-loading :loading="loading">
      <div class="chart"
        :id="randomId"
        :style="{width:width,height:height}"></div>
    </my-loading>
  </div>
</template>
 
 <script>
const echarts = require('echarts/lib/echarts')
// 柱状图
require('echarts/lib/chart/bar')
// 饼图
require('echarts/lib/chart/pie')
// 树
require('echarts/lib/chart/tree')
// 地图
require('echarts/lib/chart/map')
require('echarts/lib/chart/scatter')
// 提示框、标题、
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/timeline')
require('echarts/lib/component/graphic')
require('echarts/lib/component/dataset')

import { isObject, isEmpty, isArray } from 'lodash/lang'
import { throttle } from 'lodash/function'
import { mapGetters } from 'vuex'
import { on, off } from '@/utils/dom.js'
import MyLoading from '@/components/common/my-loading/my-loading'
export default {
  props: {
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 高度
    height: {
      type: String
    },
    // echarts的option
    option: {
      type: Object,
      default: () => { }
    },
    // loading加载效果
    loading: {
      type: Boolean,
      default: false
    },
    scrollDomId: {
      default: null
    },
    showFun: {
      type: Function
    },
    // 是否自动初始化chart
    autoInit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MyLoading
  },
  data() {
    return {
      randomId: 'chart-' + Date.now() + Math.random(),
      myChart: null,
      chartOption: this.option,
      inited: false,
      resizeEvent: throttle(this.resize, 500)
    }
  },
  created() {

  },
  mounted() {
    if (this.autoInit) {
      this.initChart()
    }
    on(this.onScrollDOM, 'resize', this.resizeEvent)
  },
  destroyed() {
    off(this.onScrollDOM, 'resize', this.scrollEvent)
  },
  methods: {
    // 判断是否是有效的option
    isValidOption() {
      if (!isObject(this.option)) {
        return false
      }
      if (isEmpty(this.option)) {
        return false
      }
      return true
    },
    // 初始化echarts
    initChart() {
      let $chartDom = document.getElementById(this.randomId)
      if (!$chartDom || !this.isValidOption()) {
        return
      }
      this.myChart = echarts.init($chartDom)
      this.setOption(this.option)
      this.events()
    },
    resize() {
      if (this.myChart) {
        this.myChart.resize()
      }
    },
    // 还原
    restore() {
      if (this.myChart) {
        this.myChart.dispatchAction({
          type: 'restore'
        })
      }
    },
    getOption() {
      if (this.myChart) {
        return this.myChart.getOption()
      }
    },
    setOption(option) {
      if (this.myChart) {
        this.myChart.setOption(option, true)
      } else {
        if (this.isValidOption()) {
          this.initChart()
        }
      }
    },
    events() {
      this.myChart.on('timelinechanged', (params) => {
        this.$emit('timeline-changed', params)
      })
    }
  },
  watch: {
    myChart() {
      this.$emit('inited')
    },
    //监听option
    option(newOption) {
      this.setOption(newOption)
    }
  }
}

 </script>
 
 <style lang="stylus" scoped>
 .my-chart
   .chart
     height: 250px
</style>
 