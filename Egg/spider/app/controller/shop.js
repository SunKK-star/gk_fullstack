'use strict';

const Controller = require('egg').Controller;

class ShopController extends Controller {
  async index() {
    this.ctx.body = {
      name: 'fsda'
    }
  }
}

module.exports = ShopController;
