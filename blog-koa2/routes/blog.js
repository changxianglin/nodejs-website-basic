const router = require('koa-router')()

const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SucessModel, ErrorModel } = require('../modal/resmodel')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/blog')

router.get('/list', async function (ctx, next) {
  let author = ctx.query.author || ''
  const keyword = ctx.query.keyword || ''

  if (ctx.query.isadmin) {
      console.log('is admin')
      // 管理员界面
      if (ctx.session.username == null ) {
          console.error('is admin, but no login')
          // 未登录
          ctx.body = new ErrorModel('未登录')
          return
      }

      // 强制查询自己的博客
      author = ctx.session.username
  }
  const listData = await getList(author, keyword)
  ctx.body = new SucessModel(listData)
})

router.get('/detail', async (ctx, next) => {
  const data = await getDetail(ctx.query.id)
  ctx.body = new SucessModel(data)
})

router.post('/new', loginCheck, async (ctx, next) => {
  const author = ctx.session.username
  const body = ctx.request.body
  body.author = author
  const data = await newBlog(body)
  ctx.body = new SucessModel(data)
})

router.post('/update', loginCheck, async (ctx, next) => {
  const val = await updateBlog(ctx.query.id, ctx.body) 
  if (val) {
    ctx.body = new SucessModel()
  } else {
    ctx.body = new ErrorModel('更新博客失败')
  }
})

router.post('/del', loginCheck, async (ctx, next) => {
  const author = ctx.session.username
  const val = await delBlog(ctx.query.id, author)
  if (val) {
    ctx.body = new SucessModel()
  } else {
    ctx.body = new ErrorModel('删除博客失败')
  }
})

module.exports = router
