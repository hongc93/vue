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
          size="mini"
          @click="openDialog('addSales')">添加</el-button>
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
            <el-button type="text"
              @click="openDialog('saleDetail')">详情</el-button>
            <el-button type="text"
              @click="handleDel">删除</el-button>
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
const WhiteBox = () => import("@/components/white-box/white-box");
const MyTable = () => import("@/components/my-table/my-table");
import AddSales from "./components/add-sale-dialog/add-sale-dialog";
import SaleDetail from "./components/sale-detail-dialog/sale-detail-dialog";
// import { tableData } from "./data.js";

export default {
  name: "SalesList",
  components: {
    WhiteBox,
    MyTable,
    AddSales,
    SaleDetail
  },
  data() {
    return {
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
            width: '120',
            align: 'center'
          },
          {
            label: '日期',
            prop: 'date',
            width: '120',
            align: 'center'
          },
          {
            label: '总价',
            prop: 'samllTotal',
            width: '120',
            align: 'right'
          },
          {
            label: '运费',
            prop: 'carriage',
            width: '120',
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
      }
    };
  },
  methods: {
    openDialog(dialogName) {
      this.$refs[dialogName].open();
    },
    handleDel(scope) {
      console.log('删除');
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped></style>
