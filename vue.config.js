const webpack = require('webpack')
module.exports = {
  publicPath: '/',
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  css: {
    extract: false,
  },
  chainWebpack:
    config => {
      const fontsRule = config.module.rule('fonts')

      fontsRule.uses.clear()
      
      config.module
        .rule('fonts')
        .test(/\.(ttf|otf|eot|woff|woff2|svg)$/)
        .use('base64-inline-loader')
        .loader('base64-inline-loader')
        .tap(options => {
          // modify the options...    
          return options
        })
        .end()
      config.module
        .rule('svg')
        .test(() => false)
        .use('file-loader')
      config.optimization.delete('splitChunks')
    },
  filenameHashing: false
}