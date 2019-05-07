/*
 * Filename: add-categoryForm-dialog.vue
 * Remark: 添加产品分类
 * Project: purchase-sell-stock
 * File Created: 2019-03-28 5:52:29 pm
 * Last Modified: 2019-03-28 5:52:31 pm
 * Author: CC
 */
<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="添加产品分类">
    <el-form ref="categoryForm"
      :model="categoryForm"
      :rules="categoryRules"
      label-width="120px">
      <el-form-item label="分类名称"
        prop="categoryName">
        <el-input v-model="categoryForm.categoryName"
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
      categoryForm: {
        categoryName: ''
      },
      categoryRules: {
        categoryName: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    // 增加一级分类名称
    submitAdd() {
      this.dialogVisible = !this.dialogVisible
      this.$refs.categoryForm.validate((valid) => {
        if (valid) {
          this.$emit('addSeries', this.categoryForm)
        } else {
          console.log('error submit!');
          return false
        }
      })
    }
  }
}
</script>