const fs = require('fs')

const walkFile = (path, mime) => {
  let files = fs.readdirSync(path)

  let fileList = {}

  files.forEach((file) => {
    let item = file.split('.')
    console.log(item)
  })
}

walkFile(__dirname)