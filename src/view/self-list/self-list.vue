/*
 * Author: CC
 * Introduction: 自用
 * File Created: 2019-03-06 4:02:57 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 4:02:59 pm
 */
<template>
  <div class="self-list">
    <white-box width="100%">
      <template slot="content">
        自用
      </template>
    </white-box>
  </div>
</template>

<script>
const WhiteBox = () => import('@/components/white-box/white-box')
export default {
  name: "SelfList",
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
