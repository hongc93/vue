/*
 * Filename: sale-detail-dialog.vue
 * Remark: 出库单详情
 * Project: purchase-sell-stock
 * File Created: 2019-04-28 5:50:22 pm
 * Last Modified: 2019-04-28 5:50:24 pm
 * Author: CC
 */
<template>
  <el-dialog :visible.sync="dialogVisible"
    title="出货单详情"
    custom-class="sale-detail">
    <div class="content"></div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
const MyTable = () => import('@/components/my-table/my-table')
export default {
  components: {
    MyTable
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="stylus" scoped></style>
