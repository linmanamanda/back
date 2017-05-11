const config = require('../config/config')
const jwt = require('jsonwebtoken')

module.exports = async (ctx, next) => {
  let authorization =  ctx.request.header.authorization
  let token = ''
  let payload = null

  try {
    if (authorization) {
      token = authorization.split(' ')[1]
      payload = jwt.verify(token, config.jwt.secret)
      let authority = payload.authority
      
      if (authority === 1) { // 如果当前用户的权限为普通用户，则直接返回权限不足的错误信息
        throw new Error('当前身份为普通用户，权限不足')
      } else {
        ctx.state.authority = authority // 将权限在之后的中间件共享
        await next()
      }
    } else { // 如果token为空字符串，则直接返回token为空的错误信息
      throw new Error('token为空，请重新登录')
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
