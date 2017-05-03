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


module.exports.init = (router) => {
  router.get('/welcome', getWelcomeInfo)
  router.post('/welcome', postWelcomeInfo)
  router.put('/welcome', putWelcomeInfo)
  router.patch('/welcome', patchWelcomeInfo)
  router.delete('/welcome', deleteWelcomeInfo)
}