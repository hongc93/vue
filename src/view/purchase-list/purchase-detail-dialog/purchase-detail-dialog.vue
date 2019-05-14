/*
 * Filename: purchase-detail-dialog.vue
 * Remark: 订货详情
 * Project: purchase-sell-stock
 * File Created: 2019-05-08 5:12:35 pm
 * Last Modified: 2019-05-08 5:12:39 pm
 * Author: CC
 */

<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="订货详情"
    custom-class="purchase-detail-dialog">
    <div class="content">
      <my-table :col="tableData.col"
        :data="tableData.data"
        border
        stripe></my-table>
    </div>
    <div slot="footer">
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
      tableData: {
        col: [
          {
            prop: 'productName',
            label: '产品名'
          },
          {
            prop: 'productSize',
            label: '产品规格'
          },
          {
            prop: 'productCount',
            label: '数量'
          }
        ],
        data: [
          {
            productName: '丝柔亲体纸尿裤 (大包)',
            productSize: 'L',
            productCount: 2,
          },
          {
            productName: '丝柔亲体纸尿裤 (大包)',
            productSize: 'XL',
            productCount: 1,
          }
        ]
      }
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    }
  }
}
</script>
