<template>
  <div>
    <h1>这是文档页面</h1>
    <el-card v-for="item in docList" class="box-card">
      <div slot="scope" class="text item"><span>{{item}}</span></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      docList: [
        '111111111',
        '222222222',
        '333333333'
      ]
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
