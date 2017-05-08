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

  let data = await model.getUserByEmailAndPassword(body)
  let token = ''
  let decoded = null

  if (data) {
    let profile = {
      email: data.email,
      username:  data.username,
      status: data.status,
      authority: data.authority
    }

    token = jwt.sign(profile, config.jwt.secret, {
        expiresIn: 60
    })
    

    ctx.body = {
      code: 0,
      data: {
        token
      }
    }
  } else {
    ctx.body = {
      code: 1
    }
  } 



  // try {
  //   decoded = jwt.verify(token, config.jwt.secret)
  // } catch (error) {
  //   decoded = error    
  // }

}