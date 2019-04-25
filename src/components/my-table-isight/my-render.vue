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
    scope: {
      type: Object
    },
    render: {
      type: Function
    },
    headerAlign: {
      type: String,
      default: 'center'
    },
  },
  render: (h, ctx) => {
    return ctx.props.render(h, ctx.props.scope)
  },
}

</script>