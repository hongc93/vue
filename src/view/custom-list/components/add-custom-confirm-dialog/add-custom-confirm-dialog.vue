/*
 * Filename: add-buyer-confirm-dialog.vue
 * Remark: 确认添加联系人弹框
 * Project: purchase-sell-stock
 * File Created: 2019-03-27 9:55:57 am
 * Last Modified: 2019-03-27 9:58:09 am
 * Author: CC
 */
<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    title="确认添加"
    custom-class="add-buyer-confirm">
    <div class="content">
      <my-table :col="tableData.col"
        :data="tableData.data"
        :show-header="false"
        border></my-table>
    </div>
    <div slot="footer">
      <el-button type="primary"
        plain>修改</el-button>
      <el-button type="primary"
        plain
        @click="dialogVisible = !dialogVisible">取消</el-button>
      <el-button type="primary"
        @click="addBuyerConfirm">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
const MyTable = () => import('@/components/my-table/my-table')
export default {
  components: {
    MyTable
  },
  props: {
    parentVisible: {
      type: Boolean
    }
  },
  data() {
    return {
      dialogVisible: false,
      formData: {},
      tableData: {
        col: [
          {
            label: 'colName',
            prop: 'colName',
            width: '120px',
            align: 'right'
          },
          {
            label: 'colValue',
            prop: 'colValue',
            align: 'left'
          },
        ],
        data: [

        ]
      }
    }
  },
  methods: {
    open(formData) {
      this.formData = formData
      this.dialogVisible = true
      let tempAry = []
      for (let item in this.formData) {
        if (item === 'name') {
          tempAry.push({
            colName: '姓名',
            colValue: this.formData.name
          })
        } else if (item === 'mobile' && this.formData.mobile) {
          tempAry.push({
            colName: '手机',
            colValue: this.formData.mobile
          })
        } else if (item === 'wechat') {
          tempAry.push({
            colName: '微信',
            colValue: this.formData.wechat
          })
        } else if (item === 'qq' && this.formData.qq) {
          tempAry.push({
            colName: 'QQ',
            colValue: this.formData.qq
          })
        } else if (item === 'address' && this.formData.address) {
          tempAry.push({
            colName: '地址',
            colValue: this.formData.address
          })
        } else if (item === 'birthday' && this.formData.birthday) {
          tempAry.push({
            colName: '出生日期',
            colValue: this.formData.birthday
          })
        } else if (item === 'sex' && this.formData.sex) {
          let sexTxt = ''
          switch (this.formData.sex) {
            case 1:
              sexTxt = '女'
              break;
            case 2:
              sexTxt = '男'
              break;
            default:
              sexTxt = '未知'
              break;
          }
          tempAry.push({
            colName: '宝宝性别',
            colValue: sexTxt
          })
        } else if (item === 'knowWay' && this.formData.knowWay) {
          tempAry.push({
            colName: '认识途径',
            colValue: this.formData.knowWay
          })
        } else if (item === 'remarks' && this.formData.remarks) {
          tempAry.push({
            colName: '备注',
            colValue: this.formData.remarks
          })
        }
      }
      this.tableData.data = tempAry
    },
    addBuyerConfirm() {
      this.dialogVisible = false
      this.$emit('addSuccess', false);
    }
  }
}
</script>