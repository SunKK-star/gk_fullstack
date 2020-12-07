// 数据库驱动
const mongoose = require('mongoose');
// 将物理的数据存储转变为json对象
// Schema 帮我们创建类，给我们API  粘合剂
// 只要看到Schema 就相当于看到了表结构
const Schema = mongoose.Schema;
const arrticleSchema = new Schema({
  title: String,
  date: Date,
  content: String
})
const LinkSchema = new Schema({
  name: String,
  href: String,
  newPage: Boolean
})
const userScheme = new Schema({
  name: String,
  password: String,
  email: String,
  emailCode: String,
  createTime: Number,
  articles: [arrticleSchema],
  links: [LinkSchema]
})

const User = mongoose.model('User',userScheme) // 构建模型

new User({
  name: 'tmp',
  password: '0000',
  email: 'lizun@163.com',
  emailCode: '12345',
  createTime: Date.now(),
  articles: [],
  links: []
}).save(function() {

})

mongoose.connect('mongodb://127.0.0.1:27017/test')
const db = mongoose.connection;
db.on('err', function() {
  console.log('db err');
})
db.once('open', function() {
  console.log('db open');
})
