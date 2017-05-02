let index = async (ctx) => {
  ctx.body = {
    today_news: '总算理解promise啦！'
  }
}


module.exports.init = (router) => {
  router.get('/welcome', index)
}