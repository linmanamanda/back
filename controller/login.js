const jwt = require('jsonwebtoken')
const model = require('./../model/user')
const config = require('./../config/config')


module.exports.init = (router) => {
  router.post('/logins', login)
}

const login = async (ctx, next) => {
  let body = ctx.request.body

  let header = ctx.request.header

  let authorization = ctx.request.header.authorization

  let user = await model.getUserByEmailAndPassword(body)
  let token = ''
  let decoded = null

  if (user) {
    let profile = {
      email: user.email,
      username: user.username,
      status: user.status,
      authority: user.authority
    }

    try {
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
    } catch (error) {
      ctx.body = {
        code: 1,
        error: {
          message: 'generating jwt failed!'
        }
      }
    }

  } else {
    ctx.body = {
      code: 1,
      error: {
        message: 'user not exists!'
      }
    }
  } 
}