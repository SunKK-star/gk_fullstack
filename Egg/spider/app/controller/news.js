'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const list = await this.service.news.getNewsList()
    await this.ctx.render('news',{
      list
    })
  }
  async content() {
    let aid = this.ctx.query.aid;
    let data = await this.service.news.getNewsContent(aid)
    
    console.log(data);
    await this.ctx.render("newsDetail",{
      newsDetail: data[0]
    })
  }
}

module.exports = NewsController;
