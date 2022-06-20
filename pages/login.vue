<template>
  <!--登录-->
  <div class="wrap">
    <div class="tdbModule loginPage">
      <div class="registerTitle">用户登录</div>
      <div class="registerCont">
        <ul>
          <li>
            <span class="dis">邮箱：</span>
            <input class="input" v-model="userInfo.email" />
          </li>
          <li>
            <span class="dis">密码：</span>
            <input class="input" v-model="userInfo.password" type="password" />
          </li>
          <li class="btn">
            <button @click="login()" :class="{ disabled: !isValid }">立即登录</button>
          </li>
          <li class="btn">
            <button @click="forgetPassword()" :class="{ disabled: !isValid }">忘记密码?</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/register.css'
import cookie from 'js-cookie'

export default {
  data() {
    return {
      userInfo: {
        userType: 1,
      },
      isValid: true, //表单校验是否成功
    }
  },

  methods: {
    //登录
    login() {
      this.$axios.$post('/api/core/userInfo/login', this.userInfo)
      .then((response) => {
        cookie.set('userInfo', response.data.userInfo)
        window.location.href = '/user'
      })
    },
  },
}
</script>
