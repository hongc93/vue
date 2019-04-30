/*
 * Filename: add-category-dialog.vue
 * Remark: add-category-dialog.vue
 * Project: purchase-sell-stock
 * File Created: 2019-03-28 5:52:29 pm
 * Last Modified: 2019-03-28 5:52:31 pm
 * Author: CC
 */
<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="添加分类">
    <el-form ref="dialogForm"
      :model="category"
      label-width="120px">
      <el-form-item label="分类名称">
        <el-input v-model="category.categoryName"
          placeholder="分类名称"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button type="primary"
        plain
        @click="dialogVisible = !dialogVisible">取消</el-button>
      <el-button type="primary"
        @click="submitAdd">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      category: {
        categoryName: ''
      }
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    // 增加一级系列名称
    submitAdd() {
      this.$emit('addSeries',this.category)
      this.dialogVisible = !this.dialogVisible
    }
  }
}
</script>