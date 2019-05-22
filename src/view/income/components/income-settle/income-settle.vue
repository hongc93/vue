/*
 * Filename: income-settle.vue
 * Remark: 月结
 * Project: purchase-sell-stock
 * File Created: 2019-05-13 10:55:05 am
 * Last Modified: 2019-05-13 10:55:10 am
 * Author: CC
 */
<template>
  <div class="income-settle">
    <chart-box width="100%"
      autoInit
      :option="option"></chart-box>
  </div>
</template>

<script>
const ChartBox = () => import('@/components/common/chart-box/chart-box')
import { chartColor } from '@/assets/js/config.js'
export default {
  name: "IncomeSettle",
  components: {
    ChartBox
  },
  data() {
    return {
      option: {
        color: chartColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '销量',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ],
        
      }
    }
  },
}
</script>

<style lang="stylus" scoped></style>
