/*
 * Author: CC
 * Introduction: 其他成本
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="other-cost">
    <white-box width="100%"
      title="其他成本">
      <template slot="title-right">
        <el-button type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="openDialog('addCostDialog')">添加</el-button>
      </template>
      <template slot="content">
        <my-table :col="tableData.col"
          :data="tableData.data"
          border
          stripe></my-table>
      </template>
    </white-box>
    <div class="dialogs">
      <add-cost-dialog ref="addCostDialog"
        @addCost="addCost"></add-cost-dialog>
    </div>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/common/white-box/white-box')
const MyTable = () => import('@/components/common/my-table/my-table')
import AddCostDialog from './add-cost-dialog/add-cost-dialog'
export default {
  name: "OtherCost",
  components: {
    WhiteBox,
    MyTable,
    AddCostDialog
  },
  data() {
    return {
      tableData: {
        col: [
          {
            prop: 'productName',
            label: '产品名称'
          },
          {
            prop: 'count',
            label: '数量'
          },
          {
            prop: 'cost',
            label: '成本'
          },
          {
            prop: 'date',
            label: '日期'
          },
          {
            prop: 'businessInfo',
            label: '商家信息'
          }
        ],
        data: [
          {
            productName: '打印二维码',
            count: '1',
            cost: '63',
            date: '20190123',
            businessInfo: '天猫'
          }
        ]
      }
    }
  },
  methods: {
    openDialog(dialogName) {
      this.$refs[dialogName].open()
    },
    addCost(costData) {
      console.log(costData);
    }
  }
}
</script>
