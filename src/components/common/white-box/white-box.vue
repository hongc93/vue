/*
 * Author: CC
 * Introduction: white-box.vue
 * File Created: 2019-03-06 3:04:14 pm
 * Last Modified By: CC
 * Last Modified: 2019-03-06 3:04:47 pm
 */
<template>
  <div class="white-box"
    :class="cls"
    :style="{width:width,float:float,'border-width':border?'1px':0}">
    <div class="box-content"
      :class="{'box-shadow':shadow}"
      :style="{'border-radius':borderRadius}">
      <div class="box-title"
        v-if="title">
        <div class="title"
          :class="{'no-border-title':titleIcon}"
          v-if="title !== true">
          <slot name="title">
            <i v-if="titleIcon"
              class="title-icon"
              :class="titleIcon"></i>
            {{ title }}
          </slot>
        </div>
        <div class="left">
          <slot name="title-left"></slot>
        </div>
        <div class="center">
          <slot name="title-center"></slot>
        </div>
        <div class="right">
          <slot name="title-right"></slot>
        </div>
      </div>
      <div class="content-main"
        :style="{padding:padding}">
        <div class="content-top">
          <slot name="content-top"></slot>
        </div>
        <div class="content"
          :style="{height: height}">
          <slot name="content"></slot>
        </div>
        <div class="content-bottom">
          <slot name="content-bottom"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhiteBox",
  props: {
    title: {
      type: [String, Boolean]
    },
    titleIcon: {
      type: String
    },
    padding: {
      type: String,
      default: '20px'
    },
    height: {
      type: String,
      default: 'auto'
    },
    float: {
      type: String,
      default: 'left'
    },
    cls: {
      type: String
    },
    shadow: {
      type: Boolean,
      default: false
    },
    borderRadius: {
      type: [String, Number],
      default: 0
    },
    width: {
      type: String,
      width: '50%'
    },
    border: {
      type: Boolean,
      default: false
    }
  }
}
</script>


