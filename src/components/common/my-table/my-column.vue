/*
 * FileName: my-column.vue
 * Project: yun-industry-chain-vue
 * File Created: Monday, 25th June 2018 9:00:53 am
 * Author: LiuBing
 */

<template>
  <el-table-column header-align="center"
    :align="col.align || columnAlign"
    :prop="col.prop"
    :label="col.label"
    :width="col.width || ''"
    :min-width="col.minWidth || ''"
    :show-overflow-tooltip="showOverflowTooltip"
    :fixed="col.fixed ? col.fixed : false"
    :sortable="col.sortable ? col.sortable : false"
    :sort-method="col.sortMethod ? col.sortMethod : null"
    :filters="col.filters ? col.filters : null"
    :filter-method="col.filterMethod ?this.filterHandler : null">
    <template slot="header"
      slot-scope="scope">
      <my-render v-if="col.headerRender"
        :scope="scope"
        :render="col.headerRender">
      </my-render>
      <template v-else>
        {{ scope.column.label }}
        <div v-if="col.headerEndRender"
          class="header-cell-end">
          <my-render :scope="scope"
            :render="col.headerEndRender">
          </my-render>
        </div>
      </template>
    </template>
    <template slot-scope="scope">
      <my-render v-if="col.render"
        :scope="scope"
        :render="col.render">
      </my-render>
      <template v-else>
        {{ scope.row[col.prop] }}
      </template>
    </template>

    <template v-if="col.children">
      <my-column v-for="(item, index) in col.children"
        :key="index"
        :col="item"
        :column-align="columnAlign"
        :show-overflow-tooltip="showOverflowTooltip"></my-column>
    </template>

  </el-table-column>
</template>

<script>
import MyRender from './my-render'
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
    showOverflowTooltip: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property']
      if (row[property].indexOf(value) > -1) {
        return row[property]
      }
    }
  }
}
</script>
<style scoped>
</style>