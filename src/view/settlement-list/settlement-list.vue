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
    <white-box width="100%" title="结算清单">
      <template slot="content">
        <my-table border stripe></my-table>
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
    return {};
  }
};
</script>

<style lang="stylus" scoped></style>
