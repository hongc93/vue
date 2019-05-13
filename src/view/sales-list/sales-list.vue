/*
 * Author: CC
 * Introduction: 出货清单
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="sales-list">
    <top-search :multiple="false" :searchData="searchData.searchData"
      :searchSelect="searchData.searchSelect"
      labelWidth="100px">
      <template slot="date-right">
        <el-date-picker v-model="saleDate"
          size="mini"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          range-separator="至"></el-date-picker>
      </template>
      <template slot="customName-right">
        <el-select size="mini"
          v-model="customName">
          <el-option v-for="item in customOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"></el-option>
        </el-select>
      </template>
    </top-search>
    <white-box width="100%">
      <template slot="content">
        <my-table :col="tableData.col"
          :data="tableData.data"
          border
          stripe
          showIndex
          selection
          operation
          operationWidth="100"
          operationAlign="center">
          <div slot="operation"
            slot-scope="scope">
            <el-button type="text"
              @click="openDialog('saleDetail')">详情</el-button>
          </div>
        </my-table>
      </template>
    </white-box>
    <div class="dialogs">
      <add-sales ref="addSales"></add-sales>
      <sale-detail ref="saleDetail"></sale-detail>
    </div>
  </div>
</template>

<script>
const WhiteBox = () => import("@/components/common/white-box/white-box");
const MyTable = () => import("@/components/common/my-table/my-table");
import TopSearch from '@/components/top-search-area/top-search-area'
import AddSales from "./components/add-sale-dialog/add-sale-dialog";
import SaleDetail from "./components/sale-detail-dialog/sale-detail-dialog";
import { searchData } from './data.js'
export default {
  name: "SalesList",
  components: {
    WhiteBox,
    MyTable,
    AddSales,
    SaleDetail,
    TopSearch
  },
  data() {
    return {
      searchData,
      tableData: {
        col: [
          {
            label: '订单号',
            prop: 'saleNum',
            width: '120',
            align: 'center',
            render: (h, params) => {
              const openDialog = () => {
                this.openDialog('saleDetail')
              }
              return (
                <div>
                  <el-button type='text' onClick={openDialog}>{params.row.saleNum}</el-button>
                </div>
              )
            }
          },
          {
            label: '客户名',
            prop: 'customName',
            align: 'center'
          },
          {
            label: '日期',
            prop: 'date',
            align: 'center'
          },
          {
            label: '总价',
            prop: 'samllTotal',
            align: 'right'
          },
          {
            label: '运费',
            prop: 'carriage',
            align: 'right'
          }
        ],
        data: [
          {
            saleNum: '20190113',
            customName: '嫂子',
            product: '丝柔纸尿裤（M）',
            count: '3包',
            date: '20190112',
            price: '',
            samllTotal: '314.5',
            carriage: ''
          },
          {
            saleNum: '20190413',
            customName: '嫂子',
            product: '丝柔纸尿裤（M）',
            count: '3包',
            date: '20190112',
            price: '',
            samllTotal: '314.5',
            carriage: ''
          }
        ]
      },
      saleDate: '',
      customName: '',
      customOptions:[
        {
          label:'全部',
          value:'all'
        },
        {
          label:'张威',
          value:'zhangwei'
        }
      ]
    };
  },
  methods: {
    openDialog(dialogName) {
      this.$refs[dialogName].open();
    },
    handleDel(scope) {
      console.log('删除');
    }
  }
};
</script>

<style lang="stylus" scoped></style>
