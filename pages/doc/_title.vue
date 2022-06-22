<template>
  <div>
    <h1>这是项目文档详情页面</h1>
    <el-cascader
        v-model="value"
        :props="optionProps"
        :options="options"
        @change="handleChange">
    </el-cascader>
    <h3>{{this.releaseNote}}</h3>
    <el-card v-for="item in projectList" class="box-card">
      <h1>{{item.title}}</h1>
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
        label: 'title',
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
      this.$axios.$get('/api/core/doc/listAllChildNode/' + value[index]).then((response) => {
        this.projectList = response.data.childList
      })
      this.$axios.$get('/api/core/doc/getOne/' + value[index]).then((response) => {
        this.releaseNote = response.data.doc.releaseNote
      })
    },
  },
  mounted() {
    if (typeof(this.id)!="undefined"){
      localStorage.setItem('currentDocId', this.id)
    }

    this.$axios.$get('/api/core/doc/listAllChildNode/' + localStorage.getItem('currentDocId')).then((response) => {
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
