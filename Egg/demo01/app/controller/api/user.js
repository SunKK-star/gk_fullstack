'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = '用户接口'
  }
}

module.exports = UserController;
