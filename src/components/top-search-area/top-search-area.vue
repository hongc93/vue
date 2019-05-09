/*
 * Filename: top-search-area.vue
 * Remark: 搜索
 * Project: purchase-sell-stock
 * File Created: 2019-05-08 6:12:39 pm
 * Last Modified: 2019-05-08 6:12:46 pm
 * Author: CC
 */
 <template>
  <div class="top-search-area">
    <div class="search-con">
      <el-form :model="searchQuery"
        :label-width="labelWidth"
        :inline="inline"
        :label-position="labelPosition"
        class="search-item">
        <div :class="['search-area']">
          <slot name="search-top"></slot>
          <template v-for="(item,index) in sliceSelect.normal">
            <el-form-item key="index"
              :label="item.label+'：'">
              <div class="item-select">
                <template v-if="!$slots[item.name]">
                  <span v-for="(d,i) in item.data || []"
                    :key="i"
                    :class="['select-span',{'active':setActive(item,d.value)}]"
                    @click="handleClick(item,d.value)">
                    {{d.label}}
                  </span>  
                  <span class="defined"
                    v-if="item.defined"
                    @click="handleDefined(item.name)"><i class="el-icon-plus"></i>自定义</span>
                  <div class="search-item-right"><slot :name="`${item.name}-right`"></slot></div>
                </template>
                <slot :name="item.name"></slot>
              </div>
            </el-form-item>
          </template>

          <el-collapse-transition>
            <div class="toggle-area"
              v-show="toggle">
              <template v-for="(item, index) in sliceSelect.toggle">
                <el-form-item :key="index"
                  :label="item.label +'：'">
                  <div class="item-select">
                    <template v-if="!$slots[item.name]">
                      <span v-for="(d,i) in item.data || []"
                        :key="i"
                        :class="['select-span',{'active':setActive(item,d.value)}]"
                        @click="handleClick(item,d.value)">{{d.label}}</span>
                      <span class="defined"
                        v-if="item.defined"
                        @click="handleDefined(item.name)"><i class="el-icon-plus"></i>自定义</span>
                      <div class="search-item-right"><slot :name="`${item.name}-right`"></slot></div>
                    </template>
                    <slot :name="item.name"></slot>
                  </div>
                </el-form-item>
              </template>
            </div>
          </el-collapse-transition>
        </div>
        <div class="selected-filter"
          v-if="allSearchData.length">
          <span>已选择条件：</span>
          <el-tag v-for="(tag,index) in allSearchData"
            :key="index">
            <span>{{tag.label}}:</span>
            <span>{{tag.value.map(v=>v.label).join('、')}}</span>
          </el-tag>
        </div>

        <slot name="search-item-bottom"></slot>
        <el-form-item class="search-btn-item">
          <el-button type="primary"
            size="mini"
            @click="handleSearch">搜索</el-button>
          <el-button type="primary"
            plain
            size="mini"
            @click="handleSearch">重置</el-button>
        </el-form-item>
      </el-form>
      <span v-if="hasToggle"
        class="toggle-show"
        @click="handleToggle">{{ toggleText }}</span>
    </div>

  </div>
</template>
 
 <script>
import './top-search-area.styl'
export default {
  components: {
  },
  props: {
    labelWidth: {
      type: String,
      default: '80px'
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    // toggle: {
    //   type: Boolean,
    //   default: true
    // },
    hasToggle: {
      type: Boolean,
      default: true
    },
    //展开收起的index
    toggleIndex: {
      type: [Number, String],
      default: 0
    },
    searchSelect: {
      type: Array
    },
    searchData: {
      type: Object
    },
    multiple: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      toggle: true,
      searchQuery: this.searchData,
      sliceSelect: {},
      defaultSearch: JSON.parse(JSON.stringify(this.searchData)),
      allSearchData: []
    }
  },
  computed: {
    toggleText() {
      return this.toggle ? '收起' : '展开'
    }
  },
  created() {
    this.sliceSearchSelect()
  },
  methods: {
    sliceSearchSelect() {
      const normal = this.searchSelect.slice(0, +this.toggleIndex + 1)
      const toggle = this.searchSelect.slice(+this.toggleIndex + 1)
      this.sliceSelect = {
        normal,
        toggle
      }
    },
    handleSearch() {
      this.$emit('search', this.searchQuery)
    },
    handleClick(item, value) {
      const name = item.name
      if (this.multiple) {
        const i = _.findIndex(this.searchQuery[name], item => item === value)
        if (i > -1) {
          this.searchQuery[name].splice(i, 1)
        } else if (value === '') {
          this.searchQuery[name] = []
        } else {
          this.searchQuery[name].push(value)
        }
      } else {
        this.$set(this.searchQuery, name, value)
      }
      if (!this.multiple) {
        this.$emit('search', this.searchQuery)
      }
      this.$emit('search-item-click', item, value)
    },
    handleReset() {
      this.searchQuery = this.defaultSearch
    },
    handleToggle() {
      this.toggle = !this.toggle
    },
    handleDefined(name) {
      this.$emit('fatherDefined', name)
    },
    setActive(item, value) {
      const name = item.name
      const query = this.searchQuery[name]
      if (this.multiple) {
        if (value === '' && query.length === 0) {
          return true
        } else {
          const i = _.findIndex(query, item => item === value)
          return i > -1 ? true : false
        }
      } else {
        return query === value
      }
    }
  },
  watch: {
    searchData(newVal) {
      this.searchQuery = newVal
    }
  }
}
 </script>
 

 
