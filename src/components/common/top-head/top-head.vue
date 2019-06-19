<!--
 * @Description: 头部
 * @Author: ChenHong
 * @Date: 2019-06-19 16:54:32
 * @LastEditTime : 2020-01-06 08:15:22
 * @LastEditors  : ChenHong
 -->

<template>
  <div class="top-head">
    <el-col :gutter="20">
      <el-col :span="6">
        <div class="grid-content"><img :src="logoImg" /></div>
      </el-col>
      <el-col :span="18" >
        <div class="grid-content sys-name">{{systemName}}</div>
      </el-col>
    </el-col>
  </div>
</template>
<script>
export default {
  data(){
    return{
      systemName:'凯儿得乐进销存',
      logoImg: require('../../../assets/img/logo.png')
    }
  }
};
</script>
<style lang='stylus' scoped>
.sys-name
  color white
  line-height 60px
  font-size 24px
  text-align center
</style>