const path = require('path')

const PATH = {
  src: path.resolve(__dirname, '../src/'),
  images: path.resolve(__dirname, '../src/assets/images'),
  plugins: path.resolve(__dirname, '../src/plugins'),
  dist: path.resolve(__dirname, '../dist'),
  scripts: path.resolve(__dirname, '../scripts')
}

module.exports = {
  PATH
}
