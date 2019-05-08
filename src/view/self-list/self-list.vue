/*
 * Author: CC
 * Introduction: 自用
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="self-list">
    <white-box width="100%"
      title="自用">
      <template slot="title-right">
        <el-button type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="openDialog('addSelfProduct')">添加</el-button>
      </template>
      <template slot="content">
        <my-table :col="tableData.col"
          :data="tableData.data"
          border
          stripe></my-table>
      </template>
    </white-box>
    <div class="dialogs">
      <add-self-product ref="addSelfProduct"
        @addProduct="addProduct"></add-self-product>
    </div>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/white-box/white-box')
const MyTable = () => import('@/components/my-table/my-table')
import AddSelfProduct from './components/add-self-product/add-self-product'
export default {
  name: "SelfList",
  components: {
    WhiteBox,
    MyTable,
    AddSelfProduct
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
          }
        ],
        data: [
          {
            productName: '丝薄拉拉裤（XL）',
            count: '1',
            cost: '63',
            date: '20190123'
          },
          {
            productName: '丝薄拉拉裤（XL）',
            count: '1',
            cost: '63',
            date: '20190222'
          }
        ]
      }
    }
  },
  methods: {
    openDialog(dialogName) {
      this.$refs[dialogName].open()
    },
    addProduct(product) {
      console.log(product);
    }
  }
}
</script>
