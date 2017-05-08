const middleware = require('../middleware')

module.exports.init = (router) => {
  router.get('/welcomes', middleware['verify-jwt'] ,getWelcomeInfo)
  router.post('/welcomes', postWelcomeInfo)
  router.put('/welcomes', putWelcomeInfo)
  router.patch('/welcomes', patchWelcomeInfo)
  router.delete('/welcomes', deleteWelcomeInfo)
}

const getWelcomeInfo = async (ctx) => {
  ctx.body = {
    info: '获取welcome信息'
  }
}

const postWelcomeInfo = async (ctx) => {

  ctx.body = {
    info: `email - ${ctx.request.body.email}
           password - ${ctx.request.body.password}`
  }
}

const putWelcomeInfo = async (ctx) => {
  ctx.body = {
    info: `email - ${ctx.request.body.email}
           password - ${ctx.request.body.password}`
  }
}

const patchWelcomeInfo = async (ctx) => {
  ctx.body = {
    info: `email - ${ctx.request.body.email}
           password - ${ctx.request.body.password}`
  }
}

const deleteWelcomeInfo = async (ctx) => {
  ctx.body = {
    info: `email - ${ctx.request.body.email}
           password - ${ctx.request.body.password}`
  }
}


