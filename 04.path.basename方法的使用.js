const path = require('path')

// 定义文件的存放路径
const fpath = '/files/1.txt'

// 文件完整的名称
// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.txt')
console.log(nameWithoutExt)
