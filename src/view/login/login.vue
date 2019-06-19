/*
 * FileName: 登陆
 * Project: yun-industry-admin-vue
 * File Created: Tuesday, 11th September 2018 9:42:07 am
 * Author: LiuBing
 */
<template>
  <div class="login">
    <div class="login-main">
      <div class="welcome">
        <div><img :src="logo" /></div>
        <p>欢迎登录凯儿得乐库存管理系统</p>
      </div>
      <div class="form-area">
        <div class="login-form">
          <el-form ref="loginForm"
            :model="loginData"
            :rules="rules"
            :status-icon="true"
            :show-message="false">
            <el-form-item prop="login">
              <el-input placeholder="请输入手机号／邮箱"
                prefix-icon="icon-user"
                size="default"
                v-model="loginData.login">
              </el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input placeholder="请输入密码"
                size="default"
                prefix-icon="icon-password"
                v-model="loginData.pwd">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="remember-pwd">
          <div>
            <el-checkbox v-model="rememberPwd"
              label="记住密码"></el-checkbox>
            <el-checkbox v-model="autoLogin"
              label="自动登录"></el-checkbox>
          </div>
          <a class="forgot-pass">忘记密码？</a>
        </div>
        <div class="login-button">
          <el-button type="primary"
            size="default"
            class="green-btn"
            @click="submitLogin">登陆</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './login.styl'
import { doLogin } from '@/api/common/index.js'
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(this.$message('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      logo: require('../../assets/img/logo.png'),
      loginData: {
        login: '',
        pwd: ''
      },
      rules: {
        login: [
          {
            required: true, message: '请输入用户名'
          }
        ],
        pwd: [
          {
            validator: validatePass, trigger: 'blur'
          }
        ]
      },
      rememberPwd: false,
      autoLogin: false
    }
  },
  methods: {
    ...mapActions(['saveUserInfo']),
    submitLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          doLogin(this.loginData,'application/x-www-form-urlencoded').then(res => {
            // this.saveUserInfo(res)
            const redirect = this.$route.query.redirect
            if (redirect) {
              this.$router.push(redirect)
            } else {
              this.$router.push({
                name: 'IndexPage'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  }
}

</script>
<style lang='stylus' scoped>
</style>