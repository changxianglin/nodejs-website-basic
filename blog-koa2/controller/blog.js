const xss = require('xss')
const { exec, escape } = require('../db/mysql')

const getList = async (author, keyword) => {
  author = escape(author)
  keyword = keyword
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author=${author} `
  }
  if (keyword) {
    sql += `and title like %${keyword}% `
  }
  sql += `order by createtime desc;`

  // 返回 promise
  return await exec(sql)
}

const getDetail = async (id) => {
  id = escape(id)
  const sql = `select * from blogs where id=${id}`
  const rows = await exec(sql)
  return rows[0]
}

const newBlog = async (blogData = {}) => {
  // blogData 是一个博客对象, 包含 title content author 属性
  const title = xss(escape(blogData.title))
  const content = xss(escape(blogData.content))
  const author = escape(blogData.author)
  const createtime = Date.now()

  const sql = `
    insert into blogs (title, content, createtime, author) 
    values (${title}, ${content}, ${createtime}, ${author})
  `
  const insertData = await exec(sql)
  return {
    id: insertData.insertId,
  }
}

const updateBlog = async (id, blogData = {}) => {
  // id 就是需要更新博客的 id
  // blogData 是一个博客对象, 包含 title content 属性
  const title = xss(escape(blogData.title))
  const content = xss(escape(blogData.content))

  const sql = `
    update blogs set title=${title}, content=${content} where id=${id}
  `

  const updateData = await exec(sql)
  if (updateData.affectedRows > 0) {
    return true
  }
  return false
}

const delBlog = async (id, author) => {
  // id 是要删除博客 id
  id = escape(id)
  author = escape(author)
  const sql = `delete from blogs where id=${id} and author=${author};`
  const deleteData = await exec(sql)
  if (deleteData.affectedRows > 0) {
    return true
  }
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
}