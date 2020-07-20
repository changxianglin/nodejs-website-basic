const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt')

// 读取文件
// fs.readFile(fileName, (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   // data 是二进制需要转换为字符串
//   console.log(data.toString())
// })

// 写入文件
// const content = '这里新写入的内如\n'
// const opt = {
//   flag: 'a' // 追加写入, 覆盖用 'w'
// }
// fs.writeFile(fileName, content, opt, (err) => {
//   if(err) {
//     console.log(err)
//   }
// })

// 判断文件是否存在
// fs.exists(fileName, (exist) => {
//   console.log('exist: ', exist)
// })