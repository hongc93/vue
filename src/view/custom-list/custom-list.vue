/*
 * Author: CC
 * Introduction: 客户信息
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="custom-list">
    <white-box width="100%"
      title="客户信息">
      <template slot="title-right">
        <el-button type="primary"
          size="mini"
          @click="openDialog('addCustom')">添加</el-button>
        <el-button type="primary"
          size="mini"
          @click="selectDelete">删除</el-button>
      </template>
      <template slot="content">
        <my-table ref="customTable"
          :col="tableData.col"
          :data="tableData.data"
          border
          stripe
          showIndex
          selection
          operation
          operationWidth="200px"
          :selection-change="handleSelectionChange">
          <div slot="operation"
            slot-scope="scope">
            <el-button type="text"
              @click="handleEdit(scope.row)">修改</el-button>
            <el-button type="text"
              @click="handleDel(scope.index,scope.row)">删除</el-button>
          </div>
        </my-table>
      </template>
    </white-box>
    <div class="dialog">
      <add-custom ref="addCustom"></add-custom>
    </div>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/white-box/white-box')
const MyTable = () => import('@/components/my-table/my-table')
import AddCustom from './components/add-custom-dialog/add-custom-dialog'
import { tableData } from './data.js'
export default {
  name: "customList",
  components: {
    WhiteBox,
    MyTable,
    AddCustom
  },
  data() {
    return {
      tableData,
      multipleSelection: []
    }
  },
  methods: {
    openDialog(dialogName, row) {
      this.$refs[dialogName].open(row)
    },
    handleEdit(row) {
      this.openDialog('addcustom', row)
    },
    handleDel(index, row) {
      console.log(this.tableData.data);
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;

    },
    selectDelete() {
      if (this.multipleSelection.length > 0) {
        this.$alert('确定要删除这' + this.multipleSelection.length + '条信息吗？', '删除', {
          confirmButtonText: '确定',
          callback: action => {
            this.tableData.data = _.difference(this.tableData.data, this.multipleSelection)
            this.$message({
              type: 'success',
              message: '删除成功'
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
