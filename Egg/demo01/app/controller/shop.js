'use strict';

const Controller = require('egg').Controller;

class ShopController extends Controller {
  async index() {
    this.ctx.body = '商品列表'
  }
}

module.exports = ShopController;
