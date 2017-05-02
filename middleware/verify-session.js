module.exports = () => {
  return (ctx, next) => {
    return new Promise((resolve, reject) => {
      if (ctx.session.user) {
        resolve()
        return next()
      }
    }).catch((err) => {
      reject(err)
      return next()
    })
  }
}