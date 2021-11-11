const path = require('path')


module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },

  devServer: {
    disableHostCheck: true
  },

  pluginOptions: {
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/dist/'
    : '/'
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/style/var.styl'),
        path.resolve(__dirname, './src/style/main.styl'),
      ],
    })
}
