module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    port: 8080, //端口号
    https: false,
    open: true, //配置自动启动浏览器
    //配置多个代理
    proxy: {
      "/api": {
        target: "https://autumnfish.cn", //要访问的接口
        changOrigin: true, //开启代理
        pathRewrite: {
          '^/api': '' //这里理解为'/api'代替target里面的地址
        }
      }
    }
  }
}