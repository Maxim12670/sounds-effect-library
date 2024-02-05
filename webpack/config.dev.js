const { PATH } = require('./CONSTANTS')

const configDev = {
  mode: 'development',
  devServer: {
    port: 3035,
    open: true,
    static: {
      directory: PATH.src,
      publicPath: PATH.dist
    }
  },
  devtool: 'inline-source-map'

}

module.exports = { configDev }
