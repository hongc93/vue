/*
 * FileName: 滚动条美化
 * File Created: Friday, 14th September 2018 2:56:30 pm
 * Doc: https://kingsora.github.io/OverlayScrollbars/#!documentation/options
 * Author: LiuBing
 */
<template>
  <div class="scroll-bar"
    :id="scrollBarId"
    style="height: 100%">
    <slot></slot>
  </div>
</template>

<script>
import OverlayScrollbars from 'overlayscrollbars'
import 'overlayscrollbars/css/OverlayScrollbars.min.css'
export default {
  name: 'ScrollBar',
  props: {
    //Dom Id,可省略
    id: {
      type: String
    },
    //滚动条主体，os-theme-dark：适用于白色背景，os-theme-light：适用于暗色背景
    theme: {
      type: String,
      default: 'os-theme-dark'
    },
    //插件初始化完成后调用，无参数
    onInitialized: {
      type: Function
    },
    //插件销毁后调用，无参数
    onDestroyed: {
      type: Function
    },
    //开始滚动后触发，参数scroll
    onScrollStart: {
      type: Function
    },
    //每次滚动都会被触发，参数scroll
    onScroll: {
      type: Function
    },
    //停止滚动后触发，参数scroll
    onScrollStop: {
      type: Function
    },
    //溢出更改后触发，如内容变小，参数scroll
    onOverflowChanged: {
      type: Function
    },
    //溢出更改后触发，如内容变大，参数scroll
    onOverflowAmountChanged: {
      type: Function
    },
    //方向改变后被触发，参数scroll
    onDirectionChanged: {
      type: Function
    },
    //内容大小更改后触发，参数scroll
    onContentSizeChanged: {
      type: Function
    }
  },
  data() {
    return {
      scrollBar: null,
      scrollBarId: this.id ? this.id : 'scroll-bar-' + Date.now() + Math.random()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScrollBar()
    })
  },
  methods: {
    initScrollBar() {
      this.scrollBar = OverlayScrollbars(document.getElementById(this.scrollBarId), {
        className: this.theme,
        scrollbars: {
          autoHide: 'leave'
        },
        callbacks: {
          onInitialized: this.onInitialized,
          onDestroyed: this.onDestroyed,
          onScrollStart: this.onScrollStart,
          onScroll: this.onScroll,
          onScrollStop: this.onScrollStop,
          onOverflowChanged: this.onOverflowChanged,
          onOverflowAmountChanged: this.onOverflowAmountChanged,
          onDirectionChanged: this.onDirectionChanged,
          onContentSizeChanged: this.onContentSizeChanged
        }
      })
    },
    update() {
      this.scrollBar.update()
    }
  }
}

</script>
<style lang='stylus' scoped>
</style>