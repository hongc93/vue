/*
 * Filename: bill-follow.vue
 * Remark: 流水
 * Project: purchase-sell-stock
 * File Created: 2019-05-13 10:55:05 am
 * Last Modified: 2019-05-13 10:55:10 am
 * Author: CC
 */
<template>
  <div class="bill-follow">
    <my-table :col="tableData.col"
      :data="tableData.data"
      border
      showIndex>
    </my-table>
  </div>
</template>

<script>
const MyTable = () => import('@/components/common/my-table/my-table')
export default {
  name: "BillFollow",
  components: {
    MyTable
  },
  data() {
    return {
      tableData: {
        col: [
          {
            prop: 'orderNum',
            label: '订单编号',
          },
          {
            prop: 'customName',
            label: '客户编号',
          },
          {
            prop: 'orderDate',
            label: '订单日期',
            sortable: true
          },
          {
            prop: 'receivables',
            label: '收款',
            sortable: true
          },
          {
            prop: 'orderCost',
            label: '成本',
            sortable: true
          },
          {
            prop: 'otherCost',
            label: '其他成本',
          },
          {
            prop: 'netProfit',
            label: '净利润',
            sortable: true
          }
        ],
        data: [
          {}
        ]
      }
    }
  },
}
</script>

<style lang="stylus" scoped></style>
