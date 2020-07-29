const crypto = require('crypto')
const key = require('../config/key')
// 密匙
const SECRET_KEY = key.KEY
console.log('加密', SECRET_KEY)

// md5 加密
function md5(content) {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}

module.exports = {
  genPassword
}