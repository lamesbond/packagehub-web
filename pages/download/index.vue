<template>
  <div>
    <h1>这是下载页面</h1>
    <el-card v-for="item in projectList" class="box-card">
      <NuxtLink :to="{name: 'download-name', params: {name: item.name, id: item.id}}" target="_black">{{item.name}}</NuxtLink>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      projectList: [
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$axios.$get('/api/core/project/listNextChildNode/' + 0 + '/' + 0).then((response) => {
        this.projectList = response.data.childList
      })
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
