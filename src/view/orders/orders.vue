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
        <div class="member">
         
            <!-- <span style="width: 60px; display:inline-block">会员选择：</span> -->
            <el-radio-group v-model="whetherMember">
              <!-- <el-radio-button label="member"></el-radio-button> -->
              <el-radio-button label="registMember">注册会员</el-radio-button>
              <el-radio-button label="notMember">非会员</el-radio-button>
            </el-radio-group>
            <member-select @confirm="ConfrimMember"></member-select>
         
          <div class="member-info">
            <div>姓名：<span class="red">张威</span>级别：<span class="red">一级</span>电话：<span class="red">13552075715</span></div>
          </div>
        </div>

        <el-tabs type="card"
          v-model="activeName">
          <el-tab-pane v-for="(item,index) in productAry"
            :key="index"
            :label="item.label"
            :name="item.name">
            <!-- <my-table :col="tableData.col"
            :data="tableData.data"></my-table>-->
            <div class="product-list"
              v-for="(child,index) in item.children"
              :key="index">
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
                      :min="1"></el-input-number>
                    <span class="per-unit"></span>
                    (单位：{{item.perUnit}})
                  </div>
                </div>
              </div>
              <div>
                <span>小计：</span>
                <strong>{{child.specifications[child.specificationVal].price*child.buyCount}}</strong>
              </div>
              <el-button type="primary"
                icon="el-icon-plus"
                @click="openDialog('ordersList',child.label,child.thum,child.specifications[child.specificationVal].price,child.specifications[child.specificationVal].size,child.buyCount)">添加到购物车</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="settlement">
          <el-button type="primary"
            size="samll"
            @click="handleSettlement">去结算</el-button>
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
const WhiteBox = () => import("@/components/common/white-box/white-box");
const MyTable = () => import("@/components/common/my-table/my-table");
import MemberSelect from "@/components/member-select/member-select";
import OrdersList from "./components/orders-list/orders-list";
import { productAry } from "./data.js";
export default {
  components: {
    WhiteBox,
    MyTable,
    OrdersList,
    MemberSelect
  },
  data() {
    return {
      activeName: "diapers",
      productAry,
      whetherMember: ''
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
    },
    // 会员选择
    ConfrimMember(member) {
      console.log(member);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
