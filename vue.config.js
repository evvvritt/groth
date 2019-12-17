module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  // force Safari not to cache
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config
        .output
        .filename('[name].[hash].js')
        .end()
    }
  }
}
