'use strict';

module.exports = app => {
 class AdminController extends app.Controller {
  async index() {
    const {ctx} = this;
    ctx.body = 'admin';
  }
 }
 return AdminController;
};
