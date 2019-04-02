/*
 * Filename: orders-list.vue
 * Remark: 订单列表
 * Project: purchase-sell-stock
 * File Created: 2019-04-02 5:06:31 pm
 * Last Modified: 2019-04-02 5:06:57 pm
 * Author: CC
 */

 <template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="订单列表"
    custom-class="orders-list">
    <div class="content">
     
    </div>
    <div slot="footer">
      <el-button type="primary"
        plain
        @click="dialogVisible = !dialogVisible">取消</el-button>

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
      dialogVisible: false
    }
  },
  methods: {
    open(name,size,count) {
      console.log(name);
      console.log(size);
      console.log(count);
      this.dialogVisible = true
    },

    submitForm() {
      this.$refs.addSaleForm.validate((valid) => {
        if (valid) {
          this.openDialog('addCustomConfirm', this.addSaleForm)
        } else {
          alert('请输入正确的信息')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.addSaleForm.resetFields()
    },
    addSuccess() {
      this.dialogVisible = false
    }
  }
}
</script>
