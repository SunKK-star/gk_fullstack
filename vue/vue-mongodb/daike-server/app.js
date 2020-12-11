const Koa = require('koa')
const app =new Koa()
//解决跨域

// 建立mongodb的连接
const {db} = require('./config')
const mongoose = require('mongoose')  // 做mongodb的连接
 
mongoose.connect(db,{useNewUrlParser: true}, (err) => {
  if (err) {
    console.log('failed');
  }else {
    console.log('connect database successfully!');
  }
})

const cors = require('koa2-cors');
//帮助koa解析参数
const bodyParser = require('koa-bodyparser');
app.use(cors());
app.use(bodyParser());
const user_router=require('./routes/api/user_router')
app.use(user_router.routes())

app.listen(3000)