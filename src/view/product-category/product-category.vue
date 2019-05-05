/*
 * Author: CC
 * Introduction: 产品分类
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="product-category">
    <white-box width="100%"
      title="产品分类">
      <template slot="content">
        <div class="buttons">
          <div class="fr">
            <el-button type="primary"
              icon="el-icon-plus"
              @click="addMemberLevel(null)">增加系列</el-button>
            <el-button type="primary"
              icon="icon-shezhi"
              @click="openDialog('setThead')">设置表头</el-button>
          </div>
        </div>
        <tree-table ref="treeTable"
          :elTable="false"
          iconShowColProp="series"
          :columns="tableCol"
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
              @click="openDialog('specificationsStock',scope.row)">规格及库存</el-button>
          </template>
        </tree-table>
      </template>
    </white-box>
    <div class="dialogs">
      <add-category @addSeries="addSeries"
        ref="addCategory"></add-category>
      <set-thead ref="setThead"
        :col-option="columns"
        v-model="transferRightVal"></set-thead>
      <specifications-stock ref="specificationsStock"></specifications-stock>
    </div>
  </div>
</template>

<script>
import './product-category.stylus'
const WhiteBox = () => import('@/components/white-box/white-box')
const TreeTable = () => import('@/components/tree-table/tree-table')
import AddCategory from './components/add-category-dialog/add-category-dialog'
import SetThead from './components/set-thead-dialog/set-thead-dialog'
import SpecificationsStock from './components/specifications-stock-dialog/specifications-stock-dialog'
import { columns } from './data.js'
import { productSeries } from '@/assets/js/config.js'
export default {
  name: "SelfList",
  components: {
    WhiteBox,
    TreeTable,
    AddCategory,
    SetThead,
    SpecificationsStock
  },
  data() {
    return {
      columns, // 表头初始值
      tableData: [],
      productSeries,
      type: 'add', // 类型：add添加，edit修改
      currRow: null,
      seriesName: '',
      dialog: {
        title: '',
        visible: false
      },
      tableCol: _.cloneDeep(columns),//拷贝表头初始值
      transferRightVal: []
    }
  },
  created() {
    this.formatData(this.productSeries, this.tableData)
  },
  methods: {
    openDialog(dialogName, row) {
      this.$refs[dialogName].open(row)
    },
    // 格式化数据
    formatData(data, target, parent) {
      data.forEach((item, index) => {
        target.push({
          series: item.label,
          specifications: item.specifications,
          retailPrice: item.retailPrice,
          chiefPrice: item.chiefPrice,
          rosePrice: item.rosePrice,
          beginPrice: item.beginPrice,
          vipPrice: item.vipPrice,
          memberPrice: item.memberPrice,
          children: []
        })
        if (item.children && item.children.length) {
          this.formatData(item.children, target[index].children, item)
        }
      })
    },

    //格式化表头
    formatThead() {
      let tempTableCol = _.cloneDeep(this.columns)
      this.transferRightVal.forEach(item => {
        const i = _.findIndex(tempTableCol, option => option.key === item)
        if (i > -1) {
          tempTableCol.splice(i, 1)
        }
      })
      this.tableCol = tempTableCol
    },
    // 增加会员等级
    addMemberLevel(row) {
      this.openDialog('addCategory', row)
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
      if (row.children) {
        const childLength = row.children.length
        this.$refs.treeTable.delete(index, childLength + 1)
      } else {
        this.$refs.treeTable.delete(index, 1)
      }
    },
    addSeries(seriesData) {
      this.tableData.push(
        {
          series: seriesData.categoryName,
          specifications: [],
        }
      )
      console.log(seriesData);
    }
  },
  watch: {
    transferRightVal(newVal) {
      this.formatThead()
    },
    tableCol(newVal) {
      this.tableCol = newVal
    },
  }
}
</script>

