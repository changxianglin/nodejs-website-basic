const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SucessModel, ErrorModel } = require('../modal/resmodel')

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author, keyword)
    // return new SucessModel(listData)
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SucessModel(listData)
    })
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    // const data = getDetail(id)
    // return new SucessModel(data)
    const result = getDetail(id)
    return result.then(data => {
      return new SucessModel(data)
    })
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    // const blogData = req.body
    // const data = newBlog(blogData)
    // return new SucessModel(data)
    const author = 'zhangsan'
    req.body.author = author
    const result = newBlog(req.body)
    return result.then(data => {
      return new SucessModel(data)
    })
  }

  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') { 
    const result = updateBlog(id, req.body)
    return result.then(val => {
      if (val) {
        return new SucessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const author = 'zhangsan'
    const result = delBlog(id, author)
    return result.then(val => {
      if (val) {
        return new SucessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogRouter