<template>
  <div class="paging"
    v-if="total > pageSize">
    <div :class="align">
      <el-pagination @current-change="currentChange"
        @size-change="sizeChange"
        :background="background"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        :total="total"
        :pager-count="pagerCount"
        :current-page="currentPage"
        :layout="layout"
        :prev-text="prevText"
        :next-text="nextText"
        :disabled="disabled">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageSize: {
      //每页显示条目个数
      type: Number,
      default: 0
    },
    pageSizes: {
      //每页显示个数选择器的选项设置
      // type: Number,
      default: () => [10, 20, 30]
    },
    total: {
      //总页数
      type: Number,
      default: 0
    },
    pagerCount: {
      //页码按钮的数量，当总页数超过该值时会折叠
      type: Number,
      default: 7
    },
    currentPage: {
      //当前页数
      type: Number,
      default: 1
    },
    layout: {
      //组件布局
      type: String,
      default: 'total, sizes, prev, pager, next, jumper, ->'
    },
    prevText: {
      //替代图标显示的上一页文字
      type: String,
      default: '上一页'
    },
    nextText: {
      //替代图标显示的下一页文字
      type: String,
      default: '下一页'
    },
    disabled: {
      //是否禁用
      type: Boolean,
      default: false
    },
    background: {
      //是否蓝色背景按钮
      type: Boolean,
      default: true
    },
    align: {
      //分页对齐方式，left，right,center
      type: String,
      default: 'right'
    }
  },
  methods: {
    currentChange(index) {
      this.$emit('currentChange', index)
    },
    sizeChange(index) {
      this.$emit('sizeChange', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.left
  text-align: left
.right
  text-align: right
.center
  text-align: center
</style>
