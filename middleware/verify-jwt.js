const config = require('../config/config')
const jwt = require('jsonwebtoken')

module.exports = async (ctx, next) => {
  let authorization =  ctx.request.header.authorization
  let token = ''
  let payload = null

  if (authorization) {
    token = authorization.split(' ')[1]
  
    try {
      payload = jwt.verify(token, config.jwt.secret)
      
      await next()
    } catch (error) {
      ctx.body = {
        code: 1,
        error: {
          message: error.message
        }
      }
    }
  } else {
    ctx.body = {
      code: 1,
      error: {
        message: 'jwt为空'
      }
    }
  }
}
