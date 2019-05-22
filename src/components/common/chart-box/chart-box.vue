/*
 * Filename: chart-box.vue
 * Remark: chart-box.vue
 * Project: purchase-sell-stock
 * File Created: 2019-05-15 2:23:08 pm
 * Last Modified: 2019-05-15 2:23:42 pm
 * Author: CC
 */
<template>
  <div class="chart-box">
    <white-box :title="title"
      :padding="padding"
      :width="width"
      :float="float"
      :border="border"
      :height="setWidthHeight().myHeight"
      :class="[cls,{'no-padding':noPadding}]"
      :shadow="shadow"
      :source="source"
      ref="whiteBox"
      v-waypoint="{active:true,callback:onWaypoint}">
      <div class="select"
        slot="title-right">
        <slot name="select"></slot>
      </div>
      <template slot="content">
        <div class="box-mid">
          <div class="subtext"
            v-if="subtext">{{ subtext }}</div>
          <div class="chart-content"
            ref="chartContent">
            <div class="chart-top">
              <slot name="chart-top"></slot>
            </div>
            <div class="chart-tool">
              <div class="tools-left">
                <slot name="tools-left"></slot>
              </div>
              <div class="tools"
                :style="toolsPosition">
                <el-tooltip v-for="(item, index) in tools"
                  :key="index"
                  v-if="isShowTool(item.name)"
                  effect="dark"
                  :content="item.label"
                  placement="top">
                  <span class="chart-icon"
                    :class="[item.icon,{'cur-icon':isCurrent(item.name)}]"
                    @click="toolOnClick(item)"></span>
                </el-tooltip>
              </div>
            </div>
            <my-chart ref="boxChart"
              :height="chartHeight"
              @inited="chartInited"
              @timeline-changed="timelineChanged"
              :option="option"
              :auto-init="autoInit">
            </my-chart>
            <transition name="el-zoom-in-center">
              <div v-if="showDataView"
                class="chart-data-view"
                ref="chartDataView">
                <div class="view-top">
                  <div class="title">数据视图</div>
                  <el-button class="close-view"
                    size="mini"
                    type="danger"
                    icon="el-icon-close"
                    @click="showDataView = false">关闭</el-button>
                </div>
                <div class="table-view">
                  <my-table height="100%"
                    :col="dataViewCol"
                    :data="dataViewData">
                  </my-table>
                </div>
              </div>
            </transition>
            <div class="chart-bottom">
              <slot name="chart-bottom"></slot>
            </div>
          </div>
        </div>
      </template>
    </white-box>
  </div>
</template>

<script>
const MyChart = () => import('@/base/my-chart/my-chart')
const WhiteBox = () => import('@/components/common/white-box/white-box')
const MyTable = () => import('@/components/common/my-table/my-table')
const ScrollBar = () => import('@/components/common/scroll-bar/scroll-bar')

import html2canvas from 'html2canvas'
import download from 'downloadjs'
import { isPlainObject } from 'lodash/lang'
import { chartColor } from '@/assets/js/config.js'
import { on, off } from '@/utils/dom.js'
import { throttle } from 'lodash/function'

export default {
  components: {
    MyChart,
    WhiteBox,
    ScrollBar,
    MyTable
  },
  props: {
    title: {
      type: [String, Boolean]
    },
    cls: {
      type: String
    },
    width: {
      type: String,
      default: ''
    },
    float: {
      type: String,
      default: 'left'
    },
    border: {
      type: Boolean,
      default: false
    },
    chartHeight: {
      type: String
    },
    padding: {
      type: String,
      default: '20px'
    },
    height: {
      type: String,
      default: 'auto'
    },
    shadow: {
      type: Boolean,
      default: false
    },
    source: {
      type: Boolean,
      default: true
    },
    boxTop: {
      type: Boolean,
      default: true
    },
    subtext: {
      type: String
    },
    autoInit: {
      type: Boolean,
      default: false
    },
    needSplit: {
      type: Boolean,
      default: false
    },
    showTools: {
      type: Array,
      default: () => ['line', 'bar', 'data', 'restore', 'collect', 'download', 'share']
    },
    tools: {
      type: Array,
      default: () => [
        {
          name: 'line',
          label: '折线图',
          icon: 'icon-line',
          show: true
        },
        {
          name: 'bar',
          label: '柱状图',
          icon: 'icon-bar',
          show: true
        },
        {
          name: 'data',
          label: '数据视图',
          icon: 'el-icon-tickets',
          show: true
        },
        {
          name: 'restore',
          label: '还原',
          icon: 'el-icon-refresh',
          show: true
        },
        {
          name: 'collect',
          label: '收藏',
          icon: 'icon-collect-out',
          show: true
        },
        {
          name: 'download',
          label: '保存图片',
          icon: 'el-icon-download',
          show: true
        },
        {
          name: 'share',
          label: '分享',
          icon: 'el-icon-share',
          show: true
        }
      ]
    },
    option: {
      type: Object
    }
  },
  data() {
    return {
      curIcon: [],
      noPadding: false,
      toolsPosition: {
        top: 0,
        right: 0
      },
      dataViewCol: [],
      dataViewData: [],
      showDataView: false,
      inited: false,
      resizeEvent: throttle(this.setWidthHeight, 500)
    }
  },
  mounted() {
    this.setWidthHeight()
    on(window, 'resize', this.resizeEvent)
  },
  destroyed() {
    off(window, 'resize', this.resizeEvent)
  },
  methods: {
    // 监测是否出现在视窗内
    onWaypoint({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN && !this.inited) {
        console.log('chartBox Show');
        this.$emit('show')
        if (this.$refs.boxChart) {
          this.$refs.boxChart.initChart()
          this.inited = true
        }
      }
    },
    // 转成折线图
    toLine() {
      this.changeChartType('line')
    },
    // 转成柱形图
    toBar() {
      this.changeChartType('bar')
    },
    // 转换成数据视图，暂仅支持柱形图和折线图
    toData() {
      this.dataViewCol = this.col()
      this.dataViewData = this.tableData()
      this.showDataView = true
    },
    // 收藏
    toCollect() {
      const index = this.getCurIconIndex('collect')
      if (index > -1) {
        this.curIcon.splice(index, 1)
      } else {
        this.curIcon.push('collect')
      }
    },
    // 下载保存图片
    toDownload() {
      this.initHtml2canvas()
      console.log('下载保存图片');
    },
    // 还原
    toRestore() {
      if (!this.option) {
        return
      }
      if (this.curIcon.includes('line') || this.curIcon.includes('bar')) {
        this.$refs.boxChart.setOption(this.option)
      } else {
        this.$refs.boxChart.restore()
      }
      const barIndex = this.getCurIconIndex('bar')
      const lineIndex = this.getCurIconIndex('line')

      if (barIndex > -1) {
        this.curIcon.splice(barIndex, 1)
      }
      if (lineIndex > -1) {
        this.curIcon.splice(lineIndex, 1)
      }
    },
    // 分享
    toShare() {
      console.log('分享');
    },
    toolOnClick(item) {
      switch (item.name) {
        case 'line':
          this.toLine()
          break
        case 'bar':
          this.toBar()
          break
        case 'data':
          this.toData()
          break
        case 'collect':
          this.toCollect()
          break
        case 'download':
          this.toDownload()
          break
        case 'restore':
          this.toRestore()
          break
        case 'share':
          this.toShare()
          break
      }
    },
    changeChartType(type) {
      if (!this.option) {
        return
      }
      // 判断是否已经是该图形了
      if (this.curIcon.includes(type)) {
        return
      }
      if (type === 'line' || type === 'bar') {
        // 获取反转的图形类型
        const reverseType = type === 'line' ? 'bar' : 'line'
        // 获取反转的图形类型的位置
        const typeIndex = this.curIcon.indexOf(reverseType)
        // 如果存在则删除该反转的图形
        if (typeIndex > -1) {
          this.curIcon.splice(typeIndex, 1)
        }
        // 获取图形的配置选项
        const option = this.$refs.boxChart.getOption()
        const seriesData = option.series
        // 设置图形的类型
        seriesData.forEach(item => {
          item.type = type
        })
        this.$refs.boxChart.setOption(option)
        // 设置图标高亮状态
        this.curIcon.push(type)
      }
    },
    setOption(option) {
      this.$refs.boxChart.setOption(option)
    },
    // 图标数据转换表头
    col() {
      let col = [
        {
          label: '',
          prop: 'index'
        },
      ]
      const option = this.$refs.boxChart.getOption()
      option.series.forEach((item, index) => {
        col.push({
          label: item.name || '',
          prop: 'col_' + index
        })
      })
      return col
    },
    // 图表数据转换表格数据
    tableData() {
      let data = []
      const option = this.$refs.boxChart.getOption()
      option.xAxis[0].data.forEach((item, i) => {
        let dataObj = {
          index: item
        }
        option.series.forEach((s, n) => {
          let value = ''
          if (isPlainObject(s.data[i])) {
            value = s.data[i].value
          } else {
            value = s.data[i]
          }
          this.$set(dataObj, 'col_' + n, value)
        })
        data.push(dataObj)
      })
      return data
    },
    isCurrent(name) {
      return this.curIcon.includes(name)
    },
    getCurIconIndex(iconName) {
      return this.curIcon.indexOf(iconName)
    },
    isShowTool(name) {
      return this.showTools.includes(name)
    },
    initHtml2canvas() {
      // 创建一个新的canvas
      let canvas2 = document.createElement('canvas')
      let _canvas = document.querySelector('div')
      let w = parseInt(window.getComputedStyle(_canvas).width)
      let h = parseInt(window.getComputedStyle(_canvas).height)
      // 将canvas画布放大若干倍，然后放在较小的容器内，就显得不模糊了
      canvas2.width = w * 2
      canvas2.height = h * 2
      canvas2.style.width = w + 'px'
      canvas2.style.height = h + 'px'
      // 可以按照自己的需求，对context的参数修改，translate指的是偏移量
      let context = canvas2.getContext('2d')
      context.scale(2, 2)
      html2canvas(this.$refs.whiteBox.$el, { canvas: canvas2 }).then(canvas => {
        const baseData = canvas.toDataURL()
        const fileName = this.title + '.png'
        // 兼容性待处理
        download(baseData, fileName, 'image/png')
      })
    },
    // 设置工具的位置
    setToolsPosition() {
      const option = this.$refs.boxChart.getOption()
      const grid = option.grid ? option.grid[0] : null
      const right = grid ? grid.right : 0
      if (right.toString().indexOf('%') > -1) {
        this.toolsPosition.right = right
      } else {
        this.toolsPosition.right = right + 'px'
      }
    },
    show() {
      this.$emit('show')
    },
    chartInited() {

    },
    setWidthHeight() {
      const screenWidth = document.documentElement.clientWidth || document.body.clientWidth
      let myWidth = ''
      let myHeight = ''
      if (this.width === '50%' && screenWidth <= 1366) {
        if (this.needSplit) {
          myWidth = '50%'
          myHeight = 'auto'
          this.noPadding = true
        } else {
          myWidth = this.width
          myHeight = this.height
          this.noPadding = false
        }
      } else {
        myWidth = this.width
        myHeight = this.height
      }
      return {
        myWidth,
        myHeight
      }
    },
    timelineChanged(params) {
      this.$emit('timeline-changed', params)
    },
    setOption(option) {
      this.$refs.boxChart.setOption(option)
    }
  }}
</script>

<style lang="stylus" scoped></style>
