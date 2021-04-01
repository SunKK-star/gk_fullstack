// const mongoose = require('mongoose')
// mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms', { useNewUrlParser: true, useUnifiedTopology: true },);

// var UserSchema = mongoose.Schema({
//   name: String,
//    age: Number,
//     status: {
//       type: Number,
//       default: 1
//     }
// })

// // 定义数据库模型操作数据库
// // const User = mongoose.model('User', UserSchema); // 第一个参数的表默认首字母小写，且是复数
// const User = mongoose.model('User', UserSchema, 'users'); // 默认操作第三个参数的表
// // 查询数据
// // User.find({}, (err, doc) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(doc);
// //   }
// // })

// // 增加数据
// var u=new User({ //实例化模型 传入增加的数据
//   name:'fhds', age:22
//   })
//   u.save(() => {

//   })

// // 更新数据
// // User.updateOne({ "_id": "606519a335dbd21f8af8df68" }, { name: '哈哈哈' }, function (err, res) {
// //   if (err) {
// //     console.log(err);
// //     return;
// //   }
// //   console.log('成功')
// // });

// // 删除数据
// // User.deleteOne({ _id: "60651b7b18d4e05d6c9c9da3" }, function (err) {
// //   if (err) {
// //     console.log(err);
// //     return;
// //   }
// //   // deleted at most one tank document
// //   console.log('成功');
// // });
const mongoose = require('./model/db.js')
const OrderSchema = require('./model/order.js');

const Order = mongoose.model('Order', OrderSchema, 'order');


// Order.find({}, function (err, doc) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(doc);
//   }
// })

Order.aggregate([
  {
    $lookup: {
      from: 'order_item',
      localField: 'order_id',
      foreignField:'order_id',

      as: 'items'
    }
  }
], (err, res) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(JSON.stringify(res));
  }
})