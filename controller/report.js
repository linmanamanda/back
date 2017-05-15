const model = require('./../model/report')
const verify = require('./../middleware/verify-jwt')

module.exports.init = (router) => {
  router.get('/reports/users', getUserReports)
  router.patch('/reports/users', manipulateUserReport)
  router.delete('/reports/users', deleteUserReport)
  router.get('/reports/invitations', getInvitationReports)
  router.patch('/reports/invitations', manipulateInvitationReport)
  router.delete('/reports/invitations', deleteInvitationReport)
  router.get('/reports/replys', getReplyReports)
  router.patch('/reports/replys', manipulateReplyReport)
  router.delete('/reports/replys', deleteReplyReport)
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
 * 封禁用户
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const manipulateUserReport = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.manipulateUserReport(body)
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


const getInvitationReports = async (ctx, next) => {
  try {
    let query = ctx.request.query
    let result = await model.getInvitationReports(query) 
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

const manipulateInvitationReport = async (ctx, next) => { // 封禁相约信息, 并将举报信息的状态置为已处理
  try {
    let body = ctx.request.body
    let result = await model.manipulateInvitationReport(body) 
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


const deleteInvitationReport = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.deleteInvitationReport(body)

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

const getReplyReports = async (ctx, next) => {
  try {
    let query = ctx.request.query
    let result = await model.getReplyReports(query) 
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

const manipulateReplyReport = async (ctx, next) => { // 封禁相约信息, 并将举报信息的状态置为已处理
  try {
    let body = ctx.request.body
    let result = await model.manipulateReplyReport(body) 
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


const deleteReplyReport = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.deleteReplyReport(body)

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



