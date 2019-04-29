/*
 * Author: CC
 * Introduction: index.vue
 * File Created: 2019-02-21 11:14:39 am
 * Last Modified By: CC
 * Last Modified: 2019-02-21 11:14:47 am
 */
<template>
  <el-container class="index-page">
    <el-header>Header</el-header>
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
const LeftNav = () => import("@/components/left-nav/left-nav");
const BackToTop = () => import("@/components/back-to-top/back-to-top");
const ScrollBar = () => import("@/components/scroll-bar/scroll-bar");
import { findIndex } from "lodash/array";
export default {
  components: {
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
