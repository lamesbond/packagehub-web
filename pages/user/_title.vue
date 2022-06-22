<template>
  <div>
    <el-container>
      <el-aside>
        <h1>这是我的项目文档详情页面</h1>
        <el-cascader
            v-model="value"
            :props="optionProps"
            :options="options"
            @change="handleChange">
        </el-cascader>
        <el-tree
          :data="menuData"
          node-key="id"
          empty-text="页面施工中"
          default-expand-all
          :highlight-current=true
          :expand-on-click-node=false
          ref="selectTree"
          @node-click="nodeclick"
          :check-on-click-node=true>
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span v-text="data.title"></span>
          </span>
        </el-tree>
      </el-aside>
      <el-main>
        <el-input v-model="content"></el-input>
      </el-main>
    </el-container>

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
      content: '',
      menuData: [],
      optionProps: {
        value: 'id',
        label: 'title',
        children: 'children'
      },
      defaultProps: {
        children: 'children',
        title: 'title'
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
        this.menuData = response.data.childList
      })
    },
    nodeclick(node, data, obj) {
      this.$axios.$get('/api/core/doc/getOne/' + node.id).then(response => {
        this.content = response.data.doc.content
      })
      // this.$router.push('/doc/detail/' + this.$route.params.versionId + '/' + node.id)
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
