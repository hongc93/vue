/*
 * Author: CC
 * Introduction: 回到顶部
 * File Created: 2019-03-06 11:42:14 am
 * Last Modified By: CC
 * Last Modified: 2019-03-06 11:42:17 am
 */
<template>
  <div class="back-to-top">
    <transition :name="transitionName">
      <div class="back-to-ceiling"
        @click="backToTop"
        v-show="visible"
        :style="customStyle">
        <i class="el-icon-caret-top back-up-icon"></i>
      </div>
    </transition>
  </div>
</template>

<script>
import './back-to-top.styl'
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
          bottom: '50px',
          width: '40px',
          height: '40px',
          borderRadius: '4px',
          lineHeight: '45px',
          boxShadow: '0px 0px 10px 1px #CCC',
          background: '#fff',
          opacity: .5
        }
      },
      transitionName: {
        type: String,
        default: 'fade'
      }
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
      const start = window.pageXOffset
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
  }
}
</script>

