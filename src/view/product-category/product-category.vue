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

        <el-tabs v-model="activeName"
          type="border-card">
          <div class="buttons">
            <div class="fr">
              <el-button type="primary"
                icon="el-icon-plus"
                @click="openDialog('addCategory')">增加产品分类</el-button>
              <el-button type="primary"
                icon="el-icon-plus"  size="mini"
                @click="openDialog('addProduct',activeName)">增加产品</el-button>
              <el-button type="primary" size="mini"
                icon="icon-shezhi"
                @click="openDialog('setThead')">设置表头</el-button>
            </div>
          </div>
          <el-tab-pane v-for="(item,index) in tableData"
            :key="index"
            :label="item.series"
            :name="item.value">
            <my-table :col="tableCol"
              :data="tableData[index].children"
              stripe
              operation
              operationAlign="center"
              operationWidth="200">
              <template slot="operation"
                slot-scope="scope">
                <el-button type="text"
                  @click="openDialog('specificationsStock',scope.row)">规格及库存</el-button>
                <el-button type="text"
                  @click="editMemberLevel(scope.row)">修改</el-button>
              </template>
            </my-table>
          </el-tab-pane>
        </el-tabs>

        <!-- <tree-table ref="treeTable"
          :elTable="false"
          iconShowColProp="series"
          :columns="tableCol"
          :data="tableData"
          operation
          operationWidth="300">
          <template slot="operation"
            slot-scope="scope">
            <el-button type="text"
              v-if="!scope.row.parent"
              @click="openDialog('addProduct',scope.row)">添加产品</el-button>
            <el-button type="text"
              v-if="scope.row.parent"
              @click="openDialog('specificationsStock',scope.row)">规格及库存</el-button>
            <el-button type="text"
              @click="editMemberLevel(scope.row)">修改</el-button>
          </template>
        </tree-table> -->
      </template>
    </white-box>
    <div class="dialogs">
      <!-- 添加分类 -->
      <add-category @addSeries="addSeries"
        ref="addCategory"></add-category>
      <!-- 添加产品 -->
      <add-product @addProduct="addProduct"
        ref="addProduct"></add-product>
      <!-- 设置表头 -->
      <set-thead ref="setThead"
        :col-option="columns"
        v-model="transferRightVal">
      </set-thead>
      <!-- 规格及库存 -->
      <specifications-stock ref="specificationsStock"></specifications-stock>
    </div>
  </div>
</template>

<script>
import './product-category.stylus'
const WhiteBox = () => import('@/components/common/white-box/white-box')
const TreeTable = () => import('@/components/common/tree-table/tree-table')
const MyTable = () => import('@/components/common/my-table/my-table')
import AddCategory from './components/add-category-dialog/add-category-dialog'
import AddProduct from './components/add-product-dialog/add-product-dialog'
import SetThead from './components/set-thead-dialog/set-thead-dialog'
import SpecificationsStock from './components/specifications-stock-dialog/specifications-stock-dialog'
import { columns } from './data.js'
import { productSeries } from '@/assets/js/config.js'
export default {
  name: "SelfList",
  components: {
    WhiteBox,
    TreeTable,
    MyTable,
    AddCategory,
    AddProduct,
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
      transferRightVal: [],
      activeName: 'diapers'
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
          value: item.value,
          specifications: item.specifications,
          boxCapacity: item.boxCapacity,
          retailPrice: item.retailPrice,
          distributionPrice: item.distributionPrice,
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
    // addMemberLevel(row) {
    //   this.openDialog('addCategory', row)
    //   this.seriesName = ''
    //   this.dialog.visible = true
    // },
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
          children: []
        }
      )
      console.log(this.tableData);
      console.log(this.productSeries);

    },
    // 添加产品
    addProduct(productData) {
      console.log(productData);
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

