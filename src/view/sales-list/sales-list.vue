/*
 * Author: CC
 * Introduction: 出货清单
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="sales-list">
    <white-box width="100%"
      title="出货单">
      <div slot="title-right">
        <el-button type="primary"
          size="mini">添加</el-button>
      </div>
      <template slot="content">
        <my-table :col="tableData.col"
          :data="tableData.data"
          border
          stripe
          showIndex
          operation
          operationWidth="100">
          <div slot="operation"
            slot-scope="scope">
            <el-button type="text">修改</el-button>
          </div>
        </my-table>
      </template>
    </white-box>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/white-box/white-box')
const MyTable = () => import('@/components/my-table/my-table')
import { tableData } from './data.js'

export default {
  name: "SalesList",
  components: {
    WhiteBox,
    MyTable
  },
  data() {
    return {
tableData
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
