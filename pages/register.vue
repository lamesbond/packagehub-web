<template>
  <!--注册-->
  <div class="wrap">
    <div v-if="step === 1" class="tdbModule register">
      <div class="registerTitle">注册账户</div>

      <div class="registerCont">
        <ul>
          <li class="telNumber">
            <span class="dis">邮箱</span>
            <input class="input" v-model="userInfo.email" />
            <button v-if="!sending" class="button" @click="send()">获取验证码</button>
            <button v-else disabled class="button disabled">{{ leftSecond }}秒后重发</button>
          </li>

          <li>
            <span class="dis">邮箱验证码</span>
            <input class="input" v-model="userInfo.code" />
            <span class="info">请输入验证码</span>
          </li>

          <li>
            <span class="dis">密码</span>
            <input type="password" v-model="userInfo.password" class="input" />
            <span class="info">6-24个字符，英文、数字组成，区分大小写</span>
          </li>

          <li class="agree">
            <input type="checkbox" checked />
            我同意《<NuxtLink to="#" target="_black">packagehub注册协议</NuxtLink>》
            <span>请查看协议</span>
          </li>
          <li class="btn">
            <button @click="register()">提交注册</button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import '~/assets/css/register.css'
export default {
  data() {
    return {
      step: 1, //注册步骤
      userInfo: {

      },
      sending: false, // 是否发送验证码
      second: 10, // 倒计时间
      leftSecond: 0, //剩余时间
    }
  },

  methods: {
    //发邮件
    send() {
      if (!this.userInfo.email) {
        this.$message.error('请输入邮箱')
        return
      }

      if (this.sending) return
      this.sending = true

      this.timeDown()

      this.$axios.$get('/api/sms/email/send/' + this.userInfo.email).then((response) => {
        this.$message.success(response.message)
      })
    },

    //倒计时
    timeDown() {
      console.log('倒计时')
      this.leftSecond = this.second

      const timmer = setInterval(() => {
        this.leftSecond--
        if (this.leftSecond <= 0) {
          clearInterval(timmer)
          this.leftSecond = this.second
          this.sending = false
        }
      }, 1000)
    },

    //注册
    register() {
      this.$axios.$post('/api/core/userInfo/register', this.userInfo).then((response) => {
        this.step = 2
      })
    },
  },
}
</script>
