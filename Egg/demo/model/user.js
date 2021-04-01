const mongoose = require('./db.js')

var UserSchema = mongoose.Schema({
  name: String,
   age: Number,
    status: {
      type: Number,
      default: 1
    }
})

const User = mongoose.model('User', UserSchema, 'users');
// 查询数据
User.find({}, (err, doc) => {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
})