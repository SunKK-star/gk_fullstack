'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 调用服务里的方法
    let obj = await this.service.news.getNewList();
    await this.ctx.render('index', {
      arr: obj.list,
      info: obj.info
    });
    console.log(this.config.api);
    console.log(this.service.user.getUserInfo());
  }
}

module.exports = HomeController;
