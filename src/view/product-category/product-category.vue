/*
 * Author: CC
 * Introduction: 产品分类
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="product-category">
    <white-box width="100%" title="产品分类">
      <template slot="content">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleProductType">
          <div class="buttons">
            <div class="fr">
              <el-button
                type="primary"
                icon="el-icon-plus"
                @click="openDialog('addCategory')"
              >增加产品分类</el-button>
              <el-button
                type="primary"
                icon="el-icon-plus"
                size="mini"
                @click="openDialog('addProduct',activeName)"
              >增加产品</el-button>
              <el-button
                type="primary"
                size="mini"
                icon="icon-shezhi"
                @click="openDialog('setThead')"
              >设置表头</el-button>
            </div>
          </div>
          <!-- {{productType}} -->
          <el-tab-pane v-for="(item,index) in productType" 
            :key="index" 
            :label="item.name" 
            :name="item.id">{{item.name}}
            {{tableData}}
            <my-table
              :col="tableCol"
              :data="tableData"
              stripe
              operation
              operationAlign="center"
              operationWidth="200"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="text" @click="openDialog('specificationsStock',scope.row)">规格及库存</el-button>
                <el-button type="text" @click="editMemberLevel(scope.row)">修改</el-button>
              </template>
            </my-table> 
          </el-tab-pane>
        </el-tabs>
      </template>
    </white-box>
    <div class="dialogs">
      <!-- 添加分类 -->
      <add-category @addSeries="addSeries" ref="addCategory"></add-category>
      <!-- 添加产品 -->
      <add-product @addProduct="addProduct" ref="addProduct"></add-product>
     
      <!-- 规格及库存 -->
      <specifications-stock ref="specificationsStock"></specifications-stock>
    </div>
  </div>
</template>

<script>
import "./product-category.stylus";
const WhiteBox = () => import("@/components/common/white-box/white-box");
const TreeTable = () => import("@/components/common/tree-table/tree-table");
const MyTable = () => import("@/components/common/my-table/my-table");
import AddCategory from "./components/add-category-dialog/add-category-dialog";
import AddProduct from "./components/add-product-dialog/add-product-dialog";
import SpecificationsStock from "./components/specifications-stock-dialog/specifications-stock-dialog";
import { columns } from "./data.js";
import { productSeries } from "@/assets/js/config.js";
export default {
  name: "SelfList",
  components: {
    WhiteBox,
    TreeTable,
    MyTable,
    AddCategory,
    AddProduct,
    SpecificationsStock
  },
  data() {
    return {
      productType:[], //产品分类
      tableCol:[{
           key: 1,
           label: '系列',
           prop: 'name',
           align: 'left',
           width: '200',
           disabled: true
         },
         {
           key: 2,
           label: '箱容量',
           prop: 'boxCapacity',
           align: 'center',
           width: '200',
           disabled: true
         },
         {
           key: 3,
           label: '零售(元)',
           prop: 'retailPrice',
           align: 'center'
         },
         {
           key: 4,
           label: '铺货(元)',
           prop: 'distributionPrice',
           align: 'center'
         },
         {
           key: 5,
           label: '首席(元)',
           prop: 'chiefPrice',
           align: 'center'
         },
         {
           key: 6,
           label: '总代(元)',
           prop: 'rosePrice',
           align: 'center'
         },
         {
           key: 7,
           label: '一级(元)',
           prop: 'beginPrice',
           align: 'center'
         },
         {
           key: 8,
           label: 'VIP(元)',
           prop: 'vipPrice',
           align: 'center'
         },
         {
           key: 9,
           label: '会员(元)',
           prop: 'memberPrice',
           align: 'center'
         }],

      columns, // 表头初始值
      tableData: [],
      productSeries,
      type: "add", // 类型：add添加，edit修改
      currRow: null,
      seriesName: "",
      dialog: {
        title: "",
        visible: false
      },
      transferRightVal: [],
      activeName: ""
    };
  },
  created() {
    this.formatData(this.productSeries, this.tableData);
    this.getProductType();
  },
  methods: {
    openDialog(dialogName, row) {
      this.$refs[dialogName].open(row);
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
        });
        if (item.children && item.children.length) {
          this.formatData(item.children, target[index].children, item);
        }
      });
    },

    //格式化表头
    formatThead() {
      let tempTableCol = _.cloneDeep(this.columns);
      this.transferRightVal.forEach(item => {
        const i = _.findIndex(tempTableCol, option => option.key === item);
        if (i > -1) {
          tempTableCol.splice(i, 1);
        }
      });
      this.tableCol = tempTableCol;
    },
    // 增加会员等级
    // addMemberLevel(row) {
    //   this.openDialog('addCategory', row)
    //   this.seriesName = ''
    //   this.dialog.visible = true
    // },
    //编辑
    editMemberLevel(row) {
      this.type = "edit";
      this.currRow = row;
      this.seriesName = row.memberLevel;
      this.dialog.visible = true;
      this.dialog.title = "修改";
    },
    //删除
    delMemberLevel(row, index) {
      if (row.children) {
        const childLength = row.children.length;
        this.$refs.treeTable.delete(index, childLength + 1);
      } else {
        this.$refs.treeTable.delete(index, 1);
      }
    },
    addSeries(seriesData) {
      this.tableData.push({
        series: seriesData.categoryName,
        specifications: [],
        children: []
      });
      console.log(this.tableData);
      console.log(this.productSeries);
    },
    // 添加产品
    addProduct(productData) {
      console.log(productData);
    },
    //获取分类信息
    getProductType() {
      this.$get("/productType")
        .then(res => {
          this.productType = res.data.typeList
          this.activeName = res.data.typeList[0].name
        })
        .catch(err => {
          console.log(err);
          this.$message.error("查询数据失败，请重试！");
        });
    },
    // 分类被点击
    handleProductType(tab, event){
      console.log(event)
      console.log('111')
      console.log(event.target.getAttribute('id'))  //获取到当前元素的id
      let productTypeId = event.target.getAttribute('id').substring(4)
       console.log(productTypeId)
      this.$get("/product",{'catId':productTypeId})
        .then(res=>{
          this.tableData = res.data.productList
          console.log('222')
          console.log(this.tableData)
        })
        .catch(err => {
          this.$message.error("查询失败")
        })
    }
  },
  watch: {
    transferRightVal(newVal) {
      this.formatThead();
    },
    tableCol(newVal) {
      this.tableCol = newVal;
    }
  }
};
</script>

