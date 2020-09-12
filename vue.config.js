module.exports = {
  publicPath: './'
  // publicPath: './',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
  //       target: 'http://47.104.62.208:4321',
  //       // target: 'http://21m16493e8.wicp.vip',
  //       // 允许跨域
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
