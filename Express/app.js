const express = require('express')
const ejs = require('ejs');
const app = express();
app.engine('html', ejs.__express)
app.set("view engine", "html")
app.use(express, static("static"))   
app.get('/', function(req, res) {
 res.send('fdsgfdgfsdgsdf')
})

app.get('/news', (req, res) => {  
  let userInfo = {
    name: '张三',
    age: 19
  }
  res.render('index', {
    userInfo
  })
})

app.get('/new', function(req, res) {
  title = "<h1>绑定html数据</h1>"
  res.render('index', {
    title
  })
})

app.listen('3001')