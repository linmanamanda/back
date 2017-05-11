const model = require('./../model/invitation')

module.exports.init = (router) => {
  router.get('/invitations', getInvitations)
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