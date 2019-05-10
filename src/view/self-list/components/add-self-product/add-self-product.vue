/*
 * Filename: add-self-product.vue
 * Remark: 添加自用产品
 * Project: purchase-sell-stock
 * File Created: 2019-05-08 3:45:52 pm
 * Last Modified: 2019-05-08 3:46:00 pm
 * Author: CC
 */
<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="添加订单"
    custom-class="add-self-product">
    <div class="content">
      <el-form :model="addProductForm"
        :rules="addProductRules"
        ref="addProductForm"
        label-width="120px">
        <el-form-item label="日期："
          prop="name">
          <el-date-picker disabled
            v-model="addProductForm.saleDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="产品："
          prop="product">
          <el-cascader :options="productSeries"
            v-model="addProductForm.product">
          </el-cascader>
        </el-form-item>
        <el-form-item label="规格："
          prop="specifications">
          <el-select v-model="addProductForm.specifications">
            <el-option label="NB" value="NB"></el-option>
            <el-option label="S" value="S"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量：">
          <el-input-number :min="1"
            v-model="addProductForm.count"></el-input-number>
        </el-form-item>
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
import { productSeries } from '@/assets/js/config.js'
export default {
  name: 'AddCustom',
  components: {
  },
  data() {
    return {
      dialogVisible: false,
      productSeries,
      addProductForm: {
        saleDate: new Date(),
        product: [],
        count: '',
        specifications:''
      },
      addProductRules: {
        product: [
          { required: true, message: '请选择产品', trigger: 'blur' },
        ],
        specifications: [
          { required: true, message: '请选择产品规格', trigger: 'blur' },
        ]
      },
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    submitForm() {
      this.$refs.addProductForm.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.$emit('addProduct', this.addProductForm)
        } else {
          alert('请输入正确的信息')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.addProductForm.resetFields()
    },
    addSuccess() {
      this.dialogVisible = false
    }
  }
}
</script>
