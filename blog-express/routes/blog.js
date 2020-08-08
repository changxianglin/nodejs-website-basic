var express = require('express');
var router = express.Router();

const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SucessModel, ErrorModel } = require('../modal/resmodel')
const loginCheck = require('../middleware/loginCheck')

router.get('/list', function(req, res, next) {
    let author = req.query.author || ''
    const keyword = req.query.keyword || ''

    if (req.query.isadmin) {
        console.log('is admin')
        // 管理员界面
        if (req.session.username == null ) {
            console.error('is admin, but no login')
            // 未登录
            res.json(
              new ErrorModel('未登录')
            )
            return
        }

        // 强制查询自己的博客
        author = req.session.username
    }
    const result = getList(author, keyword)
    return result.then(listData => {
      res.json(new SucessModel(listData))
    })
});

router.get('/detail', function(req, res, next) {
  const result = getDetail(req.query.id)
  return result.then(data => {
    res.json(
      new SucessModel(data)
    )
  })
})

router.post('/new', loginCheck, (req, res, next) => {
  const author = req.session.username
  req.body.author = author
  const result = newBlog(req.body)
  return result.then(data => {
    res.json(
      new SucessModel(data)
    )
  })
})

router.post('/update', loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.id, req.body)
  return result.then(val => {
    if (val) {
      res.json(
        new SucessModel()
      )
    } else {
      res.json(
        new ErrorModel('更新博客失败')
      )
    }
  })
})

router.post('/del', loginCheck, (req, res, next) => {
  const author = req.session.username
  const result = delBlog(req.query.id, author)
  return result.then(val => {
    if (val) {
      res.json(
        new SucessModel()
      )
    } else {
      res.json(
        new ErrorModel('删除博客失败')
      )
    }
  })
})

module.exports = router;