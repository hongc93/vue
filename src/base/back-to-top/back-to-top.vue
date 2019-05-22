/*
 * Filename: back-to-top.vue
 * Remark: 返回顶部
 * Project: purchase-sell-stock
 * File Created: 2019-05-22 3:09:15 pm
 * Last Modified: 2019-05-22 3:09:18 pm
 * Author: CC
 */
<template>
  <transition :name="transitionName">
    <div class="back-to-ceiling"
      @click="backToTop"
      v-show="visible"
      :style="customStyle">
      <i class="el-icon-caret-top back-up-icon"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default: () => {
        return {
          right: '50px',
          bottom: '40px',
          width: '40px',
          height: '40px',
          'border-radius': '4px',
          'line-height': '45px',
          'box-shadow': '0px 0px 10px 1px #CCC',
          background: '#FFF',
          opacity: .5
        }
      }
    },
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
  data() {
    return {
      visible: false,
      interval: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight
    },
    backToTop() {
      const start = window.pageYOffset
      let i = 0
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
        if (next <= this.backPosition) {
          window.scrollTo(0, this.backPosition)
          clearInterval(this.interval)
        } else {
          window.scrollTo(0, next)
        }
        i++
      }, 16.7);
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * (--t * (t - 2) - 1) + b
    }
  },
}
</script>

<style lang="stylus" scoped></style>
