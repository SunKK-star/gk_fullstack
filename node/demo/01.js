const http = require('http')
const formatApi = require("./commonJS/1.js")
console.log(formatApi('fhdskhfs/fds'));
http.createServer((req, res) => {
  console.log(req);

  res.writeHead(200, {"Content-type": "text/html;charset = 'utf-8' "});
  res.write("<header><meta charset='utf-8'></header>") // 解决乱码
  res.write("this is nodejs");
  res.write("<h1 >你好，nodejs</h1>")
  const api = api(u)
  res.end();
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081"); 
