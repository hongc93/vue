<template>
  <el-table :data="formatData"
    :row-style="showRow"
    v-bind="$attrs">
    <el-table-column type="selection"
      v-if="selection"></el-table-column>
    <el-table-column v-if="columns.length===0 && elTable"
      width="150">
      <template slot-scope="scope">
        <span v-for="space in scope.row._level"
          :key="space"
          class="ms-tree-space" />
        <span v-if="iconShow(0,scope.row)"
          class="tree-ctrl"
          @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded"
            class="el-icon-plus" />
          <i v-else
            class="el-icon-minus" />
        </span>
        {{ scope.$index }}
      </template>
    </el-table-column>
    <el-table-column v-for="(column, index) in columns"
      v-else-if="elTable"
      :key="index"
      :label="column.label"
      :prop="column.prop"
      :width="column.width">
      <template slot-scope="scope">
        <span v-for="space in scope.row._level"
          v-if="index === 0"
          :key="space"
          class="ms-tree-space" />
        <span v-if="iconShow(index,scope.row)"
          class="tree-ctrl"
          @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded"
            class="el-icon-plus" />
          <i v-else
            class="el-icon-minus" />
        </span>
        {{ scope.row[column.prop] }}
      </template>
    </el-table-column>

    <my-column v-if="!elTable" v-for="(item,index) in columns"
      :col="item"
      :key="index + '-label'"
      :label="item.label"
      :prop="item.prop"
      :width="item.width" 
      :toggleExpanded="toggleExpanded"
      :iconShowColProp="iconShowColProp">
    </my-column>

    <el-table-column fixed="right"
      label="操作"
      prop="operation"
      width="200">
      <template slot-scope="scope">
        <slot name="operation"
          :row="scope.row"
          :index="scope.$index">
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import MyColumn from './my-column'
export default {
  name: 'TreeTable',
  components: {
    MyColumn
  },
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Boolean,
      default: false
    },
    // 是否用render表格
    elTable: {
      type: Boolean,
      default: true
    },
    // 指定表格列的prop显示展开符号
    iconShowColProp:{
      type: String,
      default: null
    }
  },
  computed: {
    // 格式化数据源
    formatData() {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || this._treeToArray
      const args = this.evalArgs ? Array.concat([tmp, this.expandAll], this.evalArgs) : [tmp, this.expandAll]
      return func.apply(null, args)
    }
  },
  methods: {
    showRow(row) {
      const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true)
      row.row._show = show
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;'
    },
    // 切换下级是否展开
    toggleExpanded(trIndex) {
      const record = this.formatData[trIndex]
      record._expanded = !record._expanded
    },
    // 图标显示
    iconShow(index, record) {  
      return (index === 0 && record.children && record.children.length > 0)
    },
    //删除
    delete(index, num) {
      this.formatData.splice(index, num)
    },
    _treeToArray(data, expandAll, parent = null, level = null) {
     
      let tmp = []
      Array.from(data).forEach(record => {
        if (record._expanded === undefined) {
          this.$set(record, '_expanded', expandAll)
        }
        let _level = 1
        if (level !== undefined && level !== null) {
          _level = level + 1
        }
        this.$set(record, '_level', _level)
        // 如果有父元素
        if (parent) {
          this.$set(record, 'parent', parent)
        }
        tmp.push(record)
        if (record.children && record.children.length > 0) {
          const children = this._treeToArray(record.children, expandAll, record, _level)
          tmp = tmp.concat(children)
        }
      })
      return tmp
    }
  }
}
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<style lang="stylus" scoped>
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 18px;
  height: 14px;
  &::before {
    content: '';
  }
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