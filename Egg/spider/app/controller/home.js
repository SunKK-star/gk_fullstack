'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  async index() {
    this.ctx.session.userInfo = {
      name: 'gk',
      age: 18
    }
    let obj = {
      name: 'gk',
      age: 18
    }
    const data = JSON.stringify(obj);
    
    await this.ctx.render('home')
  }

  async add() {
    let data = this.ctx.request.body;
  }
}

module.exports = HomeController;
