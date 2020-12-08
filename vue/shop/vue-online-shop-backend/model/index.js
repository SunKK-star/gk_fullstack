// 库里有哪些collection 就有哪些集合的定义
// BD驱动

const mongoose  = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

// 电商 Product Manufacture
const prodectSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: {type: ObjectId, ref: 'Manufacturer'} 
})
const ManufacturerSchema = Schema({
  id: ObjectId,
  name: String
})
const Product = model('Product', prodectSchema)
const Manufacturer = model('Manufacturer', ManufacturerSchema)

// es5 commonJS 模块化方案       node是服务端，以稳定性为主，新特性没有很快更新
// es6 js export default {} 前端
module.exports = {Product, Manufacturer}
// 数据库的抽象，模型定义