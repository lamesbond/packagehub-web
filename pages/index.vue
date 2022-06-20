<template>
  <main>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item, index) in carousel_list" :key="index">
        <h3 class="small"><img :src="item" alt /></h3>
      </el-carousel-item>
    </el-carousel>
    <div class="new-announcement">
      <div class="new-announcement-title">最新公告</div>
      <div class="new-announcement-content">
        <div id="scrollDiv">
          <ul style="margin-top: 0px;">
            <li>
              <a class="black-link" href="公司公告详细.html" target="_blank">
                packagehub初号版本发布啦
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import '~/assets/css/index.css'

export default {
  data() {
    return {
      carousel_list: [
        'https://liubusi-packagehub.oss-cn-shanghai.aliyuncs.com/carousel/carousel-qq.png',
        'https://liubusi-packagehub.oss-cn-shanghai.aliyuncs.com/carousel/carousel-tiktok.png',
        'https://liubusi-packagehub.oss-cn-shanghai.aliyuncs.com/carousel/carousel-weixin.png',
        'https://liubusi-packagehub.oss-cn-shanghai.aliyuncs.com/carousel/carousel-twitter.png'
      ]
    }
  }
}
</script>
