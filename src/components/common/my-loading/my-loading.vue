/*
 * Filename: my-loading.vue
 * Remark: loading加载
 * Project: purchase-sell-stock
 * File Created: 2019-05-15 5:42:47 pm
 * Last Modified: 2019-05-15 5:42:50 pm
 * Author: CC
 */
<template>
  <div class="my-loading"
    v-loading="myLoading"
    :element-loading-text="loadingText"
    :element-loading-spinner="loadingSpinner"
    :element-loading-background="loadingBackground">
    <slot></slot>
    <div class="el-loading-mask"
      v-if="myError">
      <div class="el-loading-spinner">
        <div class="el-loading-text">
          <el-button type="text"
            size="small"
            @click="handleRetry"> 数据加载失败，请重试！</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    loading:{
      type:Boolean,
      default: true 
    },
    error:{
      type: Boolean,
      default:false 
    },
    // 显示在加载图标下方的加载文案
    loadingText:{
      type:String,
      default:'正在加载中'
    },
    // 自定义加载图标的类名
    loadingSpinner:{
      type:String 
    },
    loadingBackground:{
      type:String 
    },
    retry:{
      type: Function 
    }
  },
  data(){
    return{
      myLoading:this.loading,
      myError:this.error
    }
  },
  methods: {
    handleRetry(){
      this.$emit('retry')
    }
  },
  watch:{
    loading(newVal){
      this.myLoading = newVal 
    },
    error(newVal){
      this.myError = newVal
    }
  }
}
</script>

<style lang="stylus">
.my-loading.el-loading-parent--relative
  height: 100%
</style>
