const loginCheck = (username, password) => {
  // 先使用假数据
  if (username === 'vhsj' && password === '123') {
    return true
  }
  return false
}

module.exports = {
  loginCheck,
}