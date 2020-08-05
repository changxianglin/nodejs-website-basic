var express = require('express');
var router = express.Router();

const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SucessModel, ErrorModel } = require('../modal/resmodel')

router.get('/list', function(req, res, next) {
    let author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author, keyword)
    // return new SucessModel(listData)

    // if (req.query.isadmin) {
    //     // 管理员界面
    //     const loginCheckResult = loginCheck(req)
    //     if (loginCheckResult) {
    //       return loginCheckResult
    //     }

    //     // 强制查询自己的博客
    //     author = req.session.username
    // }
    const result = getList(author, keyword)
    return result.then(listData => {
      res.json(new SucessModel(listData))
    })
});

router.get('/detail', function(req, res, next) {
  res.json({
    erron: 0,
    data: 'OK',
  })
})

module.exports = router;