const model = require('./../model/user')


module.exports.init = (router) => {
  router.get('/users', getUsers)
}


/**
 * 获取全部用户信息
 * @param  {object}   ctx  koa上下文对象
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const getUsers = async (ctx, next) => {
  let query = ctx.request.query

  let result = await model.getUsers(query)

  // ctx.body = {
  //   code: 0,
  //   data: result 
  // }
  ctx.body = result
}

