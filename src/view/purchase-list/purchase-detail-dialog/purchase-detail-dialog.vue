/*
 * Filename: purchase-detail-dialog.vue
 * Remark: 订货详情
 * Project: purchase-sell-stock
 * File Created: 2019-05-08 5:12:35 pm
 * Last Modified: 2019-05-08 5:12:39 pm
 * Author: CC
 */

<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="订货详情"
    custom-class="purchase-detail-dialog">
    <div class="content">
      订货详情
    </div>
    <div slot="footer">
      <el-button type="primary"
       @click="dialogVisible = !dialogVisible">确定</el-button>
    </div>

  </el-dialog>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      dialogVisible: false,
     
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    }
  }
}
</script>
