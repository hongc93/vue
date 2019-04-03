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
      <!-- <my-table :col="tableCol"
        :data="shopAry"></my-table> -->
      <div v-if="shopAry.lenth == 0">请先选择需要购买的产品！</div>
      <div v-else>
        <div >
        <span>商品名称</span>
        <span>数量</span>
        <span>小计</span>
      </div>
      <div v-for="(item,index) in shopAry"
        :key="index">
        <div class="shop-thum"><img src=""></div>
        <div class="shop-name">
          <div>{{item.productName}}</div>
          <div>号码：<span>{{item.productSize}}</span></div>
        </div>
        <div class="shop-count">
          <el-input-number v-model="item.productCount"
            @change="countChange(item.productCount,index)"></el-input-number>
        </div>
      </div>
      </div>
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
const MyTable = () => import('@/components/my-table/my-table')
export default {
  components: {
    MyTable
  },
  data() {
    return {
      dialogVisible: false,
      tableCol: [
        {
          label: '商品名称',
          prop: 'productName'
        },
        {
          label: '数量',
          prop: 'productCount',
          render: (h, params) => {
            const changeCount = () => {
              console.log(params.row.productCount);
            }
            let temp = params.row.productCount
            return (
              <div>
                <el-input-number v-model={temp} onChange={changeCount}></el-input-number>
              </div>
            )
          }
        },
        {
          label: '小计',
          prop: 'subtotal'
        }
      ],
      shopAry: [],

    }
  },
  methods: {
    open(name, size, count) {
      this.shopAry.push({
        productName: name,
        productSize: size,
        productCount: count,
        count: 0
      })

      this.dialogVisible = true
    },
    countChange(val, index) {
      console.log(index);
      if (val == 0) {
        this.$confirm('确定删除该商品吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(this.shopAry);
          this.shopAry.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
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
  },
  watch: {
    shopAry(newVal,oldVal){
      this.shopAry = newVal
    }
  },
}
</script>
