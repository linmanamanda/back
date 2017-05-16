const model = require('./../model/chart')
const verify = require('./../middleware/verify-jwt')

module.exports.init = (router) => {
  router.get('/charts', verify, getCharts)
}

const getCharts = async (ctx, next) => {
  try {
    let query = ctx.request.query
    let result = await model.getCharts(query)

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