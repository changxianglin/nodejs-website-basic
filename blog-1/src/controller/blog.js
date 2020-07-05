const getList = (author, keyword) => {
  // 先返回假数据(格式是正确的)
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1111111111',
      createTime: '1593916851351',
      author: 'vhsj',
    },
    {
      id: 2,
      title: '标题2',
      content: '内容222222222',
      createTime: '1593916923383',
      author: 'lisi',
    }
  ]
}

const getDetail = (id) => {
  // 先返回假数据
  return  {
    id: 1,
    title: '标题1',
    content: '内容1111111111',
    createTime: '1593916851351',
    author: 'vhsj',
  }
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象, 包含 title content 属性

  return {
    id: 3, // 表示新建博客,插入到数据表中的 id

  }
}

const updateBlog = (id, blogData = {}) => {
  // id 就是需要更新博客的 id
  // blogData 是一个博客对象, 包含 title content 属性

  return true
}

const delBlog = (id) => {
  // id 是要删除博客 id

  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
}