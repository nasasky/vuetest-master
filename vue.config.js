module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuetest/'
    : '/',
  devServer: {
    proxy: {
      '/': {
        target: 'https://nasaskyx.club',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}
