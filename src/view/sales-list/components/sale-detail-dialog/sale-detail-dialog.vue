/*
 * Filename: sale-detail-dialog.vue
 * Remark: 出库单详情
 * Project: purchase-sell-stock
 * File Created: 2019-04-28 5:50:22 pm
 * Last Modified: 2019-04-28 5:50:24 pm
 * Author: CC
 */
<template>
  <el-dialog :visible.sync="dialogVisible"
    title="出货单详情"
    custom-class="sale-detail">
    <div class="content">
      <my-table :col="tableData.col"
        :data="tableData.data"
        border
        stripe
        :span-method="objectSpanMethod"></my-table>
      <div class="statistics">数量：<span class="red">{{totalCount}}</span> 合计：<span class="red">{{totalMoney}}</span></div>
    </div>
    <div slot="footer"
      class="dialog-footer">
      <el-button type="primary">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
const MyTable = () => import('@/components/my-table/my-table')
export default {
  components: {
    MyTable
  },
  data() {
    return {
      dialogVisible: false,
      totalCount: 0,
      totalMoney: 0,
      tableData: {
        col: [
          {
            prop: 'saleNum',
            label: '订单编号',
            width: '120',
            align: 'center'
          },
          {
            prop: 'customName',
            label: '客户名',
            width: '120',
            align: 'center'
          },
          {
            prop: 'orderDetail',
            label: '订单详情',
            align: 'left',
            children: [
              {
                label: '商品',
                prop: 'proName',
                width: '150',
                align: 'left',
                render: (h, params) => {
                  return (
                    <div>{params.row.proName} {params.row.proSize !== '' ? '(' + params.row.proSize + ')' : ''}</div>
                  )
                }
              },
              {
                label: '数量',
                prop: 'proCount',
                render: (h, params) => {
                  return (
                    <div>{params.row.proCount}</div>
                  )
                }
              },
              {
                label: '价格',
                prop: 'proPrice',
                align: 'right',
                render: (h, params) => {
                  return (
                    <div>{params.row.proPrice}</div>
                  )
                }
              }
            ]
          },
          {
            prop: 'gift',
            label: '赠品',
            width: '120',
            align: 'left',
            render: (h, params) => {
              return (
                <div>
                  {params.row.gift.map(options => {
                    return (
                      <div class='item'>{options.label} {options.size !== '' ? '(' + options.size + ')' : ''}  {options.count}</div>
                    )
                  })}
                </div>
              )
            }
          },
          {
            prop: 'carriage',
            label: '运费',
            width: '80',
            align: 'right'
          },
          {
            prop: 'remark',
            label: '备注',
            align: 'left'
          },
        ],
        data: [
          {
            saleNum: '20190130',
            customName: '嫂子',
            orderDetail: '',
            proName: '丝柔纸尿裤',
            proSize: 'M',
            proCount: 3,
            proPrice: 352,
            gift: [
              {
                label: '安睡裤',
                size: 'S-M',
                count: '1'
              },
              {
                label: '柔纸巾',
                size: '',
                count: '1'
              }
            ],
            carriage: '8',
            remark: '参加亲子节活动499-50',
          },
          {
            saleNum: '',
            customName: '',
            proName: '丝薄纸尿裤',
            proSize: 'L',
            proCount: 2,
            proPrice: 352,
            carriage: '',
            remark: '',
          },
          {
            saleNum: '',
            customName: '',
            proName: '果C纸尿裤',
            proSize: 'L',
            proCount: 2,
            proPrice: 316,
            carriage: '',
            remark: '',
          }
        ]
      }
    }
  },
  created() {
    this.statistics()
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    // 跨行
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      let dataLen = this.tableData.data.length
      if (columnIndex !== 2 && columnIndex !== 3 && columnIndex !== 4) {
        if (rowIndex % dataLen === 0) {
          return {
            rowspan: dataLen,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    // 格式化价格
    formatePrice(money) {
      return (
        '￥' + money
      )
    },
    // 合计
    statistics() {
      this.totalCount = 0
      this.totalMoney = 0
      this.tableData.data.forEach(item => {
        this.totalCount += item.proCount
        this.totalMoney += Number(item.proPrice)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.sale-detail
  .statistics
    text-align: right
    margin-top: 15px
    span
      font-size: 16px
      font-weight: bold
</style>
