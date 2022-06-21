<template>
  <!--个人中心-->
  <div class="wrapper wbgcolor">
    <div class="w1200 personal">
      <div class="credit-ad">
        <img src="~/assets/images/clist1.jpg" width="1200" height="96" />
      </div>
      <div class="personal-left">
        <UserNav />
      </div>
      <NuxtChild />
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/user.css'
import UserNav from '@/components/UserNav'
import cookie from 'js-cookie'

export default {
  components: { UserNav },

  data() {
    return {
      userType: 0,
    }
  },

  mounted() {
    let userInfo = cookie.get('userInfo')
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
      this.userType = userInfo.userType
    }
  },
}
</script>
