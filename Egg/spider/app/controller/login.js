'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
   async index() {  
    const JSONdata = this.ctx.cookies.get('username',{encrypt:true});
    const data = JSON.parse(JSONdata)
    console.log(this.ctx.session.userInfo);
    this.ctx.body = `cookie${data}`;
  }
}

module.exports = LoginController;
