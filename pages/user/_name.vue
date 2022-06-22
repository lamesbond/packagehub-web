<template>
  <div>
    <h1>这是我的项目文件详情页面</h1>
    <el-cascader
        v-model="value"
        :props="optionProps"
        :options="options"
        @change="handleChange">
    </el-cascader>
    <h3>{{this.releaseNote}}</h3>
    <el-card v-for="item in projectList" class="box-card">
      <h1>{{item.name}}</h1> <a @click="handleDownload(item.name, item.url, 1)">下载</a>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  async asyncData({ $axios, params }) {
    return {
      id: params.id,
      name: params.name
    }
  },
  data() {
    return {
      optionProps: {
        value: 'id',
        label: 'name',
        children: 'children'
      },
      value: [],
      options: [],
      releaseNote: '',
      projectList: [
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {

    },
    handleChange(value) {
      let index = value.length - 1
      this.$axios.$get('/api/core/project/listAllChildNode/' + value[index]).then((response) => {
        this.projectList = response.data.childList
      })
      this.$axios.$get('/api/core/project/getOne/' + value[index]).then((response) => {
        this.releaseNote = response.data.project.releaseNote
      })
    },
    handleDownload(name,url) {
      var a = document.createElement('a');
      var event = new MouseEvent('click');
      a.download = name;
      a.href = url;
      a.dispatchEvent(event);
    }
  },
  mounted() {
    if (typeof(this.id)!="undefined"){
      localStorage.setItem('currentProjectId', this.id)
    }

    this.$axios.$get('/api/core/project/listAllChildNode/' + localStorage.getItem('currentProjectId')).then((response) => {
      this.options = response.data.childList
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
