const model = require('./../model/user')
const verify = require('./../middleware/verify-jwt')


module.exports.init = (router) => {
  router.get('/users', verify ,getUsers)
  router.patch('/users', verify ,updateUser)
  router.delete('/users', verify ,deleteUser)
}


/**
 * 获取全部用户信息
 * @param  {object}   ctx  上下文对象
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const getUsers = async (ctx, next) => {
  try {
    let authority = ctx.state.authority
    let query = ctx.request.query
    let result = await model.getUsers(query) // 用户权限为管理员和超级管理员的用户都可以查看所有用户信息
    ctx.body = {
      code: 0,
      data: result
    }
  } catch (error) {
    ctx.body = {
      code: 1,
      error: {
        message: error.message
      }
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
  try {
    let authority = ctx.state.authority
    let body = ctx.request.body
    let user = await model.getUserByEmail(body)
    if (authority > user.authority) { // 如果当前用户权限等级大于删除的用户权限等级，则执行修改操作
      let result = await model.updateUser(body)
      ctx.body = {
        code: 0
      }
    } else {
      if (authority === 1) {
        throw new Error('当前身份为管理员，权限不足')
      } else {
        throw new Error('当前身份为超级管理员，权限不足')
      }
    }
  } catch (error) {
    ctx.body = {
      code: 1,
      error: {
        message: error.message
      }
    }
  }
}

/**
 * 根据邮箱删除指定用户信息
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const deleteUser = async (ctx, next) => {
  try {
    let authority = ctx.state.authority
    let body = ctx.request.body
    let user = await model.getUserByEmail(body)

    if (authority > user.authority) { // 如果当前用户权限等级大于删除的用户权限等级，则执行删除操作
      let result = await model.deleteUser(body)

      ctx.body = {
        code: 0,
      }
    } else {
      if (authority === 1) {
        throw new Error('当前身份为管理员，权限不足')
      } else {
        throw new Error('当前身份为超级管理员，权限不足')
      }
    }
  } catch (error) {
    ctx.body = {
      code: 1,
      error: {
        message: error.message
      }
    }
  }
}
