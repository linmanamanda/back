const model = require('./../model/report')
const verify = require('./../middleware/verify-jwt')

module.exports.init = (router) => {
  router.get('/reports/users', getUserReports)
  router.patch('/reports/users', updateUserReport)
  router.delete('/reports/users', deleteUserReport)
}

/**
 * 获取全部举报信息
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const getUserReports = async (ctx, next) => {
  try {
    let query = ctx.request.query
    let result = await model.getUserReports(query) 
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
 * 修改评论信息
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const updateUserReport = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.updateUserReport(body)
    ctx.body = {
      code: 0
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
 * 删除评论信息
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const deleteUserReport = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.deleteUserReport(body)

    ctx.body = {
      code: 0,
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



