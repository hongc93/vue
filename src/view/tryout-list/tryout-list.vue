/*
 * Author: CC
 * Introduction: 试用装邮寄清单
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="tryout-list">
    <white-box width="100%"
      title="试用装邮寄">
      <div slot="title-right">
        <el-button type="primary"
          size="mini"
          icon="el-icon-plus"
          @click="openDialog('addTryout')">添加</el-button>
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
            <el-button type="text">转化为客户</el-button>
          </div>
        </my-table>
      </template>
    </white-box>
    <div class="dialogs">
      <add-tryout ref="addTryout"></add-tryout>
    </div>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/common/white-box/white-box')
const MyTable = () => import('@/components/common/my-table/my-table')
import AddTryout from './add-tryout-dialog/add-tryout-dialog'
import { tableData } from './data.js'
export default {
  name: "TryoutList",
  components: {
    WhiteBox,
    MyTable,
    AddTryout
  },
  data() {
    return {
      tableData,
    }
  },
  methods: {
    openDialog(dialogName) {
      this.$refs[dialogName].open()
    }
  }
}
</script>

<style lang="stylus" scoped></style>
