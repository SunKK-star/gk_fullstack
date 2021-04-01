const mongoose = require('./db.js')

const OrderSchema = mongoose.Schema({
  oreder_id: String,
  uid: Number,
  trade_no: String,
  all_price: Number,
  all_num: Number
})

module.exports = OrderSchema