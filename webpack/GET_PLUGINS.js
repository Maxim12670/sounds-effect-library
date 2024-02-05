const path = require('path') // const PATH = require('./CONSTANTS')
const fs = require('fs')

const getPlugins = () => {
  const pluginsPath = path.resolve(__dirname, '../src/plugins')// `${PATH.src}/pages`
  const pluginsDirs = fs.readdirSync(pluginsPath)
  let result = []
  pluginsDirs.forEach((pageDirName) => {
    const name = pageDirName
    const files = fs.readdirSync(`${pluginsPath}/${name}`)
    files.forEach(item => {
      result = [...result, `${pluginsPath}/${name}/${item}`]
    })
  })
  return result
}

module.exports = { getPlugins }
