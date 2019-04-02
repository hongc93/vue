/*
 * Filename: orders.vue
 * Remark: 下单
 * Project: purchase-sell-stock
 * File Created: 2019-04-02 11:13:20 am
 * Last Modified: 2019-04-02 11:13:28 am
 * Author: CC
 */
<template>
  <div class="orders">
    <white-box width="100%"
      title="下单">
      <template slot="content">
        <el-tabs v-model="activeName">
          <el-tab-pane v-for="(item,index) in productAry"
            :key="index"
            :label="item.label"
            :name="item.name">
            <!-- <my-table :col="tableData.col"
              :data="tableData.data"></my-table> -->
            <div class="product-list"
              v-for="child in item.children">
              <div class="basic">
                <div class="thum"><img :src="child.thum" /></div>
                <div class="info">
                  <div class="name"><span>名称：</span>{{ child.label }}</div>
                  <div class="price">价格：<span>￥{{ child.specifications[child.specificationVal].price }}元/{{item.perUnit}}</span> 容量：<span>{{ child.specifications[child.specificationVal].count }}</span></div>
                  <div>
                    <span>规格：</span>
                    <el-radio-group size="mini"
                      v-model="child.specificationVal">
                      <el-radio-button v-for="(s,i) in child.specifications"
                        :key="i"
                        :label="i">{{s.size}} {{s.amount}}</el-radio-button>
                    </el-radio-group>
                  </div>
                  <div></div>
                  <div>
                    <span>数量：</span>
                    <el-input-number size="mini"
                      v-model="child.buyCount"
                      @change="handleChange"
                      :min="1"></el-input-number> <span class="per-unit"></span>(单位：{{item.perUnit}})
                  </div>
                </div>
              </div>
              <div>
                <span>小计：</span><strong>{{child.specifications[child.specificationVal].price*child.buyCount}}</strong>
              </div>
              <el-button type="primary"
                icon="el-icon-plus"
                @click="openDialog('ordersList',child.label,child.specifications[child.specificationVal].size,child.buyCount)">添加到购物车</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </white-box>
    <div class="dialogs">
      <orders-list ref="ordersList"></orders-list>
    </div>
  </div>
</template>
<script>
import './orders.styl'
const WhiteBox = () => import('@/components/white-box/white-box')
const MyTable = () => import('@/components/my-table/my-table')
import OrdersList from './components/orders-list/orders-list'
import { tableData } from './data.js'
export default {
  components: {
    WhiteBox,
    MyTable,
    OrdersList
  },
  data() {
    return {
      activeName: 'diapers',
      tableData,
      productAry: [
        {
          label: '纸尿裤系列',
          name: 'diapers',
          perUnit: '包',
          children: [
            {
              value: 'rouDipersBig',
              label: '丝柔亲体纸尿裤 (大包) ',
              thum: require('@/assets/img/no-thum.png'),
              specificationVal: 0,
              buyCount: 0,
              total: '',
              specifications: [
                {
                  size: 'S',
                  range: '3-6KG',
                  amount: '60片',
                  price: 108,
                  count: '3包/箱'
                },
                {
                  size: 'M',
                  range: '5-11KG',
                  amount: '50片',
                  price: 108,
                  count: '3包/箱'
                },
                {
                  size: 'L',
                  range: '(9-13KG)',
                  amount: '46片',
                  price: 108,
                  count: '3包/箱'
                },
                {
                  size: 'XL',
                  range: '12KG以上',
                  amount: '42片',
                  price: 108,
                  count: '3包/箱'
                }]
            },
            {
              value: 'rouDipersSmall',
              label: '丝柔亲体纸尿裤 (小包) ',
              thum: require('@/assets/img/no-thum.png'),
              specificationVal: 0,
              buyCount: 0,
              total: '',
              specifications: [
                {
                  size: 'NB',
                  range: '4KG以下',
                  amount: '40片',
                  price: 58,
                  count: '6包/箱'
                },
                {
                  size: 'S',
                  range: '3-6KG',
                  amount: '30片',
                  price: 58,
                  count: '6包/箱'
                }]
            }
          ]
        },
        // {
        //   label: '卫生巾系列',
        //   name: 'tampon',
        //   children: [
        //     {
        //       value: 'pyjamas',
        //       label: '舒心安睡裤 ',
        //       count: '3包/箱'
        //     },
        //     {
        //       value: 'Butterfly',
        //       label: '蝶影卫生巾 ',
        //       count: '3包/箱'
        //     }
        //   ]
        // }
      ]
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    // 打开弹出框
    openDialog(dialogName, name, size, count) {
      this.$refs[dialogName].open(name, size, count)
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
