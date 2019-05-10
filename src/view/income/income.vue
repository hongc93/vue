/*
 * Author: CC
 * Introduction: 收入
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="income">
    <white-box width="100%">
      <template slot="content">
        收入
      </template>
    </white-box>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/common/white-box/white-box')
export default {
  name: "Income",
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
