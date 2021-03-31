'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过抓取数据显示到页面中
    let api = this.config.api+'appapi.php?a=getPortalList&catid=20&page=1'
    let res = await this.ctx.curl(api)
    let list = JSON.parse(res.data).result // 返回的是Buffer
    return list
  };
  async getNewsContent(aid) {
    let api = this.config.api+'appapi.php?a=getPortalArticle&aid='+aid;
    let res = await this.ctx.curl(api)
    let list = JSON.parse(res.data).result // 返回的是Buffer
    return list
  }
}

module.exports = NewsService;
