'use strict';
const ObjectId = require('mongodb').ObjectID
const Controller = require('egg').Controller;

class NewsListController extends Controller {
  async index() {
    // let data = await this.app.mongo.findOneAndDelete('col', {
    //   filter: {name: '王五'}
    // })
    // let res = await this.app.mongo.find('col',{query:this.app.getObectId('60644f9aaf7b8f78c6d5aee2')})
    // let result = await this.app.mongo.insertOne('col',{doc:{name: '王五',age: 18}})
    // await this.app.mongo.findOneAndUpdate('col',{
    //   filter: {name: '王五'},
    //   update: {
    //     $set: {
    //       name: 'fdsfasfa',
    //       gender: 'male'
    //     }
    //   }
    // })
    const res = await this.app.mongo.aggregate('order', {
      pipeline: [
        {
          $lookup: {
            from: 'order_item',
            localField: 'order_id',
            foreignField: 'order_id',
            as: 'items'
          }
        },
        {
          $project: {
            trade_no: 1,
            all_price: 1,
            all_num: 1,
            items: 1
          }
        },
        {
          $match: {
            "all_price": { $gte: 90 }
          }
        }
      ], options: {}
    })
    console.log(res);
    this.ctx.body = res
  }
}

module.exports = NewsListController;
