/*
 * FileName: my-column.vue
 * Project: yun-industry-chain-vue
 * File Created: Monday, 25th June 2018 9:00:53 am
 * Author: LiuBing
 */

<template>
  <el-table-column :align="col.align || columnAlign"
    :prop="col.prop"
    :label="col.label"
    :width="col.width || ''"
    :min-width="col.minWidth || ''"
    :fixed="col.fixed ? col.fixed : false"
    :sortable="col.sortable ? col.sortable : false"
    :sort-method="col.sortMethod ? col.sortMethod : null">
    <template slot-scope="scope">
      <my-render v-if="col.render"
        :render="col.render"
        :row="scope.row"
        :index="scope.$index"
        :item="col">{{col.render}}
      </my-render>
      <template v-else>
        <span v-for="space in scope.row._level"
          :key="space"
          v-if="col.prop==iconShowColProp"
          class="ms-tree-space" />
        <span class="tree-ctrl"
          v-if="iconShow(scope.row)&&col.prop==iconShowColProp"
          @click="childToggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded"
            class="el-icon-plus"></i>
          <i v-else
            class="el-icon-minus" />
        </span>
        {{ scope.row[col.prop]}}
      </template>
    </template>

    <template v-if="col.children">
      <my-column v-for="(item, index) in col.children"
        :key="index"
        :col="item"
        :column-align="columnAlign"></my-column>
    </template>

  </el-table-column>
</template>

<script>
import MyRender from './tree-render'
export default {
  name: 'MyColumn',
  components: {
    MyRender
  },
  props: {
    col: {
      type: Object
    },
    columnAlign: {
      type: String
    },
    toggleExpanded: {
      type: Function,
      default: null
    },
    iconShowColProp: {
      type: String,
      default: null
    }
  },

  methods: {
    // 切换下级是否展开
    childToggleExpanded(res) {
      if (this.toggleExpanded) {
        this.toggleExpanded(res)
      }
    },

    iconShow(res) {
      return (res.children && res.children.length > 0)
    },
  }
}
</script>
<style scoped>
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 10px;
  height: 14px;
}
.ms-tree-space::before {
  content: "";
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}
.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: #2196f3;
  margin-left: -18px;
}
</style>