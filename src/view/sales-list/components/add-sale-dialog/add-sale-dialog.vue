 /*
 * Filename: add-sale-dialog.vue
 * Remark: 添加订单
 * Project: purchase-sell-stock
 * File Created: 2019-03-26 4:08:52 pm
 * Last Modified: 2019-03-26 4:26:37 pm
 * Author: CC
 */

 <template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="添加订单"
    custom-class="add-custom">
    <div class="content">
      <el-form :model="addSaleForm"
        :rules="addSaleRules"
        ref="addSaleForm"
        label-width="120px">
        <el-form-item label="日期"
          prop="name">
          <el-date-picker disabled
            v-model="addSaleForm.saleDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="姓名"
          prop="name">
          <el-input placeholder="请输入姓名"
            v-model="addSaleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="产品">
          <el-cascader :options="options"
            v-model="selectedOptions">
          </el-cascader>
          </el-cascader>
        </el-form-item>

        <el-form-item label="认识途径"
          prop="knowWay">

          <el-input style="width: auto;"
            v-model="addSaleForm.remarks"
            placeholder="备注"></el-input>
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
      selectedOptions:[],
      options: selectedOptions,
      productSeries: JSON.parse(JSON.stringify(productSeries)),
      dialogVisible: false,
      addSaleForm: {
        saleDate: new Date(),
        name: '',
        mobile: '',
        remarks: '',
        product: ''
      },
      addSaleRules: {
        product: [
          { required: true, message: '请选择产品', trigger: 'blur' },
        ],

      },
      knowWayOptions: [
        {
          label: '朋友',
          value: '1'
        },
        {
          label: '地推',
          value: '2'
        },
        {
          label: '其他',
          value: '4'
        }
      ]
    }
  },
  methods: {
    open() {
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
