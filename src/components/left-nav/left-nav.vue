/*
 * Author: CC
 * Introduction: 左侧导航
 * File Created: 2019-03-04 1:51:38 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 10:51:19 am
 */
 <template>
  <div class="left-nav">
    <el-menu
      :default-active="activeIndex()"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="(item,index) in menuData"
        :key="index"
        :index="String(index)"
        @click="handleLinkTo(item.name)"
      >
        <i :class="[item.icon]"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
 
 <script>
import "./left-nav.styl";
import { getMenu } from "@/assets/js/menu.js";
export default {
  components: {},
  data() {
    return {
      active: "",
      mode: "horizontal",
      menuData: getMenu()
    };
  },
  methods: {
    handleLinkTo(routeName) {
      console.log(this.$route.name);
      this.$router.push({
        name: routeName
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    activeIndex() {
      for (let i = 0; i < this.menuData.length; i++) {
        if (this.menuData[i].name === this.$route.name) {
          return String(i);
        }
      }
    }
  }
};
</script>
 
<style lang="stylus"></style>
 
