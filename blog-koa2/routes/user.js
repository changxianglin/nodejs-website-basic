const router = require('koa-router')()
const { login } = require('../controller/user')
const { SucessModel, ErrorModel } = require('../modal/resmodel')

router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  const data = await login(username, password)
  if (data.username) {
    // 设置 session
    ctx.session.username = data.username
    ctx.session.realname = data.realname
    ctx.body = new SucessModel()
  }
  ctx.body = new ErrorModel('登录失败')
})

router.get('/session-test', async function (ctx, next) {
  console.log('南')
  if (ctx.session.viewCount == null) {
    ctx.session.viewCount = 0
  }

  ctx.session.viewCount++

  ctx.body = {
    errno: 0,
    viewCount: ctx.session.viewCount,
  }
})

module.exports = router
