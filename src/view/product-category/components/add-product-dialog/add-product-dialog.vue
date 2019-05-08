/*
 * Filename: add-productForm-dialog.vue
 * Remark: 添加产品
 * Project: purchase-sell-stock
 * File Created: 2019-03-28 5:52:29 pm
 * Last Modified: 2019-03-28 5:52:31 pm
 * Author: CC
 */
<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="添加产品" custom-class="add-product">
    <el-form ref="productForm"
      :model="productForm"
      :rules="productRules"
      label-width="100px">
      <el-form-item label="产品名称："
        prop="productName">
        <el-input v-model="productForm.productName"
          placeholder="请输入产品名称"></el-input>
      </el-form-item>
      <el-form-item label="产品参数："
        prop="productParams">
        <el-checkbox-group @change="handleChange"
          v-model="productForm.productParams">
          <el-checkbox v-for="item in productParamsOptions"
            :key="item.value"
            :label="item.label"></el-checkbox>
        </el-checkbox-group>
        <span>其他</span>
        <el-input placeholder="请输入参数名称"
          v-model="productForm.addParams"
          style="width: auto"></el-input>
        <el-button type="text"
          @click="confirmAddParams">确定</el-button>
      </el-form-item>
      <div class="tip-info" v-if="productForm.productParamsObj.length!==0">注意：如果多个值用逗号隔开，例如 (S,M,L)</div>
      <el-form-item v-for="(item,index) in productForm.productParamsObj"
        :label="item.label"
        :key="index">
        <el-input placeholder="请输入对应值"
          v-model="productForm[item.value]"></el-input>
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
      productForm: {
        productName: '',
        productParams: [],
        addParams: '',
        productParamsObj: []//将checkbox 选中的值改为对象形式
      },
      productRules: {
        productName: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      },
      productParamsOptions: [
        { label: '号码', value: 'size' },
        { label: '长度', value: 'length' },
        { label: '适用范围', value: 'range' },
        { label: '容量', value: 'amount' },
        { label: '净含量', value: 'netWt' }],
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    // 增加产品
    submitAdd() {
      this.$refs.productForm.validate((valid) => {
        if (valid) {
          this.dialogVisible = !this.dialogVisible
          this.$emit('addProduct', this.productForm)
        } else {
          console.log('error submit!');
          return false
        }
      })
    },

    // 确定追加参数
    confirmAddParams() {
      let paramsOptionsLen = this.productParamsOptions.length
      this.$set(this.productParamsOptions, paramsOptionsLen, {
        label: this.productForm.addParams,
        value: 'value' + new Date()
      })
      let productParamsLen = this.productForm.productParams.length
      this.$set(this.productForm.productParams, productParamsLen, this.productForm.addParams)
      this.productForm.addParams = ''
      this.handleChange(this.productForm.productParams)
    },

    // 产品参数改变
    handleChange(value) {
      this.productForm.productParamsObj = []
      value.forEach(item => {
        const i = _.findIndex(this.productParamsOptions, options => options.label == item)
        this.productForm.productParamsObj.push(
          {
            label: item,
            value: this.productParamsOptions[i].value
          }
        )
      })
    }
  },
  watch: {
    productForm(newVal) {
      this.productForm = newVal
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/stylus/variable.styl'
.add-product
  .tip-info
    padding-left: 100px
    padding-bottom: 10px
    color: #ed4014
</style>