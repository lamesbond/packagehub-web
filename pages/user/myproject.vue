<template>
  <div>
    <h1>这是我的下载页面</h1>
    <el-card v-for="item in projectList" class="box-card">
      <NuxtLink :to="{name: 'download-name', params: {name: item.name, id: item.id}}" target="_black">{{item.name}}</NuxtLink>
    </el-card>
  </div>
</template>

<script>
import cookie from "js-cookie";
export default {

  data() {
    return {
      projectList: [
      ]
    }
  },
  created() {
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      let userInfo = cookie.get('userInfo')
      console.log("=================="+JSON.stringify(userInfo))
      userInfo = JSON.parse(userInfo)
      console.log("uuuuuuuuuuuuuuuuuuuu"+userInfo.id)
      this.$axios.$get('/api/core/project/listNextChildNode/' + 0 + '/' + userInfo.id).then((response) => {
        this.projectList = response.data.childList
      })
    },
  }

}
</script>
