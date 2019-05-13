/*
 * Author: CC
 * Introduction: 收入
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="income">
    <top-search :multiple="false"
      :searchData="searchData.searchData"
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
    <white-box width="100%"
      title="收入">
      <template slot="content">
        <el-tabs type="card"
          v-model="activeName"
          @tab-click="tabClick">
          <el-tab-pane name="BillFollow"
            label="流水">
          </el-tab-pane>
          <el-tab-pane name="IncomeSettle"
            label="结算">
          </el-tab-pane>
        </el-tabs>

        <div style="padding:10px 10px 0;">
          <router-view></router-view>
        </div>
      </template>
    </white-box>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/common/white-box/white-box')
import TopSearch from '@/components/top-search-area/top-search-area'
import { searchData } from './data.js'
export default {
  name: "Income",
  components: {
    WhiteBox,
    TopSearch
  },

  data() {
    return {
      activeName: this.$route.name === 'Income' ? 'BillFollow' : this.$route.name,
      searchData,
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
    }
  },
  methods: {
    tabClick(tab) {
      this.$router.push(
        {
          name: tab.name
        }
      )
    }
  },
  watch: {
    activeName(newVal) {
      this.activeName = newVal
    }
  }
}
</script>

<style lang="stylus" scoped></style>
