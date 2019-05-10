/*
 * Filename: member-select.vue
 * Remark: 会员选择
 * Project: purchase-sell-stock
 * File Created: 2019-05-10 10:52:02 am
 * Last Modified: 2019-05-10 10:52:04 am
 * Author: CC
 */
<template>
  <el-popover v-model="visible"
    popper-class="member-select"
    trigger="click"
    placement="bottom"
    width="700">
    <div class="popover-content">
      <div class="left">
        <div class="top">
          <el-input class="top-search"
            v-model="searchWord"
            prefix-icon="el-icon-search"
            placeholder="搜索"></el-input>
        </div>
        <div class="tabs">
          <el-tabs v-model="activeName"
            type="card">
            <el-tab-pane label="常用"
              name="common">
              <div class="tab-pane">常用</div>
            </el-tab-pane>
            <el-tab-pane name="staff"
              label="会员">
              <div class="tab-pane">
                <el-checkbox-group v-model="tabData.staffSelect" :max="1">
                  <ul class="staff-list">
                    <li v-for="(staff, index) in tabData.staff"
                      :key="index">
                      <div class="letter">{{ staff.letter }}</div>
                      <ul class="member-list">
                        <li v-for="(item,i) in staff.data"
                          :key="i">
                          <el-checkbox :label="item.value">
                            <div class="avatar">
                              <my-icon icon="icon-avatar"
                                size="30px"
                                color="#CCCCCC"></my-icon>
                            </div>
                            <div class="name ml10">{{ item.label }}</div>
                          </el-checkbox>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul class="letter-list">
                    <li v-for="(letter,index) in tabData.letters"
                      :key="index"
                      :class="{'active':tabData.activeLetter === letter}"
                      @click="handleLetter(letter)">{{ letter }}</li>
                  </ul>
                </el-checkbox-group>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="title">
            已选 {{ hasSelectNum || ''}}
          </div>
        </div>
        <div class="tab-pane">
          <el-tag v-for="(tag, index) in tabData.staffSelect"
            style="margin-right: 15px; margin-top: 10px"
            :key="tag"
            closable
            @close="handleClose(index,'staffSelect')">{{ tag }}</el-tag>
        </div>
      </div>

    </div>
    <div class="popover-footer">
      <!-- <el-button v-model="isDefault">保存为常用人员</el-button> -->
      <el-button type="primary"
        @click="confirm">确定</el-button>
    </div>
    <el-button slot="reference"
      class="select-member-btn">{{tabData.staffSelect[0] || '选择会员'}}</el-button>
  </el-popover>
</template>

<script>
import './member-select.styl'
export default {
  name: "MemberSelect",
  components: {

  },
  data() {
    return {
      visible: false,
      isDefault: false,
      searchWord: '',
      activeName: 'staff',
      tabData: {
        common: [],
        staff: [
          {
            letter: 'A',
            data: [
              {
                label: '安飞',
                value: '安飞'
              }
            ]
          },
          {
            letter: 'W',
            data: [
              {
                label: '王丽霞',
                value: '王丽霞'
              }
            ]
          },
          {
            letter: 'Z',
            data: [
              {
                label: '张威',
                value: '张威'
              },
              {
                label: '张进忠',
                value: '张进忠'
              }
            ]
          }
        ],
        staffSelect: [],
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        activeLetter: 'W'
      }
    }
  },
  computed: {
    hasSelectNum() {
      return this.tabData.staffSelect.length
    }
  },
  methods: {
    handleClose(index, name) {
      this.tabData[name].splice(index, 1)
    },
    confirm() {
      this.visible = false
      this.$emit('confirm', this.tabData.staffSelect)
    },
    handleLetter(letter) {
      this.tabData.activeLetter = letter
    }
  }
}
</script>

<style lang="stylus" scoped></style>
