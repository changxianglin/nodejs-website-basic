const { ErrorModal } = require('../modal/resmodel')

module.exports = async (ctx, next) => {
  if (ctx.session.username) {
    await next()
    return
  }
  ctx.body = new ErrorModal('未登录')
}