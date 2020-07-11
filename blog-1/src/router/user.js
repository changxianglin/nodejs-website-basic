const { login } = require('../controller/user')
const { SucessModel, ErrorModel } = require('../modal/resmodel')

const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  console.log('d.toGMTString is: ', d.toGMTString())
  return d.toGMTString()
}

const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录
  if (method === 'GET' && req.path === '/api/user/login') {
    // const { username, password } = req.body
    const { username, password } = req.query
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 设置 session
        req.session.username = data.username
        req.session.realname = data.realname
        console.log('req.sessiong is: ', req.session)
        // // 操作 cookie
        // res.setHeader('Set-cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
        return new SucessModel()
      }
      return new ErrorModel('登录失败')
    })    
  }

  // 登录验证测试
  if (method === 'GET' && req.path === '/api/user/login-test') {
    if (req.session.username) {
      return Promise.resolve(new SucessModel({
        session: req.session
      }))
    }
    return Promise.resolve(new ErrorModel('尚未登录'))
  }
}

module.exports = handleUserRouter