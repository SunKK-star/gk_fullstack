'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const auth = app.middleware.auth({title: '这是news中间件'})
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', auth, controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.post('/add', controller.home.add)
  router.get('/login', controller.login.index);
  router.get('/shop', controller.shop.index)
};
