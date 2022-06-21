<template>
  <div class="personal-main">
    <div class="pmain-profile">
      <div class="pmain-user">
        <div class="user-head">
          <span class="head-img">
            <span>
              <img :src="userInfo.avatar" style="width:88px;height:88px;z-index:0;" />
              <i class="headframe" style="z-index:0;"></i>
            </span>
          </span>
        </div>
        <div class="user-info">
          <ul>
            <li>用户名<span>{{ userInfo.username }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import cookie from "js-cookie";

export default {
  data() {
    return {
      userInfo: {
        username: '',
        avatar: ''
      },
    }
  },

  created() {

  },
  mounted() {
      this.showInfo()
  },
  methods: {
    showInfo() {
      let userInfo = cookie.get('userInfo')
      if (!userInfo) {
        console.log('cookie不存在')
        this.userInfo = null
        return
      }
      userInfo = JSON.parse(userInfo)
      this.$axios({
        url: '/api/core/user/checkToken',
        method: 'get',
        // headers: {
        //   token: userInfo.token,
        // }
      }).then((response) => {
        console.log('校验成功')
        this.userInfo = userInfo
      })
    },
  },
}
</script>
