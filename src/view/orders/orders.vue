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
    <white-box width="100%" title="下单">
      <template slot="content">
        <div class="member">会员选择：</div>
        <el-tabs type="card" v-model="activeName">
          <el-tab-pane
            v-for="(item,index) in productAry"
            :key="index"
            :label="item.label"
            :name="item.name"
          >
            <!-- <my-table :col="tableData.col"
            :data="tableData.data"></my-table>-->
            <div class="product-list" v-for="(child,index) in item.children" :key="index">
              <div class="basic">
                <div class="thum">
                  <img :src="child.thum">
                </div>
                <div class="info">
                  <div class="name">
                    <span>名称：</span>
                    {{ child.label }}
                  </div>
                  <div class="price">
                    价格：
                    <span>￥{{ child.specifications[child.specificationVal].price }}元/{{item.perUnit}}</span> 容量：
                    <span>{{ child.specifications[child.specificationVal].count }}</span>
                  </div>
                  <div>
                    <span>规格：</span>
                    <el-radio-group size="mini" v-model="child.specificationVal">
                      <el-radio-button
                        v-for="(s,i) in child.specifications"
                        :key="i"
                        :label="i"
                      >{{s.size}} {{s.amount}}</el-radio-button>
                    </el-radio-group>
                  </div>
                  <div></div>
                  <div>
                    <span>数量：</span>
                    <el-input-number
                      size="mini"
                      v-model="child.buyCount"
                      @change="handleChange"
                      :min="1"
                    ></el-input-number>
                    <span class="per-unit"></span>
                    (单位：{{item.perUnit}})
                  </div>
                </div>
              </div>
              <div>
                <span>小计：</span>
                <strong>{{child.specifications[child.specificationVal].price*child.buyCount}}</strong>
              </div>
              <el-button
                type="primary"
                icon="el-icon-plus"
                @click="openDialog('ordersList',child.label,child.thum,child.specifications[child.specificationVal].price,child.specifications[child.specificationVal].size,child.buyCount)"
              >添加到购物车</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="settlement">
          <el-button type="primary" size="samll" @click="handleSettlement">去结算</el-button>
        </div>
      </template>
    </white-box>
    <div class="dialogs">
      <orders-list ref="ordersList"></orders-list>
    </div>
  </div>
</template>
<script>
import "./orders.styl";
const WhiteBox = () => import("@/components/white-box/white-box");
const MyTable = () => import("@/components/my-table/my-table");
import OrdersList from "./components/orders-list/orders-list";
import { productAry } from "./data.js";
export default {
  components: {
    WhiteBox,
    MyTable,
    OrdersList
  },
  data() {
    return {
      activeName: "diapers",
      productAry
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    // 打开弹出框
    openDialog(dialogName, name, thum, price, size, count) {
      this.$refs[dialogName].open(name, thum, price, size, count);
    },
    handleSettlement() {
      this.$router.push({
        name: "SettlementList"
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
