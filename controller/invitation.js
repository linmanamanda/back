const model = require('./../model/invitation')

module.exports.init = (router) => {
  router.get('/invitations', getInvitations)
  router.patch('/invitation', updateInvitation)
  router.delete('/invitation', deleteInvitation)
}

const getInvitations = async (ctx, next) => {
  try {
    let query = ctx.request.query
    let result = await model.getInvitations(query)

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

const updateInvitation = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.updateInvitation(body)
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

const deleteInvitation = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let result = await model.deleteInvitation(body)

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

