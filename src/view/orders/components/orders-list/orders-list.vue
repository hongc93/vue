/*
 * Filename: orders-list.vue
 * Remark: 订单列表
 * Project: purchase-sell-stock
 * File Created: 2019-04-02 5:06:31 pm
 * Last Modified: 2019-04-02 5:06:57 pm
 * Author: CC
 */

 <template>
  <el-dialog append-to-body :visible.sync="dialogVisible" title="订单列表" custom-class="orders-list">
    <div class="content">
      <div>
        <div class="success green">
          <i class="icon-duihao"></i>商品已成功加入到购物车！
        </div>
        <div class="shop-info">
          <div class="thum">
            <img :src="product.productThum" :alt="product.productName">
          </div>
          <div>
            <div class="name">{{ product.productName }}</div>
            <div class="count">
              号码：
              <span>{{ product.productSize }}</span>
              单价：
              <span>￥{{ product.productPrice }}元</span>
              数量：
              <span>{{ product.productCount }}包</span>
            </div>
            <div>小计：{{ product.productPrice*product.productCount }} 元</div>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer">
      <el-button type="primary" @click="dialogVisible = !dialogVisible">继续添加产品</el-button>
      <el-button type="primary" @click="settlement">去购物车结算</el-button>
    </div>
  </el-dialog>
</template>
<script>
import "./orders-list.styl";
const MyTable = () => import("@/components/my-table/my-table");
export default {
  components: {
    MyTable
  },
  data() {
    return {
      dialogVisible: false,
      product: {}
    };
  },
  methods: {
    open(name, thum,price, size, count) {
      this.product = {
        productThum: thum,
        productName: name,
        productPrice:price,
        productSize: size,
        productCount: count
      };
      this.dialogVisible = true;
    },
    settlement() {
      this.$router.push({
        name: "SettlementList"
      });
    },
    countChange(val, index) {
      console.log(index);
      if (val == 0) {
        this.$confirm("确定删除该商品吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            console.log(this.shopAry);
            this.shopAry.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    }
  }
};
</script>
