const http = require('http')
const fs = require('fs')

// 搭建一个web服务
var server = http.createServer(function(req, res) {
  if(res.url !=='/favicon.io') {
    res.writeHead(200, {"Content-type": "text/html"})
    const myreadstream = fs.createReadStream(__dirname + '/view/http_demo.html', 'utf-8')        //打包成文件流
    myreadstream.pipe(res)
  }
})


var io = require('socket.io')(server)

io.on('connection', function(socket) { // 声明一个io的使用
  console.log('一个socket连接成功');
  socket.on('link_to_server', (msg) => {
    // 响应客户端
    socket.emit('link_to_client', msg)
  })
})

server.listen(8888, () => {
  console.log('sercer is running ...')
})