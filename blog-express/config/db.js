const env = process.env.NODE_ENV // 环境变量

// 配置
let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
  // mysql
    MYSQL_CONF = {
      host: 'localhost',
      user: 'root',
      password: '1234567m',
      port: '3306',
      database: 'myblog'
    }
    // redis
    REDIS_CONF = {
      host: '127.0.0.1',
      port: '6379',
    }
}

if (env === 'production') {
    MYSQL_CONF = {
      host: 'localhost',
      user: 'root',
      password: '1234567m',
      port: '3306',
      database: 'myblog'
    }
    REDIS_CONF = {
      host: '127.0.0.1',
      port: '6379',
    }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
}