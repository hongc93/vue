/*
 * Filename: specifications-stock.vue
 * Remark: 规格及库存
 * Project: purchase-sell-stock
 * File Created: 2019-03-28 5:52:29 pm
 * Last Modified: 2019-03-28 5:52:31 pm
 * Author: CC
 */
<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="规格及库存"
    custom-class="specifications-stock">
    <div class="content">
      <div class="productName">{{productName}}</div>
      <my-table :col="tableCol"
        :data="tableData"
        border
        stripe></my-table>
      <div class="totalStock">总库存量：<span class="red">{{totalStock}} 包</span></div>
    </div>
    <div slot="footer">
      <el-button type="primary"
        plain
        @click="dialogVisible = !dialogVisible">取消</el-button>
      <el-button type="primary"
        @click="dialogVisible = !dialogVisible">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
const MyTable = () => import('@/components/common/my-table/my-table')
export default {
  components: {
    MyTable
  },
  data() {
    return {
      dialogVisible: false,
      tableCol: [
        {
          prop: 'size',
          label: '号码',
          align: 'center'
        },
        {
          prop: 'range',
          label: '适用范围',
          align: 'center',
          // headerRender: (h, params) => {
            // let flag = false
            // if (!params.row.range) {
            //   flag = true
            // }
            // return (
            //   <div></div>
            // )
          // }
        },
        {
          prop: 'amount',
          label: '包容量(/包)',
          align: 'center'
        },
        {
          prop: 'stocks',
          label: '库存(包)',
          align: 'center'
        }
      ],
      tableData: [],
      productName: '',
      totalStock: 0
    }
  },
  methods: {
    open(row) {
      this.dialogVisible = true
      this.productName = row.series
      this.tableData = row.specifications
      this.totalStock = 0
      row.specifications.forEach(item => {
        this.totalStock += Number(item.stocks)
      })
    }
  }
}
</script>
<style lang="stylus">
.specifications-stock
  .productName
    font-size: 14px
    font-weight: bold
    margin-bottom: 15px
    color: #333333
  .totalStock
    text-align: right
    margin-top: 15px
</style>