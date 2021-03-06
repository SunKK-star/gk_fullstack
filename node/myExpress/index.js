const http = require('http');
const querystring = require('querystring')
const app = require('./module/index')
const ejs = require('ejs')
const { MongoClient } = require('mongodb')


http.createServer(app).listen(8081);

// 注册get/post事件
app.get('/', function (req, res) {
  const assert = require('assert');

  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'test';
  // const client = new MongoClient(url,{ useUnifiedTopology: true });
  // Use connect method to connect to the server
  MongoClient.connect(url,{ useUnifiedTopology: true }, (err, client) => {
    if(err) {
      console.log(err);
      return;
    }
    const db = client.db(dbName);
    db.collection('admin').find({}).toArray((err,result) => {
      if(err){
        console.log(err);
      }
      client.close();
      ejs.renderFile('./view/index.ejs', {
        list: result
      }, (err, data) => {
        res.send(data)
      })
    })
  })
  
})

app.get('/login', function (req, res) {
  ejs.renderFile("./stack/index.ejs", {}, (err, data) => {
    res.send(data)
  })
})

app.get('/register', function(req, res) {
  ejs.renderFile("./view/register.ejs",{},(err, data) => {
    res.send(data)
  })
})

app.post('/doLogin', function (req, res) {
  res.send(req.body)
})

app.post('/doRegister', function (req, res) {
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'test';
  let body = querystring.parse(req.body)
  MongoClient.connect(url, { useUnifiedTopology: true }, {}, (err,client) => {
    if(err){
      console.log(err);
      return;
    }
    let db = client.db(dbName);
    db.collection('admin').insertOne(body, (err, result) => {
      res.send('增加数据成功', result);
      client.close();
    })
  })
})


