const model = require('./../model/user')


module.exports.init = (router) => {
  router.get('/users', getUsers)
  router.patch('/users', updateUser)
  router.delete('/users', deleteUser)
}


/**
 * 获取全部用户信息
 * @param  {object}   ctx  koa上下文对象
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const getUsers = async (ctx, next) => {
  try {
    let query = ctx.request.query
    let result = await model.getUsers(query)

    ctx.body = {
      code: 0,
      data: result 
    }
  } catch (error) {
    ctx.body = {
      code: 1,
      error
    }
  }
}

/**
 * 根据邮箱修改指定用户信息
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const updateUser = async (ctx, next) => {
  let body = ctx.request.body
  let result = await model.updateUser(body)

  ctx.body = {
    code: 0,
    data: result
  }
}

const deleteUser = async (ctx, next) => {
  let body = ctx.request.body
  let result = await model.deleteUser(body)

  ctx.body = {
    code: 0,
    data: result
  }
}
