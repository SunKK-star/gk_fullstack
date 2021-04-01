'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    this.ctx.body = '后台商品系统'
  }
  async add() {
    this.ctx.body = '增加商品'
  }
  async edit() {
    this.ctx.body = '文章商品'
  }
}

module.exports = ProductController;
