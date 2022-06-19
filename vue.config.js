const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',   //重写请求路径
        },
      }
    }
  }
})
