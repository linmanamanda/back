const fs = require('fs')
const middlewares = {}
const files = fs.readdirSync(__dirname)

for (let file of files) {
  if (file === 'index.js') {
    continue
  } else {
    const fileName = file.split('.')[0]
    middlewares[fileName] = require(`./${file}`)
  }
}

module.exports = middlewares
