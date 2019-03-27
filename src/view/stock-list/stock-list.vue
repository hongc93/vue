/*
 * Author: CC
 * Introduction: 库存清单
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="stock-list">
    <white-box width="100%">
      <template slot="content">
        库存单
      </template>
    </white-box>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/white-box/white-box')
export default {
  name: "StockList",
  components: {
    WhiteBox
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
