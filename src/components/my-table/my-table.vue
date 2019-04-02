/*
 * FileName: ele表格简单封装
 * Project: yuntu-scf-vue
 * File Created: Monday, 4th June 2018 8:30:09 am
 * Author: LiuBing
 */
<template>
  <div class="my-ele-table"
    ref="myEleTable"
    :id="randomId"
     @mousemove="onMouseover"
    @mouseleave="onMouseleave">
    <div class="arrows"
      ref="arrows" v-show="arrows">

      <!-- v-show="arrows"> -->
      <span :style="{'left': selection ? '40px' : 0}"
        class="arrow arrow-left icon-xiangzuo"
        @click="arrowClick('left')"></span>
      <span class="arrow arrow-right icon-xiangyou"
        @click="arrowClick('right')"></span>
    </div>
    <el-table ref="table"
      :data="data"
      size="mini"
      :height="tableHeight"
      :highlight-current-row="highlightCurrentRow"
      :show-summary="showSummary"
      :show-header="showHeader"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      :span-method="spanMethod"
      :cell-class-name="cellClassName"
      :cell-style="cellStyle"
      :cell-mouse-enter="cellMouseEnter"
      :border="border"
      :stripe="stripe"
      :empty-text="emptyText"
      :header-cell-style="tableHeaderColor"
      style="width: 100%"
      :header-align="headerAlign"
      @selection-change="selectionChange">
      <el-table-column type="selection"
        v-if="selection"  width="30">
      </el-table-column>
      <el-table-column label="序号"
        type="index"
        :index="indexMethod"
        align="left"
        v-if='showIndex'  width="45">
      </el-table-column>
      <my-column v-for="(item,index) in col"
        :col="item"
        :column-align="columnAlign"
        :key="index"
        :show-overflow-tooltip="item.showOverflowTooltip !== undefined ? item.showOverflowTooltip : showOverflowTooltip"></my-column>
      <el-table-column header-align="center"
        v-if="operation"
        :label="operationLabel?operationLabel:'操作'"
        fixed="right"
        align="left"
        :width="operationWidth">
        <template slot-scope="scope">
          <slot name="operation"
            :row="scope.row"
            :index="scope.$index">
          </slot>
        </template>
      </el-table-column>

    </el-table>
    <div class="pagination mt10"
      v-if="totalPage">
      <paging :current-page="currentPage"
        :page-size="pageSize"
        :total="totalPage"
        :align="pagingAlign"
        @currentChange="currentChange"
        @sizeChange="sizeChange">
      </paging>
    </div>
  </div>
</template>

<script>
import MyColumn from './my-column'
import Paging from '@/components/paging/paging'
import { off, on, getElementTop } from '@/utils/dom.js'
import { throttle } from 'lodash/function'
export default {
  components: {
    MyColumn,
    Paging
  },
  props: {
    operationLabel: {
      type: String
    },
    //表格数据
    data: {
      type: Array
    },
    //表头数据
    col: {
      type: Array
    },
    //是否带有纵向边框
    border: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number]
    },
    fixed: {
      type: Boolean,
      default: true
    },
    headerAlign: {
      type: String,
      default: 'center'
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '--'
    },
    //是否显示操作列
    //可根据solt中name为operation自定义操作中显示的内容
    operation: {
      type: Boolean,
      default: false
    },
    //操作列宽度
    operationWidth: {
      type: String
    },
    //是否显示合计
    showSummary: {
      type: Boolean,
      default: false
    },
    //合计文本，默认显示合计两个字
    sumText: {
      type: String,
      default: '合计'
    },
    //自定义的合计计算方法,返回一个需要显示的合并的数组
    //Function({ columns, data })
    summaryMethod: {
      type: Function
    },
    //单元格对齐方式,也可单独在data中定义align
    columnAlign: {
      type: String,
      default: 'center'
    },
    //合并行或列
    // 通过给table传入span-method方法可以实现合并行或列，
    // 方法的参数是一个对象，{row, column, rowIndex, columnIndex}
    // 里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。
    // 该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。 return [1, 2]
    // 也可以返回一个键名为rowspan和colspan的对象。return {rowspan: 2,colspan: 1}
    spanMethod: {
      type: Function
    },
    //自定义单元格class，同上，返回class名
    cellClassName: {
      type: [String, Function]
    },
    cellStyle: {
      type: [Object, Function]
    },
    cellMouseEnter: {
      type: Function
    },
    //是否显示序号
    showIndex: {
      type: Boolean,
      default: false
    },
    //是否斑马显示
    stripe: {
      type: Boolean,
      default: false
    },
    //是否显示表头
    showHeader: {
      type: Boolean,
      default: true
    },
    showArrows: {
      type: Boolean,
      default: true
    },
    selection: {
      type: Boolean,
      default: false
    },
    selectionWidth: {
      type: String,
      default: '55'
    },
    selectionChange: {
      type: Function,
      default: () => {}
    },
    currentPage: {
      type: Number
    },
    pageSize: {
      type: [String, Number]
    },
    totalPage: {
      type: [String, Number]
    },
    pagingAlign: {
      //分页分页对齐方式，left，right,center
      type: String,
      default: 'right'
    },
    indexMethod: {
      type: [String, Function]
    },
    showOverflowTooltip: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //表格左右箭头，用于方便横向移动
      arrows: false,
      randomId: 'table-' + parseInt(Date.now() + Math.random() * 1e10),
      tableHeight: this.height,
      hasSetHeight: false,
      scrollEvent: throttle(this.setTableHeight, 500)
    }
  },
  mounted() {
    this.setArrows()
    on(window, 'scroll', this.scrollEvent)
    on(window, 'resize', this.setArrows)
    on(window, 'resize', this.resizeSetHeight)
  },
  destroyed() {
    off(window, 'scroll', this.scrollEvent)
    off(window, 'resize', this.setArrows)
    off(window, 'resize', this.resizeSetHeight)
  },
  methods: {
    currentChange(index) {
      this.$emit('currentChange', index)
    },
    sizeChange(index) {
      this.$emit('sizeChange', index)
    },
    setArrows() {
      setTimeout(() => {
        const tableWidth = this.$refs.table.$el.clientWidth
        this.$refs.arrows.style.width = tableWidth + 'px'
      }, 101)
    },
    arrowClick(arrow) {
      const $tableWrapper = document.querySelector('.el-table__body-wrapper')
      const scrollLeft = $tableWrapper.scrollLeft
      const step = 50
      if (arrow === 'left') {
        $tableWrapper.scrollLeft -= step
      } else {
        $tableWrapper.scrollLeft += step
      }
    },
    onMouseover(event) {
      const tableWidth = this.$refs.table.$el.clientWidth
      const tableBodyWidth = document.querySelector('.el-table__body')
        .clientWidth
      if (tableBodyWidth > tableWidth && this.showArrows) {
        this.arrows = true
        const $thead = document.querySelector('.has-gutter')
        const theadHeight = $thead.clientHeight
        const clientY = event.clientY
        // this.$refs.arrows.style.top = clientY - 20 + 'px'
        this.$refs.arrows.style.top = '40%'
      }
    },
    setTableHeight() {
      if (this.hasSetHeight || this.height) {
        return
      }
      const top = this.$refs.myEleTable.getBoundingClientRect().top
      if (top <= 98) {
        const documengHeight =
          document.documentElement.clientHeight || document.body.clientHeight
        const headerHeight = document.querySelector('.my-header').clientHeight
        const breadcrumbHeight = document.querySelector('.breadcrumb')
          ? document.querySelector('.breadcrumb').clientHeight
          : (0).clientHeight
        const footerHeight = document.querySelector('.footer').clientHeight

        this.tableHeight =
          documengHeight -
          headerHeight -
          breadcrumbHeight -
          footerHeight -
          8 -
          52
        this.hasSetHeight = true
      }
    },
    resizeSetHeight() {
      this.hasSetHeight = false
      this.setTableHeight()
    },
    onMouseleave() {
      this.arrows = false
    },
    setCurrentRow(row) {
      this.$refs.table.setCurrentRow(row)
    },
    toggleAllSelection() {
      this.$refs.table.toggleAllSelection()
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.table.toggleRowSelection(row)
        })
      } else {
        this.$refs.table.clearSelection()
      }
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #F8F8F9'
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>