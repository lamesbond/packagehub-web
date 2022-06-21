<template>
  <div>
    <h1>这是项目文件详情页面</h1>
    <el-cascader
        v-model="value"
        :options="options"
        @change="handleChange">
    </el-cascader>
  </div>
</template>

<script>
export default {
  name: "",
  async asyncData({ $axios, params }) {
    let projectName = params.name //通过路由参数获取标的id
    console.log("projectanme:" + projectName)
    console.log("projecid:" + params.id)
    return {
      id: params.id,
      name: params.name
    }
  },
  data() {
    return {
      value: [],
      options: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {

    },
    handleChange(value) {
      console.log(value);
    }

  },
  mounted() {
    this.$axios.$get('/api/core/project/listMenuById/' + this.id).then((response) => {
      this.projectList = response.data.projectMenu
    })
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
