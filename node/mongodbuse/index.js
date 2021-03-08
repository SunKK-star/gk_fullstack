const { MongoClient } = require('mongodb')
const assert = require('assert')

const url = 'mongodb://127.0.0.1:27017'

// 定义我们要操作的数据库
const bdName = 'test'

// 实例化MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connect successfully to server');
  const db = client.db(bdName);

  // 1. 查找数据


  // 2. 增加数据
  // db.collection('admin').insertOne({"name": "甘昆", "age": 23}, (err, result) => {
  //   if(err) { // 增加失败
  //     console.log(err);
  //     return;
  //   }
  //   console.log('增加成功', result.insertedId);
  //   db.collection('admin').find().toArray((err, data) => {
  //     console.log(data);
  //     client.close();
  //   })
  // })
  // 3. 修改数据
  db.collection('admin').updateOne({ "name": "gk" }, { $set: { "age": 10 } }, (err, res) => {
    if (err) {
      console.log('修改失败了');
    }
    console.log('修改成功了', res.upsertedId);
    db.collection('admin').find().toArray((err, data) => {
      console.log(data);
      client.close();
    })
  })

})