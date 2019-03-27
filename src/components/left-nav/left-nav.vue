/*
 * Author: CC
 * Introduction: 左侧导航
 * File Created: 2019-03-04 1:51:38 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 10:51:19 am
 */
 <template>
  <div class="left-nav">
    <el-menu :default-active="active"
      :mode="mode">
 
        <router-link  v-for="(item,index) in menuData" :key="index" :to="item.path">
          <el-menu-item index="index">
            <i :class="[item.icon]"></i>
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
        </router-link>

    </el-menu>
    <!-- <ul>
      <li v-for="(item,index) in leftNavs"
        :key="index"
        @click.nactive="handleLinkTo(item.href)" :class="{'active':item.active}">
        <i :class="item.icon"></i>
        <div>{{item.label}}</div>
      </li>
    </ul> -->
  </div>
</template>
 
 <script>
import './left-nav.styl'
import { getMenu } from '@/assets/js/menu.js'
export default {
  components: {

  },
  data() {
    return {
      active: '',
      mode: 'horizontal',
      menuData: getMenu(),
    }
  },
  methods: {
    handleLinkTo(routeName) {
      console.log(this.$route.name);
      this.$router.push({
        name: routeName
      })
      // for (let i = 0; i < this.leftNavs.length; i++) {
      //   this.leftNavs[i].active = false
      // }
      // const nIndex = _.findIndex(this.leftNavs, item => item.href == this.$route.name)
      // this.leftNavs[nIndex].active = true
    }
  }
}
</script>
 
 <style lang="stylus" scoped>
</style>
 
