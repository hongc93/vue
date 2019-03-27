/*
 * Filename: add-tryout-dialog.vue
 * Remark: 邮寄试用装列表
 * Project: purchase-sell-stock
 * File Created: 2019-03-27 2:47:23 pm
 * Last Modified: 2019-03-27 2:47:25 pm
 * Author: CC
 */
 <template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="添加试用装邮寄名单">
    <div class="content">
      <el-form :model="addForm"
        :rules="addRules"
        ref="addForm"
        label-width="120px">
        <el-form-item label="姓名"
          prop="name">
          <el-input placeholder="请输入姓名"
            v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="发货日期"
          prop="sendDate">
          <el-date-picker type="date"
            placeholder="请选择发货日期"
            v-model="addForm.sendDate"></el-date-picker>
        </el-form-item>
        <el-form-item label="手机号"
          prop="mobile">
          <el-input placeholder="请输入手机号"
            v-model="addForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="微信"
          prop="wechat">
          <el-input placeholder="请输入微信"
            v-model="addForm.wechat"></el-input>
        </el-form-item>
        <el-form-item label="地址"
          prop="address">
          <el-input placeholder="请输入地址"
            v-model="addForm.address"></el-input>
        </el-form-item>
        <el-form-item label="货品"
          prop="product">
          <el-input placeholder="请输入货品"
            v-model="addForm.product"></el-input>
        </el-form-item>
        <el-form-item label="宝出生日期"
          prop="birthday">
          <el-date-picker type="date"
            placeholder="请选择宝出生日期"
            v-model="addForm.birthday"></el-date-picker>
        </el-form-item>
        <el-form-item label="宝性别"
          prop="birthday">
          <el-radio-group v-model="addForm.sex">
            <el-radio :label="1">女</el-radio>
            <el-radio :label="2">男</el-radio>
            <el-radio :label="3">未知</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="认识途径"
          prop="knowWay">
          <el-select v-model="addForm.knowWay">
            <el-option v-for="item in knowWayOptions"
              :key="item.value"
              :value="item.value"
              :label="item.label"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer">
      <el-button type="primary"
        plain
        @click="handleCancel">取消</el-button>
      <el-button type="primary"
        plain
        @click="handleReset">重置</el-button>
      <el-button type="primary"
        @click="addTryouter">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      addForm: {
        name: '',
        sendDate: '',
        mobile: '',
        wechat: '',
        address: '',
        birthday: '',
        sex: 3,
        knowWay: '',
      },
      addRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度为3到8个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
        wechat: [
          { required: true, message: '请输入微信', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        product: [
          { required: true, message: '请输入货品', trigger: 'blur' }
        ]
      },
      knowWayOptions: [
        {
          label: '群聊',
          value: '0'
        },
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
    handleCancel() {
      this.dialogVisible = !this.dialogVisible
      this.$refs.addForm.resetFields()
    },
    handleReset() {
      this.$refs.addForm.resetFields()
    },
    addTryouter() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.$message(
            {
              type: 'success',
              message:'添加成功'
            }
          )
        } else {
          this.$message.error('请输入正确的信息')
        }
      })
    },
  }
}
</script>