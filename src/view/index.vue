<!--
 * @Description: 
 * @Author: ChenHong
 * @Date: 2019-06-18 14:44:48
 * @LastEditTime : 2020-01-06 08:04:23
 * @LastEditors  : ChenHong
 -->
/*
 * Author: CC
 * Introduction: index.vue
 * File Created: 2019-02-21 11:14:39 am
 * Last Modified By: CC
 * Last Modified: 2019-02-21 11:14:47 am
 */
<template>
  <el-container class="index-page">
    <el-header>
      <top-head></top-head>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <scroll-bar>
          <left-nav></left-nav>
        </scroll-bar>
      </el-aside>
      <el-main>
        <div class="main-content">
          <!-- <scroll-bar ref="scrollBar"> -->
          <div style="height: 100%">
            <router-view></router-view>
          </div>
          <!-- </scroll-bar> -->
        </div>
      </el-main>
    </el-container>
    <!-- <back-to-top></back-to-top> -->
  </el-container>
</template>

<script>
const TopHead =() => import("@/components/common/top-head/top-head")
const LeftNav = () => import("@/components/common/left-nav/left-nav");
const BackToTop = () => import("@/components/common/back-to-top/back-to-top");
const ScrollBar = () => import("@/components/common/scroll-bar/scroll-bar");
import { findIndex } from "lodash/array";
export default {
  components: {
    TopHead,
    LeftNav,
    BackToTop,
    ScrollBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
header 
  background: #333
.index-page 
  position: absolute;
  padding: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
.aside 
  background: #545c64
  border-right: solid 1px #e6e6e6
  box-sizing: border-box
</style>
