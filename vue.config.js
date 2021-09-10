const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          loader: 'raw-loader'
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .test(/\.jsx?$/)
      .exclude
      .add(resolve('src/libs/iview-pro'))
      .end()
  }
}
