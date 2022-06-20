module.exports = {
  server: {
    port: 3000, // default: 3000
  },

  head: {
    title: 'packagehub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'meta-key-words',
        name: 'keywords',
        content:
          'packagehub，刘布斯精心打造，为您提供卓越的制品托管服务',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'packagehub，刘布斯精心打造，为您提供卓越的制品托管服务',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    // CSS file in the project
    '~/assets/css/common.css',
  ],

  modules: [
    '@nuxtjs/axios', //引入axios模块
  ],

  env: {
    BASE_API: 'http://localhost',
  },

  axios: {
    // Axios options here
    baseURL: 'http://localhost',
  },

  plugins: [
    '~/plugins/axios',
    '~/plugins/element-ui.js',
    '~/plugins/vue-qriously-plugin.js',
  ],

  // ssr: false, //设置为false表示客户端渲染，true为服务器端渲染，默认为true
}
