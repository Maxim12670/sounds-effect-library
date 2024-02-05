const path = require('path') // const PATH = require('./CONSTANTS')
const fs = require('fs')

const getScripts = () => {
  const filesPath = path.resolve(__dirname, '../src/scripts')// `${PATH.src}/pages`
  const pagesDirs = fs.readdirSync(filesPath)

  const files = pagesDirs.map((filesDirName) => {
    const name = filesDirName
    return `${filesPath}//${name}`
  })

  return files
}

module.exports = { getScripts }
