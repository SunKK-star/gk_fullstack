/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1617175340230_255';

  // add your middleware config here
  config.middleware = ['authAdmin'];

  config.authAdmin = {
    // match(ctx) {
    //   if(ctx.request.url == 'admin') return true;
    //   else return false
    // }
    match: '/admin'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.mongo = {
    client: {
      host: '127.0.0.1',
      port: '27017',
      name: 'eggcms',
      user: 'eggadmin',
      password: '123456',
      options: {},
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};

