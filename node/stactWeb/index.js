const http = require('http')
const fs = require('fs')
const common = require('./module/common')
const path = require('path')
const url = require('url')

http.createServer(function (req, res) {

  let pathname = url.parse(req.url).pathname;
  pathname = pathname === '/'?'login.html':pathname
  if (pathname === '/favicon.ico') return;
  let extname = path.extname(pathname);
  fs.readFile('./' + pathname, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end('404这个页面不存在');
    }
    let mine = common.getMine(extname)
    res.writeHead(200, { 'Content-Type': `${mine};charset="utf-8"`  });
    res.end(data);
  })

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');