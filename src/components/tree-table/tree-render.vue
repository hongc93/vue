/*
 * FileName: 用于render自定义
 * Project: yun-industry-chain-vue
 * File Created: Thursday, 16th August 2018 2:01:31 pm
 * Author: LiuBing
 */
<script>
export default {
  name: 'Custom',
  functional: true,
  props: {
    row: {
      type: Object
    },
    render: {
      type: Function
    },
    index: {
      type: Number
    },
    column: {
      type: Object,
      default: null,
    },
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      index: ctx.props.index,
    }
    if (ctx.props.column) params.column = ctx.props.column
    return ctx.props.render(h, params)
  },
}

</script>