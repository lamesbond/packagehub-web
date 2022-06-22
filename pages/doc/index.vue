<template>
  <div>
    <h1>这是文档页面</h1>
    <el-card v-for="item in docList" class="box-card">
      <NuxtLink :to="{name: 'doc-title', params: {title: item.title, id: item.id}}" target="_black">{{item.title}}</NuxtLink>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      docList: [
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$axios.$get('/api/core/doc/listNextChildNode/' + 0 + '/' + 0).then((response) => {
        this.docList = response.data.childList
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
