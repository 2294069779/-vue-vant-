// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })
module.exports = {
  devServer: {
    proxy: {
      // 老黄历
      '/api0': {
        target: 'http://v.juhe.cn/laohuangli/d',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^api0": ""
        }
      },
      // 油价
      '/api1': {
        target: 'http://apis.juhe.cn/gnyj/query',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^api1": ""
        }
      },
      //车
      '/api0': {
        target: 'http://apis.juhe.cn/cxdq/brand',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/pp": ""
        }
      },
      //笑话
      '/api0': {
        target: 'https://api.gugudata.com/news/joke',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^api2": ""
        }
      }
    }
  }

}