/*
 * Filename: settlement-type.vue
 * Remark: 结算方式
 * Project: purchase-sell-stock
 * File Created: 2019-04-28 2:32:11 pm
 * Last Modified: 2019-04-28 2:32:13 pm
 * Author: CC
 */
 <template>
  <div class="settlement-type">
    <div class="settlement-con">
      <div class="settlement-tit">请选择结算方式：</div>
      <div class="settlement-list">
        <div><img src="@/assets/img/chat.jpg"
            alt="">
          <el-radio v-model="settlementType"
            label="WeChat"
            border>微信</el-radio>
        </div>
        <div><img src="@/assets/img/alipay.jpg"
            alt="">
          <el-radio v-model="settlementType"
            label="alipay"
            border>支付宝</el-radio>
        </div>
        <div><img src=""
            alt="">
          <el-radio v-model="settlementType"
            label="cash"
            border>现金</el-radio>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
export default {
  components: {

  },
  data() {
    return {
      settlementType: 'WeChat'
    }
  },
}
 </script>
 
 <style lang="stylus" scoped>
 .settlement-type
   
   .settlement-con
     border: 1px solid #ddd
     width: 600px
     position: absolute
     top: 50%
     left: 50%
     transform: translate(-50%, -50%)
     padding 30px
    .settlement-tit
      font-size:  16px
   .settlement-list
     display: flex
     align-items: center
     justify-content: space-around
     img
       max-width: 200px
</style>
 
