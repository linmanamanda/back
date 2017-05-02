const middlewares = require('../middleware/index')
const userService = require('../service/user')


module.exports.init = (router) => {
  router.get('/users', getUsers)
}


/**
 * 获取用户信息
 * @param  {object}   ctx  koa上下文对象
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const getUsers = async (ctx, next) => {
  let result = await userService.getUsers()

  ctx.body = result
}

