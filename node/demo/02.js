const url = require('url')

let api = 'http://www.baidu.com?x=zhangsan&y=18'
let getVal = url.parse(api, true).query

console.log(`姓名: ${getVal.x}, 年龄: ${getVal.y}`);
