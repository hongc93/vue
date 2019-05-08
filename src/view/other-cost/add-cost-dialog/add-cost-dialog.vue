/*
 * Filename: add-cost-dialog.vue
 * Remark: 添加其他费用
 * Project: purchase-sell-stock
 * File Created: 2019-05-08 3:45:52 pm
 * Last Modified: 2019-05-08 3:46:00 pm
 * Author: CC
 */
<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="添加费用"
    custom-class="add-cost-dialog">
    <div class="content">
      <el-form :model="addCostForm"
        :rules="addCostRules"
        ref="addCostForm"
        label-width="120px">
        <el-form-item label="日期："
          prop="name">
          <el-date-picker disabled
            v-model="addCostForm.costDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="项目名称："
          prop="projectName">
          <el-input v-model="addCostForm.projectName"></el-input>
        </el-form-item>
        <el-form-item label="数量：">
          <el-input-number :min="1"
            v-model="addCostForm.count"></el-input-number>
        </el-form-item>
        <el-form-item label="单价：">
          <el-input-number :min="1"
            :precision="2"
            v-model="addCostForm.price"></el-input-number>
        </el-form-item>
        <el-form-item label="商家：">
          <el-input placeholder="请输入商家信息"
            v-model="addCostForm.business"></el-input>
        </el-form-item>
        <el-form-item label="消费金额："> <span class="red" style="font-size: 16px">{{addCostForm.price*addCostForm.count}} 元</span></el-form-item>
      </el-form>
    </div>
    <div slot="footer">
      <el-button type="primary"
        plain
        @click="dialogVisible = !dialogVisible">取消</el-button>
      <el-button type="primary"
        plain
        @click="resetForm">重置</el-button>
      <el-button type="primary"
        @click="submitForm">确定</el-button>
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
      addCostForm: {
        costDate: new Date(),
        projectName: '',
        count: '',
        price: '',
        totalPrice: ''
      },
      addCostRules: {
        projectName: [
          { required: true, message: '请输入消费名称', trigger: 'blur' },
        ]
      },
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    },

    submitForm() {
      this.$refs.addCostForm.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.$emit('addCost', this.addCostForm)
        } else {
          alert('请输入正确的信息')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.addCostForm.resetFields()
    },
    addSuccess() {
      this.dialogVisible = false
    }
  }
}
</script>
