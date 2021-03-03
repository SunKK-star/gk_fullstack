const http = require('http');
const app = require('./module/index')
const ejs = require('ejs')

http.createServer(app).listen(8081);

// 注册get/post事件
app.get('/', function (req, res) {
    res.send('首页')
})

app.get('/login', function (req, res) {
  ejs.renderFile("./stack/index.ejs", {}, (err, data) => {
    res.send(data)
  })  
})

app.post('/doLogin', function (req, res) {
    res.send(req.body)
})



