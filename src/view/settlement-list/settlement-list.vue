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
          stripe
          operation
          selection
          operationWidth="80"
          :selection-change="selectionChange">
          <div slot="operation"
            slot-scope="scope">
            <el-button type="text"
              @click="handleDel(scope)"
              icon="icon-delete">删除</el-button>
          </div>
        </my-table>
        <div class="total-price">总价：<span class="red">{{ totalPrice }} 元</span></div>
        <div class="fr">
          <el-button type="text"
            plain
            icon="icon-tianjia"
            @click="routeTo('Orders')">继续添加产品</el-button>
          <el-button type="primary"
            icon="icon-jiesuan"
            @click="routeTo('SettlementType')">结算</el-button>
        </div>
      </template>
    </white-box>
  </div>
</template>

<script>
const WhiteBox = () => import("@/components/white-box/white-box");
const MyTable = () => import("@/components/my-table/my-table");
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
            minWidth: '400',
            align: 'left',
            render: (h, params) => {
              return (
                <div class='product-bisic'>
                  <div class='thum'>
                    <img src={params.row.thum} />
                  </div>
                  <div class='info'>
                    <div class='name'>
                      <span>名称：</span>
                      {params.row.productName}
                    </div>
                    <div class=''>
                      <span>规格：</span>
                      {params.row.size}
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
            minWidth: '160'
          },
          {
            prop: 'total',
            label: '小计',
            align: 'center',
            render: (h, params) => {
              let total = params.row.price * params.row.count
              return <div class='red'>{total} 元</div>
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
          },
          {
            productName: '丝薄亲体纸尿裤 (大包)',
            thum: require('@/assets/img/no-thum.png'),
            size: 'S',
            price: 108,
            count: 3,
            total: ''
          },
          {
            productName: '果C亲体纸尿裤 (大包)',
            thum: require('@/assets/img/no-thum.png'),
            size: 'L',
            price: 108,
            count: 2,
            total: ''
          }
        ]
      },
      totalPrice: 0,
    };
  },
  created() {
    this.setRender()
  },
  methods: {
    // 删除商品
    handleDel(scope) {
      this.$confirm('确认删除这个商品吗？', '提示', {
        confrimButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.data.pop()
        this.$message({
          type: 'success',
          message: '删除成功！'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // table render
    setRender() {
      this.tableData.col.forEach(item => {
        if (item.prop === 'count') {
          item.render = (h, params) => {
            // hanldeDel 执行两次 为何？
            const handleDel = () => {
              if (params.row.count === 0) {
                console.log(1111);
                params.row.count = 0
                console.log(params.row.count)
                return
              }
            }
            return (
              <div>
                <el-input-number v-model={params.row.count} onBlur={handleDel(params.row)}></el-input-number>
              </div>
            )
          }
        }
      })
    },
    //总价
    selectionChange(val) {
      this.totalPrice = 0
      val.forEach(item => {
        this.totalPrice += item.count * item.price
      })
    },

    // 跳转页面
    routeTo(toName) {
      this.$router.push({
        name: toName
      })
    }
  }

};
</script>

<style lang="stylus" scoped>
.settlement-list
  .total-price
    text-align: right
    font-size: 14px
    line-height: 28px
</style>
