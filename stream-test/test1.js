// 标准输入输出
// process.stdin.pipe(process.stdout)

const http = require('http')
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(res)  // 核心代码
  }
})

server.listen(9000)