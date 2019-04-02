/*
 * Author: CC
 * Introduction: 产品分类
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="price-list">
    <white-box width="100%"
      title="产品分类">
      <div slot="title-right">

      </div>
      <template slot="content">
        <div class="buttons">
          <el-button type="primary"
            icon="el-icon-plus"
            @click="addMemberLevel(null)">增加系列</el-button>
        </div>
        <tree-table ref="treeTable"
          :columns="columns"
          :data="tableData"
          operation
          operationWidth="300">
          <template slot="operation"
            slot-scope="scope">
            <el-button type="text"
              @click="addMemberLevel(scope.row)">添加子等级</el-button>
            <el-button type="text"
              @click="editMemberLevel(scope.row)">修改</el-button>
            <el-button type="text"
              @click="delMemberLevel(scope.row,scope.index)">删除</el-button>
          </template>
        </tree-table>
      </template>
    </white-box>
    <div class="dialogs">
      <add-category ref="addCategory"></add-category>
    </div>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/white-box/white-box')
const TreeTable = () => import('@/components/tree-table/tree-table')
import AddCategory from './add-category-dialog/add-category-dialog'
import { columns } from './data.js'
import { productSeries } from '@/assets/js/config.js'
export default {
  name: "SelfList",
  components: {
    WhiteBox,
    TreeTable,
    AddCategory
  },
  data() {
    return {
      columns,
      tableData: [],
      productSeries,type: 'add',//类型：add添加，edit修改
      currRow: null,
      seriesName: '',
      dialog: {
        title: '',
        visible: false
      }
    }
  },
  created() {
    this.formatData(this.productSeries,this.tableData)
  },
  methods: {
    openDialog(dialogName,row){
      this.$refs[dialogName].open(row)
    },
    // 格式化数据
    formatData(data, target, parent) {
      data.forEach((item, index) => {
        target.push({
          series: item.label,
          specifications:item.specifications,
          children: []
        })
        if (item.children && item.children.length) {
          this.formatData(item.children,target[index].children, item)
        }
      })
    },

    // 增加会员等级
    addMemberLevel(row) {
      this.openDialog('addCategory',row)
      this.type = 'add'
      row ? this.currRow = row : this.currRow = null
      this.seriesName = ''
      this.dialog.visible = true
      this.dialog.title = '添加会员等级'
    },
    //编辑
    editMemberLevel(row) {
      this.type = 'edit'
      this.currRow = row
      this.seriesName = row.memberLevel
      this.dialog.visible = true
      this.dialog.title = '修改'
    },
    //删除
    delMemberLevel(row, index) {
      console.log(this.tableData)
      if (row.children) {
        const childLength = row.children.length
        this.$refs.treeTable.delete(index, childLength + 1)
      } else {
        this.$refs.treeTable.delete(index, 1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
