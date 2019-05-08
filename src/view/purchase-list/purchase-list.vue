/*
 * Author: CC
 * Introduction: 进货单
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="purchase-list">
    <white-box width="100%"
      title="进货单">
      <template slot="title-right">
        <el-button type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="openDialog('addPurchaseDialog')">进货</el-button>
      </template>
      <template slot="content">
        <my-table :col="tableData.col"
          :data="tableData.data"
          border
          stripe
          operation
          operationWidth="200"
          operationAlign="center">
          <div slot="operation"
            slot-scope="scope">
            <el-button type="text"
              @click="openDialog('purchaseDetail')">订货详情</el-button>
          </div>
        </my-table>
      </template>
    </white-box>
    <div class="dialogs">
      <add-purchase-dialog ref="addPurchaseDialog"></add-purchase-dialog>
      <purchase-detail ref="purchaseDetail"></purchase-detail>
    </div>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/white-box/white-box')
const MyTable = () => import('@/components/my-table/my-table')
import AddPurchaseDialog from './add-purchase-dialog/add-purchase-dialog'
import PurchaseDetail from './purchase-detail-dialog/purchase-detail-dialog'
export default {
  name: "PurchaseList",
  components: {
    WhiteBox,
    MyTable,
    AddPurchaseDialog,
    PurchaseDetail
  },
  data() {
    return {
      tableData: {
        col: [
          {
            prop: 'date',
            label: '订货日期',
          },
          {
            prop: 'Channel',
            label: '订货渠道',
          },
          // {
          //   prop:'date',
          //   label:'订货日期',
          // },
          // {
          //   prop:'date',
          //   label:'订货日期',
          // }
        ],
        data: [
          {
            date: '20181228',
            Channel: '系统'
          },
          {
            date: '20190422',
            Channel: '张羽'
          }
        ]
      }
    }
  },
  methods: {
    openDialog(dialogName) {
      this.$refs[dialogName].open()
    }
  },
}
</script>

<style lang="stylus" scoped></style>
