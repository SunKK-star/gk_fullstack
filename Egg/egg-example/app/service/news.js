'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewList() {
    const info = await this.service.user.getUserInfo()
    let list = [111, 222, 333];
    return { list, info };
  }
}

module.exports = NewsService;
