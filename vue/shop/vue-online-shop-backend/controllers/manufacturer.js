// 模块化控制器
const { log } = require("debug");
const Module  = require("../model");
const {Manufacturer} = Module
const manufacturerController = {
  create(req, res) {
    // requset result
    // 逻辑 中心
    // Model
    // View
    const requestBody = req.body
    const newManufacturer = new Manufacturer(requestBody)
    newManufacturer.save((err, saved) => {
      if (err) {
        console.log(err);
        return;
      }
      // console.log(saved);
      // select
      Manufacturer
        .findOne({_id: newManufacturer._id})
        .exec((err, manufacturer) => res.json(manufacturer))
    })

  },
  all(req, res) {
    Manufacturer
      .find({})
      .exec((err, manufacturers) => res.json(manufacturers))
  },
  byId(req, res) {
    const idParams = req.params.id
    Manufacturer
      .findOne({_id: idParams})
      .exec((err, manufacturer) => res.json(manufacturer))
  },
  remove(req, res) {
    // url 
    const idParams = req.params.id
    Manufacturer
    .findOne({_id: idParams})
    .remove((err, manufacturer) => res.json(manufacturer))
  },
  update(req, res) {
    const idParams = req.params.id
    let manufacturer = req.body;
    Manufacturer.updateOne({
      _id: idParams
    },
    {
      ...manufacturer
    }, (err, update) => {
      console.log(update);
      res.json()
    }
    )
    

  }
}
module.exports = manufacturerController;