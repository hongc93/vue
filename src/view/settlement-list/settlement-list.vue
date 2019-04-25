/*
 * Filename: settlement-list.vue
 * Remark: 结算清单
 * Project: purchase-sell-stock
 * File Created: 2019-04-03 5:46:32 pm
 * Last Modified: 2019-04-03 5:46:34 pm
 * Author: CC
 */
<template>
  <div class="settlement-list">
    <white-box width="100%"
      title="结算清单">
      <template slot="content">
        <my-table :col="tableData.col"
          :data="tableData.data"
          border
          stripe></my-table>
      </template>
    </white-box>
  </div>
</template>

<script>
const WhiteBox = () => import("@/components/white-box/white-box");
const MyTable = () => import("@/components/my-table/my-table");
// import { tableData } from './data.js'
export default {
  components: {
    WhiteBox,
    MyTable
  },
  data() {
    return {
      tableData: {
        col: [
          {
            prop: 'basic',
            label: '基本信息',
            render: (h, params) => {
              return (
                <div>
                  <div class="thum">
                    <img src={params.row.thum} />
                  </div>
                  <div class="info">
                    <div class="name">
                      <span>名称：</span>
                      {params.row.productName}
                    </div>
                  </div>
                </div>
              )
            }
          },
          {
            prop: 'price',
            label: '单价',
            align: 'center'
          },
          {
            prop: 'count',
            label: '数量',
            align: 'center',
            // render: (h, params) => {
            //   let min = 1
            //   const handleChange = value => {
            //     this.$nextTick(() => {
            //       console.log(222222)
            //     })
            //   }
            //   let count = params.row.count
            //   return (
            //     <div>
            //       {params.row.count}
            //       {count}
            //       <el-input-number
            //         v-model={count}
            //         min={min}
            //         onChange={handleChange}
            //       />
            //     </div>
            //   )
            // }
          },
          {
            prop: 'total',
            label: '小计',
            align: 'center',
            render: (h, params) => {
              let total = params.row.price * params.row.count
              return <div>{total}</div>
            }
          }
        ],
        data: [
          {
            productName: '丝柔亲体纸尿裤 (大包)',
            thum: require('@/assets/img/no-thum.png'),
            size: 'S',
            price: 108,
            count: 3,
            total: ''
          }
        ]
      }
    };
  },
  created() {
    this.setRender()
  },
  methods: {

    setRender() {
      this.tableData.col.forEach(item => {
        if (item.prop === 'count') {
          item.render = (h, params) => {
            let count = 9
            return (
              <div>{params.row.count}
                <el-input v-model={count}></el-input>
                <el-input-number v-model={params.row.count}></el-input-number>
              </div>
            )
          }

        }
      })
    }
  }

};
</script>

<style lang="stylus" scoped></style>
