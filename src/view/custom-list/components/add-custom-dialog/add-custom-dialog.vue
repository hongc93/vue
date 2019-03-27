 /*
 * Filename: add-custom-dialog.vue
 * Remark: 添加买家联系人
 * Project: purchase-sell-stock
 * File Created: 2019-03-26 4:08:52 pm
 * Last Modified: 2019-03-26 4:26:37 pm
 * Author: CC
 */

 <template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    :title="type?'编辑':'添加买家'"
    custom-class="add-custom">
    <div class="content">
      <el-form :model="addCustomForm"
        :rules="addCustomRules"
        ref="addCustomForm"
        label-width="120px">
        <el-form-item label="姓名"
          prop="name">
          <el-input placeholder="请输入姓名"
            v-model="addCustomForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号"
          prop="mobile">
          <el-input placeholder="请输入手机号"
            v-model="addCustomForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="微信"
          prop="wechat">
          <el-input placeholder="请输入微信"
            v-model="addCustomForm.wechat"></el-input>
        </el-form-item>
        <el-form-item label="QQ"
          prop="qq">
          <el-input placeholder="请输入qq"
            v-model="addCustomForm.qq"></el-input>
        </el-form-item>
        <el-form-item label="地址"
          prop="address">
          <el-input placeholder="请输入地址"
            v-model="addCustomForm.address"></el-input>
        </el-form-item>
        <el-form-item label="宝出生日期"
          prop="birthday">
          <el-date-picker type="date"
            placeholder="请选择宝出生日期"
            v-model="addCustomForm.birthday"></el-date-picker>
        </el-form-item>
        <el-form-item label="宝性别"
          prop="birthday">
          <el-radio-group v-model="addCustomForm.sex">
            <el-radio :label="1">女</el-radio>
            <el-radio :label="2">男</el-radio>
            <el-radio :label="3">未知</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="认识途径"
          prop="knowWay">
          <el-select v-model="addCustomForm.knowWay">
            <el-option v-for="item in knowWayOptions"
              :key="item.value"
              :value="item.value"
              :label="item.label"></el-option>
          </el-select>
          <el-input style="width: auto;"
            v-model="addCustomForm.remarks"
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
    <add-custom-confirm ref="addCustomConfirm"
      :parent-visible="dialogVisible"
      @addSuccess="addSuccess"></add-custom-confirm>
  </el-dialog>
</template>
<script>
import AddCustomConfirm from '../add-custom-confirm-dialog/add-custom-confirm-dialog'
export default {
  name: 'AddCustom',
  components: {
    AddCustomConfirm
  },
  data() {
    return {
      type: true,
      dialogVisible: false,
      addCustomForm: {
        name: '',
        mobile: '',
        wechat: '',
        qq: '',
        address: '',
        birthday: '',
        sex: 3,
        knowWay: '',
        remarks: ''
      },
      addCustomRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度为3到8个字符', trigger: 'blur' }
        ],
        wechat: [
          { required: true, message: '请输入微信', trigger: 'blur' }
        ]
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
    open(row) {
      if (row) {
        this.type = true
      }
      this.addCustomForm = Object.assign({}, this.addCustomForm, row)
      this.dialogVisible = true
    },
    openDialog(dialogName, formData) {
      this.$refs[dialogName].open(formData)
    },
    submitForm() {
      this.$refs.addCustomForm.validate((valid) => {
        if (valid) {
          this.openDialog('addCustomConfirm', this.addCustomForm)
        } else {
          alert('请输入正确的信息')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.addCustomForm.resetFields()
    },
    addSuccess() {
      this.dialogVisible = false
    }
  }
}
</script>
