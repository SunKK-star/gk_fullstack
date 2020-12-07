存储服务

www web 服务 3000
mongodb 27017
mysql 3306

全栈
:8080 vue 前端 npm run serve
webpack  webpack-dev-server
vue-router

:3000 后端 node + go
:27017 数据库服务           与 web服务 通过 ip与端口交流
MVC

1.启动mongodb 进程
  mongod --dbpath "E:/data/db"
  NOSQL  /test/a.bson
  mysql是关系型数据库
  mongo 数据库的交互命令行 
## mongo 的交互语句
- show dbs;
- use tutorial;
- mysql 要去建表
  mongodb 直接用
  对前端非常友好
  给个json 它就存了 它没有太严格的要求
  定义的字段可有可无 没有那么严格
  适合物联网时代以及碎片化信息的收集
- db.users.insert({username: '阿汤哥'});
- mysql table -> mongodb collection 文档型的
- db.show collection
- find()
  $and
  ObjectId("")
- update()
- db.users.update(
... {username: "smith"},
... {$set:{country: "Canda"}};
- db.numbers.find({num: 500}).explain("executionStats");
- 索引
  mysql 关系型数据库 跟 mongodb NOSQL都有学习，
  mongodb对 js特别友好，json存就可以，
  索引进行过学习
  nums 2000条json  num:i
  nums:500 
db.numbers.createIndex({num:1});  创建索引

- 电商应用
  node mongodb
  npm install mongoose 安装数据库驱动

- 数据怎么进入数据库
  - 先连接
    mongodb url  once('open')
  - 对数据库建模
    userSchema 字段名 + 类型
    mongoose.model("User",userSchema)
    new User.save()