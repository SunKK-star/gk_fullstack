const mongoose = require('mongoose')
mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function (err) {
    if(!err) {
      console.log("连接成功");
    }
  });


module.exports = mongoose

