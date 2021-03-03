const http = require('http')
const url = require('url')

http.createServer((req, res) => {

  res.writeHead(200, {"Content-type": "text/html;charset = 'utf-8' "});
  res.write("<header><meta charset='utf-8'></header>") // 解决乱码
  res.write("this is nodejs");

  // 获取浏览器访问的地址
  if(req.url === '/favicon.ico')return
  console.log(url.parse(req.url, true).query);

  res.end(); 
}).listen(8081) 

