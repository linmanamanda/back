const jwt = require('jsonwebtoken')
const model = require('./../model/user')
const config = require('./../config/config')


module.exports.init = (router) => {
  router.post('/logins', login)
}

const login = async (ctx, next) => {
  try {
    let body = ctx.request.body
    let header = ctx.request.header
    let authorization = ctx.request.header.authorization
    let user = await model.getUserByEmail(body)
    let token = ''
    let decoded = null

    if (user) {   

      if (user.password === body.password) {
        let profile = {
          email: user.email,
          username: user.username,
          status: user.status,
          authority: user.authority
        }

        token = jwt.sign(profile, config.jwt.secret, {
            expiresIn: '1h'
        })

        ctx.body = {
          code: 0,
          data: {
            token,
            username: user.username,
            status: user.status,
            authority: user.authority
          }
        }
      } else {
        throw new Error('邮箱与密码不匹配!')
      }
    } else {
      throw new Error('该邮箱用户不存在！')
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