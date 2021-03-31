'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    let arr = [111,222,333]
    await this.ctx.render('news',{arr});
  }
  async content() {
    console.log(this.ctx.params);
    this.ctx.body = "新闻内容"
  }
}

module.exports = NewsController;
