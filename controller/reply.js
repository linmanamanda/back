const model = require('./../model/reply')
const verify = require('./../middleware/verify-jwt')

module.exports.init = (router) => {
  router.get('/replys', getReplys)
  router.patch('/reply', updateReply)
  router.delete('/reply', deleteReply)
}

/**
 * 获取全部评论信息
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const getReplys = async (ctx, next) => {
  try {
    let query = ctx.request.query
    let result = await model.getReplys(query) 
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
const updateReply = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.updateReply(body)
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
const deleteReply = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.deleteReply(body)

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



