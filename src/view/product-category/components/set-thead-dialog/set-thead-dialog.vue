/*
 * Filename: set-thead-dialog.vue
 * Remark: 设置表头
 * Project: purchase-sell-stock
 * File Created: 2019-03-28 5:52:29 pm
 * Last Modified: 2019-03-28 5:52:31 pm
 * Author: CC
 */
<template>
  <el-dialog append-to-body
    :visible.sync="dialogVisible"
    custom-class="set-thead"
    title="设置表头">
    <div class="content">
      <el-transfer :titles="['显示字段','隐藏字段']"
        v-model="selectedCol"
        :data="colOption"
        :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
        }"
        target-order="original"
        @right-check-change="rightCheckChange"
        class="height-fixed">
        <!-- <div slot="right-footer"
          class="foot-btn">
          <el-button type="primary"
            @click="removeUp"
            size="mini">上移<i class="el-icon-arrow-up el-icon--right"></i></el-button>
          <el-button type="primary"
            @click="removeDown"
            size="mini">下移<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        </div> -->
      </el-transfer>
    </div>

    <div slot="footer">
      <el-button type="primary"
        plain
        @click="dialogVisible = !dialogVisible">取消</el-button>
      <el-button type="primary" @click="setCol">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {

  data() {
    return {
      dialogVisible: false,
      multiple: [],
      rightVal: [],
      selectedCol: [],
      rightSelect: [],
      childTest: [],
    }
  },
  props: {
    value: {
      type: Array
    },
    colOption: {
      type: Array,
      default: []
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    setCol() {
      this.dialogVisible = false
      this.$emit('input', this.selectedCol)
    },
    // 上移  待完善
    removeUp() {
      console.log('上移');
    },
    // 下移
    removeDown() {
      console.log('下移');
    },
    rightCheckChange(val) {
      this.rightSelect = val
    },

  },
  watch: {
    value(newVal) {
      this.selectedCol = newVal
    }
  }
}
</script>