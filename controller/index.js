const path = require('path')
const fs = require('fs')

/**
 * 读取当前目录下除了index.js外所有的controller文件，
 * 传入router参数执行相应的init方法
 * @param  {[object]} router [koa-router中的router实例]
 */
module.exports.init = (router) => {
  let controllers = fs.readdirSync(__dirname)
  controllers.forEach((controller) => {
    if (/\.js$/.test(controller) && controller!== 'index.js') {
      require(`./${controller}`).init(router)
    }
  })
}
