/*
 * Filename: add-purchase-dialog.vue
 * Remark: 进货
 * Project: purchase-sell-stock
 * File Created: 2019-05-08 5:12:35 pm
 * Last Modified: 2019-05-08 5:12:39 pm
 * Author: CC
 */

<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="进货"
    custom-class="add-purchase-dialog">
    <div class="content">
      <el-form :model="addPurchaseForm"
        :rules="addPurchaseRules"
        ref="addPurchaseForm"
        label-width="120px">
        <el-form-item label="进货日期："
          prop="name">
          <el-date-picker v-model="addPurchaseForm.date"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="进货渠道：">
          <el-input v-model="addPurchaseForm.channel"></el-input>
        </el-form-item>
    
        <el-form-item label="产品："
          prop="product">
          <el-cascader :options="productSeries"
            v-model="addPurchaseForm.product">
          </el-cascader>
        </el-form-item>
        <el-form-item label="规格："
          prop="productSize">
          <el-select v-model="addPurchaseForm.size" placeholder="请选择产品规格">
            <el-option v-for="item in sizeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量：">
          <el-input-number :min="1"
            v-model="addPurchaseForm.count"></el-input-number> <span>(单位：包)</span>
        </el-form-item>
        <el-button type="text">增加产品</el-button>
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
  components: {
  },
  data() {
    return {
      dialogVisible: false,
      productSeries,
      addPurchaseForm: {
        date: '',
        channel: '',
        product: [],
        count: '',
        size: ''
      },
      addPurchaseRules: {
        product: [
          { required: true, message: '请选择产品', trigger: 'blur' },
        ],
        productSize: [
          { required: true, message: '请选择产品规格', trigger: 'blur' },
        ]
      },
      sizeOptions: [
        {
          label: 'S',
          value: 'S'
        },
        {
          label: 'M',
          value: 'M'
        },
        {
          label: 'L',
          value: 'L'
        },
        {
          label: 'XL',
          value: 'XL'
        }
      ]
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    submitForm() {
      this.$refs.addPurchaseForm.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.$emit('addProduct', this.addPurchaseForm)
        } else {
          alert('请输入正确的信息')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.addPurchaseForm.resetFields()
    },
    addSuccess() {
      this.dialogVisible = false
    }
  }
}
</script>
