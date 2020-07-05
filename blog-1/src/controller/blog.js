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

module.exports = {
  getList,
}